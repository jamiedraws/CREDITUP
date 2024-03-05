<%@ Page Language="C#" MasterPageFile="~/VersionViews/Views/Layouts/MainLayout.master" Inherits="System.Web.Mvc.ViewPage<LeadGenPageViewData>" %>
<%@ Import Namespace="Dtm.Framework.ClientSites" %>

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

            <div class="form message">
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

            <div class="fieldset__take-all">
                <button id="AcceptOfferButton" name="acceptOffer" type="submit" class="button">
                    <span>Get Started</span>
                </button>
            </div>
        </div>
	</fieldset>
</form>
			
</asp:Content>