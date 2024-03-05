<%@ Page Language="C#" MasterPageFile="~/VersionViews/3.0000/Views/Layouts/MainLayout.master" Inherits="System.Web.Mvc.ViewPage<LeadGenPageViewData>" %>
<%@ Import Namespace="Dtm.Framework.ClientSites" %>
<%@ Import Namespace="CREDITUP.Navigation" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server"></asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<form data-submitting-state="custom" id="sign-up" action="/<%= DtmContext.OfferCode %>/<%= DtmContext.Version %>/<%= DtmContext.PageCode %><%= DtmContext.ApplicationExtension %>" method="post" class="checkout">
	<input type="hidden" name="CardType" value="None" />
	<input type="hidden" name="OrderType" value="None" />

    <script>_AdaErrors = true;</script>
    <div role="alert" class="vse" data-vse-scroll>
        <%= Html.ValidationSummary("The following errors have occurred:") %>
    </div>

	<fieldset class="fieldset fieldset--signup">
        <div class="fieldset__group">
            <div class="fieldset__take-all">
                <h2 class="fieldset__title">Start Building Your CreditUp Now!</h2>
            </div>

            <!-- First Name -->
            <div class="form message">
                <%
                    var billingFirstNameMessage = Html.ValidationMessage("FirstName");
                    var billingFirstNameIsInvalid = billingFirstNameMessage != null;
                %>
                <div class="form__field-label">
                    <input type="text" title="First name can only contain letter characters" required autocomplete="section-bill billing given-name" name="BillingFirstName" id="BillingFirstName" placeholder="First Name" class="form__field <%= billingFirstNameIsInvalid ? "message__is-invalid" : string.Empty %>" value="<%= ViewData["BillingFirstName"] %>">
                    <label for="BillingFirstName" class="message__label">
                        <span class="form__error">* </span>First Name
                    </label>
                    <span class="message__group" role="alert">
                        <span class="message__invalid">
                            <% if (billingFirstNameIsInvalid)
                                { %>
                            <%= billingFirstNameMessage %>
                            <% }
                            else
                            { %>
                            Please enter a first name.
                        <% } %>
                        </span>
                    </span>
                </div>
            </div>

            <!-- Last Name -->
            <div class="form message">
                <%
                    var billingLastNameMessage = Html.ValidationMessage("LastName");
                    var billingLastNameIsInvalid = billingLastNameMessage != null;
                %>
                <div class="form__field-label">
                    <input type="text" name="BillingLastName" id="BillingLastName" placeholder="Last Name" required autocomplete="section-bill billing family-name" class="form__field <%= billingLastNameIsInvalid ? "message__is-invalid" : string.Empty %>" value="<%= ViewData["BillingLastName"] %>">
                    <label for="BillingLastName" class="message__label">
                        <span class="form__error">* </span>Last Name
                    </label>
                    <span class="message__group" role="alert">
                        <span class="message__invalid">
                            <% if (billingLastNameIsInvalid)
                                { %>
                            <%= billingLastNameMessage %>
                            <% }
                            else
                            { %>
                            Please enter a last name.
                        <% } %>
                        </span>
                    </span>
                </div>
            </div>

            <div class="fieldset__take-row form message">
                <%
                    var emailMessage = Html.ValidationMessageFor(m => m.Email);
                    var emailIsInvalid = emailMessage != null;
                %>
                <div class="form__field-label">
                    <input type="text" name="Email" id="Email" placeholder="Enter Email Address" required title="Format example: someone@someplace.com" autocomplete="section-bill billing email" class="form__field <%= emailIsInvalid ? "message__is-invalid" : string.Empty %>" value="<%= ViewData["Email"] %>">
                    <label class="message__group" for="Email">
                        <span class="message__label">
                            <span class="form__error">* </span>Email Address
                        </span>
                    </label>
                    <div class="message__group" role="alert">
                        <span class="message__invalid">
                            <% if (emailIsInvalid) { %>
                                <%= emailMessage %>
                            <% } else { %>
                                Please enter an email address.
                            <% } %>
                        </span>
                    </div>
                </div>
            </div>

            <div class="form message">
                <div class="form__field-label">
                    <input id="Password" minlength="7" name="Password" type="password"  pattern="^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d\S]{7,}$" required placeholder="Password" aria-describedby="PasswordDescription" class="form__field">
                    <label for="Password" class="message__group">
                        <span class="message__label"><span class="form__error">* </span>Temporary Password</span>
                    </label>
                    <div class="message__group" role="alert">
                        <small id="PasswordDescription" class="message__label">Please enter a temporary password. Password must be at least seven characters, have at least one letter and have at least one digit. 
                        </small>
                        <span class="message__invalid">Password does not meet the requirements.</span>
                    </div>
                </div>
            </div>

            <div class="form message">
                <div class="form__field-label">
                    <input id="ConfirmPassword" minlength="7" name="ConfirmPassword" type="password" pattern="^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d\S]{7,}$" required placeholder="Password" class="form__field">
                    <label for="ConfirmPassword" class="message__group">
                        <span class="message__label"><span class="form__error">* </span>Confirm Password</span>
                    </label>
                    <div class="message__group" role="alert">
                        <span class="message__invalid">Passwords do not match</span>
                    </div>
                </div>
            </div>

            <%
			    NavigationList sitemap = (ViewData["Sitemap"] as Sitemap ?? new Sitemap()).SitemapList;
			    NavigationItem signin = sitemap.GetItemById("signin");
		    %>

            <div class="fieldset__take-all fieldset__content">
                <div class="fieldset__actions">
                    <div class="fieldset__action">
                        <button id="AcceptOfferButton" name="acceptOffer" type="submit" class="button">
                            <span>Get Started</span>
                        </button>
                        <p>New customers only</p>
                    </div>
                    <div class="fieldset__divider-line"></div>
                    <div class="fieldset__action">
                        <a href="<%= signin.Page %>" target="_blank" class="button">
                            <span><%= signin.Name %></span>
                        </a>
                        <p>Already signed up?</p>
                    </div>
                </div>
                <p class="fieldset__disclaimer">
                    <b>Note:</b> You will not receive money upfront. The CreditUp credit builder is not a cash loan. 
                </p>
            </div>
        </div>
	</fieldset>
</form>
			
</asp:Content>