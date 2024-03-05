using System;
using System.Diagnostics;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Mvc;
using CREDITUP.UserHelper;
using Dtm.Framework.ClientSites.Web;

namespace CREDITUP.PageHandlers
{
    public class GlobalPageHandler : PageHandler
    {
        #region " Properties / Constants... "
        private UserManager userManager = new UserManager();
        
        //Use this array in the GlobalPageHandler’s PostProcessPageAction method  for all the orderpages.
        //TODO: Need to update the PostProcessPageAction Method for all the order pages.
        private readonly string[] _orderPages = new[] { "Index" };

        #endregion

        #region " Overrides... "

        public override void PostValidate(ModelStateDictionary modelState)
        {
            //Checking for the pages code based on the main order pages array on line ten.
            if (DtmContext.Page.IsStartPageType)
            {
                Trace.WriteLine("Processing post page actions...");

                var firstName = Form["BillingFirstName"] ?? string.Empty;
                var lastName = Form["BillingLastName"] ?? string.Empty;

                var email = Form["Email"] ?? string.Empty;
                var emailRegex = "^(?:[A-z0-9%&+-]+[.])*[A-z0-9%&+-]+@[A-z0-9.-]+\\.[A-z]{2,6}$";
                if (String.IsNullOrEmpty(email))
                {
                    modelState.AddModelError("Email", "Email is required.");
                }
                else if (!Regex.IsMatch(email, emailRegex, RegexOptions.IgnoreCase))
                {
                    modelState.AddModelError("Email", "Email is invalid.");
                }

                if (string.IsNullOrEmpty(firstName))
                {
                    modelState.AddModelError("FirstName", "First name is required.");
                }
                if (string.IsNullOrEmpty(lastName))
                {
                    modelState.AddModelError("lastName", "Last name is required.");
                }

                if(DtmContext.Version == 2 || DtmContext.Version == 4)
                {
                    var password = Form["Password"] ?? string.Empty;

                    ValidatePassword(password);

                    var confirmPassword = Form["ConfirmPassword"] ?? string.Empty;

                    ConfirmPasswords(password, confirmPassword);

                }

            }
        }

        private void ConfirmPasswords(string password, string confirmPassword)
        {
            if (string.IsNullOrWhiteSpace(confirmPassword))
            {
                ModelState.AddModelError("Form", "Password must be re-entered to confirm");
                return;
            }

            if (password != confirmPassword)
            {
                ModelState.AddModelError("Form", "Passwords do not match");
                return;
            }
        }

        private void ValidatePassword(string password)
        {
            if (string.IsNullOrWhiteSpace(password))
            {
                ModelState.AddModelError("Form", "Password is required");
                return;
            }

            if (password.Length < 7)
            {
                ModelState.AddModelError("Form", "Password must have be at least 7 characters long");
            }

            if (!Regex.IsMatch(password, "[A-z]+"))
            {
                ModelState.AddModelError("Form", "Password must have at least one letter");
            }

            if (!Regex.IsMatch(password, "[0-9]+"))
            {
                ModelState.AddModelError("Form", "Password must have at least one number");
            }

        }

        public override void PostProcessPageActions()
        {
            //Checking for the pages code based on the main order pages array on line ten.
            if (_orderPages.Any(p => p == DtmContext.Page.PageCode))
            {
                Trace.WriteLine("Processing post page actions...");

                if (Order.OrderID > 0)
                {
                    UserCreationResult creationResult;
                    if (DtmContext.Version == 1 || DtmContext.Version == 3)
                    {
                        creationResult = userManager.CreateUser(Order.BillingFirstName, Order.BillingLastName, Order.Email, Order.IsTestOrder);
                    }
                    else
                    {
                        creationResult = userManager.CreateUser(Order.BillingFirstName, Order.BillingLastName, Order.Email, Form["Password"], Order.IsTestOrder); 
                    }

                   
                    if (string.IsNullOrEmpty(creationResult.ErrorMessage))
                    {
                        Order.AddOrderCode(creationResult.UserCreationProcessModelID, "USERCREATIONPROCESSMODELID");
                    }
                    else
                    {
                        if (IsDuplicateUser(creationResult))
                        {
                            Order.AddOrderCode(DateTime.Now.ToString("g"), "DUPLICATEUSER");

                            ModelState.AddModelError("DUPLICATEUSER",
                                "This user has already been created. Please check your email for confirmation and secure account sign-in information.");
                        }
                        else
                        {
                            ModelState.AddModelError("USERCREATION", creationResult.ErrorMessage);
                            new SiteExceptionHandler(new Exception(creationResult.ErrorMessage));
                        }
                    }
                }
            }
        }


        public override void PostSetOrderStatus()
        {
            if (_orderPages.Any(p => p == DtmContext.Page.PageCode))
            {
                Order.OrderStatusId = 1;
            }
        }


        #endregion

        #region Private Methods

        private bool IsDuplicateUser(UserCreationResult user)
        {
            if (user != null && !string.IsNullOrEmpty(user.ErrorMessage))
            {
                return user.ErrorMessage.Contains("Username is taken");
            }
            return false;
        }

        #endregion
    }
}
