using Dtm.Framework.ClientSites;
using Dtm.Framework.ClientSites.Web;
using Dtm.Framework.Services.DtmApi;
using System;
using Newtonsoft.Json;
using System.Web;

namespace CREDITUP.UserHelper
{
    public class UserManager
    {
        private readonly DtmApiClient _client = new DtmApiClient();
        private readonly string apiUrl = SettingsManager.ContextSettings["Dtm.Api.Url"];

        public UserCreationResult CreateUser(string firstName, string lastName, string email, bool isTest)
        {
            return CreateUser(new UserData(firstName, lastName, email, isTest), "CreateUser");
        }

        public UserCreationResult CreateUser(string firstName, string lastName, string email, string password, bool isTest)
        {
            return CreateUser(new UserData(firstName, lastName, email, password, isTest), "CreateUserWithPassword");
        }

        private UserCreationResult CreateUser(UserData data, string action)
        {
            var result = new UserCreationResult();

            var response = FiveStarBankRequest(data, action);
            if (response.Contains("error"))
            {
                result.ErrorMessage = response;
            }
            else
            {
                var processModel = JsonConvert.DeserializeObject<UserCreationProcessModel>(response);

                if (processModel != null && processModel.Properties != null && !string.IsNullOrEmpty(processModel.Properties.Id))
                {
                    result.UserCreationProcessModelID = HttpUtility.HtmlEncode(processModel.Properties.Id);
                }
                else
                {
                    result.ErrorMessage = "User Creation Process Model ID is empty";
                }
            }

            return result;
        }

        private string FiveStarBankRequest(UserData data, string action)
        {
            var endpoint = string.Format("{0}workers.dtm/?worker={1}&action={2}", apiUrl, "FiveStarBank", action);
            try
            {
                var response = _client.PostData(endpoint, data);
                if (response.StatusCode == System.Net.HttpStatusCode.InternalServerError 
                    || (!string.IsNullOrEmpty(response.Content) && response.Content.Contains("error")))
                { 
                    throw new Exception(string.Format("Failed to create an account for: {0}, Errors: {1}", data.Email, response.Content));
                }

                return response.Content;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}