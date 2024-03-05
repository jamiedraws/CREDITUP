<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<ClientSiteViewData>" %>
<%@ Import Namespace="Dtm.Framework.ClientSites" %>
<%@ Import Namespace="CREDITUP.Navigation" %>

<% 
    // determines if the render is intended for the footer
    bool renderFooter = false;
    string renderFooterValue = ViewData["renderSitemap"] as string ?? "True";
    Boolean.TryParse(renderFooterValue, out renderFooter);

    // represents all landing pages
    bool isFrontPage = DtmContext.Page.IsStartPageType;

    // get the customer for additional pages
    int customerId = DtmContext.CustomerId;
    if (!string.Equals("Confirmation", DtmContext.PageCode))
    {
%>

<div>
    <%
        // discern between the site map navigation list from the footer navigation list
        string labelCategory = ViewData["labelCategory"] as string ?? "Footer";

        // use the label as a code identifier to discern between the site map links from the footer links
        string labelId = labelCategory.Replace(" ", "-").ToLower();

        // render using the CSS `list` component class name. Pancake-stack the list on the site map page
        string navClassList = "list";

        if (!renderFooter)
        {
            navClassList = string.Format("{0} list--stack", navClassList);
        }

        // discern between the site map navigation label from the footer navigation label
        string navLabel = string.Format("{0} Offer information", labelCategory);

        // define attributes for the link
        string navAttributeList = string.Format(@"aria-label=""{0}"" class=""{1}""", navLabel, navClassList);
    %>
    <nav <%= navAttributeList %>>
        <%
            var sitemap = new Sitemap();
            var entries = sitemap.SitemapList.GetItemsByIdRange(new List<string> {
            "home",
            "about-creditup",
            "faq",
            "reviews",
            "how-it-works",
            "app",
            "contact-us",
            "privacy-policy",
            "sitemap"
          });

            // if the site map is being rendered, exclude the `sitemap` and `order-now` links from the list
            if (!renderFooter)
            {
                entries = entries.Where(e => e.Id != "sitemap" && e.Id != "order-now").ToList();
            }

            bool enableOrderForm = SettingsManager.ContextSettings["Order.enableOrderForm", true];

            // if the order form is disabled, exclude the `order-now` link from the list
            if (!enableOrderForm)
            {
                entries = entries.Where(e => e.Id != "order-now").ToList();
            }

            foreach (NavigationItem entry in entries)
            {
                // represents the name of the link
                string name = entry.Name;

                // discern each link using a combination of identifiers
                string id = string.Format(@"{0}-{1}", labelId, entry.Id);

                // define attributes for the link
                string attributeList = string.Format(@"id=""{0}-link"" href=""{1}"" class=""link""", id, entry.Page);

                // add attributes to operate a modal-dialog link
                if (entry.IsModalDialog)
                {
                    attributeList = string.Format(@"{0} data-modal-dialog-id=""{1}"" data-modal-dialog-actor=""open"" data-modal-dialog-iframe data-modal-dialog-title=""{2}""",
                        attributeList, id, entry.Name
                    );
                }

                // add attributes to operate an external link
                if (entry.IsExternal)
                {
                    attributeList = String.Format(@"{0} target=""_blank""", attributeList);
                    name = String.Format(@"{0} <span class=""link__advisal""><span class=""link__container"">Opens in a new window</span></span>", name);
                }
        %>
        <span>
            <a <%= attributeList %>><%= name %></a>
        </span>
        <%
            }
        %>
    </nav>
</div>

<% }
    if (renderFooter)
    {
%>
<%
    // represents the product name
    string productName = SettingsManager.ContextSettings["Label.ProductName"];

    // represents the current year
    string year = DateTime.Now.ToString("yyyy");
%>

<address class="section__block">
    <p>&copy;<%= year %> <%= productName %> All Rights Reserved.</p>
    <%
        string commonFooter = Html.GetSnippet("COMMON-FOOTER");

        commonFooter = commonFooter.Replace("{{Year}}", year);

        Response.Write(commonFooter);
    %>
</address>
<div class="disclaimer footer__disclaimer">
<p>To apply, you must be at least 18 years old and a citizen of the United States or permanent resident with a valid social security number and with a physical address in the U.S. Applicants will verify identity with a valid state-issued Driver&rsquo;s License, state-issued ID, or current U.S. passport. *A valid checking or savings account is required if you choose to make your monthly payment with a direct debit via ACH from your bank account. All loans are subject to approval. 5Star Bank reserves the right to deny a loan application based on the misuse of the CreditUp loan program or other information that has been provided to 5Star Bank.</p>
<p>You will not receive money upfront. The CreditUp credit builder is not a cash loan. Your first payment and monthly thereafter will be due 30 days past the day your CREDITUP account was created. Funds from your CREDITUP loan will be placed in a savings account in your name. This savings account will be used as the collateral for your loan. Your savings account cannot be accessed until the total loan amount is paid in full. After you have made all loan payments and you have paid the loan in full, you can decide to keep the funds in your savings account or request to close your savings account and have the funds sent to you.</p>
    <p>CreditUp By 5Star Bank does not remove damaging credit history from your credit report nor repair harmful information previously reported to your credit file. Disclaimer: Credit score improvement is not guaranteed. Changes to your credit score are dependent on your specific financial behavior and history. Failure to make the minimum required loan payments by the payment due date each month may result in your loan payment(s) being reported as delinquent to credit bureaus which may negatively impact your credit score.</p>
    <p>Any endorsements, examples, and illustrations cannot guarantee that the user will achieve similar results. Individual results may vary significantly. Factors such as your plan, personal effort and many other circumstances will cause results to vary. Testimonial - Paid Endorsement - The comments above are related to individual experiences. Individual results may vary. Endorsement may not be representative of the experience of other customers. The endorsement is no guarantee of future performance or success.</p>
    <p>CreditUp By 5Star&reg; is a registered trademark of 5Star Bank. FICO&reg; is a registered Trademark of Fair Isaac Corporation. Experian&reg; is a registered trademark of Experian Holdings, Inc.</p>
    <p>Google Play and the Google Play logo are trademarks of Google LLC. App Store, Apple and the Apple logo are trademarks of Apple Inc.</p>
    <p>5Star Bank. BBB Accredited Business, BBB Rating A+ as of 2/4/2020. Member FDIC. Equal Housing Lender.</p>
</div>
<% } %>