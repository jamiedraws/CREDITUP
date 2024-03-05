<%@ Page Language="C#" MasterPageFile="~/VersionViews/Views/Layouts/InternalLayout.master" Inherits="System.Web.Mvc.ViewPage<ClientSiteViewData>" %>
<%@ Import Namespace="Dtm.Framework.ClientSites" %>
<%@ Import Namespace="CREDITUP.Models" %>
<%@ Import Namespace="CREDITUP.Text" %>
<%@ Import Namespace="CREDITUP.UIComponents" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server"></asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<main aria-labelledby="main-title" class="view content content--sub-page section">
    <div id="main" class="view__anchor"></div>
    <div class="view__in content__in section__in">
        <div class="section__block content__text">
            <h1 id="main-title" class="content__title">Frequently Asked Questions</h1>

            <page-section-nav-tracker></page-section-nav-tracker>
            <nav aria-label="FAQ Categories" class="page-section-nav">
            <%
                List<FAQSection> sections = new List<FAQSection>
                {
                    new FAQSection {
                        Code = "GEN", 
                        Name = "General", 
                        Id = "general" 
                    },
                    new FAQSection {
                        Code = "ACC", 
                        Name = "Account Basics", 
                        Id = "account-basics" 
                    },
                    new FAQSection {
                        Code = "CUS", 
                        Name = "Customer Service", 
                        Id = "customer-service" 
                    },
                    new FAQSection {
                        Code = "PAY", 
                        Name = "Payment", 
                        Id = "payment" 
                    },
                    new FAQSection {
                        Code = "POT", 
                        Name = "Payouts", 
                        Id = "payouts" 
                    },
                    new FAQSection {
                        Code = "CRE", 
                        Name = "Credit Reporting And Scores", 
                        Id = "credit-reporting-scores" 
                    }
                };

                foreach (var section in sections)
                {
                    %>
                    <a href="#<%= section.Id %>" class="page-section-nav__link"><%= section.Name %></a>
                    <%
                }
            %>
                <div class="page-section-nav__combobox">
                    <div class="form form--select">
                        <div class="form__contain">
                            <select aria-label="Select Topic" name="page-section-nav-combobox" id="page-section-nav-combobox" class="form__field dtm__restyle">
                                <option value="">Select topic</option>
                                <% foreach (var section in sections) { %>
                                    <option value="#<%= section.Id %>"><%= section.Name %></option>
                                <% } %>
                            </select>
                            <span class="form__field form__button">
                                <svg class="icon" focusable="false" role="presentation">
                                    <use href="#icon-chevron"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <svg hidden>
					<symbol id="icon-chevron" x="0px" y="0px" viewBox="0 0 25.228 14.029">
						<g transform="translate(1.414 1.414)">
							<path d="M0,11.2,11.2,0m0,22.4L0,11.2" transform="translate(0 11.2) rotate(-90)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
						</g>
					</symbol>
				</svg>
            </nav>

            <%
                Response.Write(FAQAccordion.CreateCategorySection(sections.FirstOrDefault(m => m.Code.Equals("GEN")), ServiceFAQ.General));

                Response.Write(FAQAccordion.CreateCategorySection(sections.FirstOrDefault(m => m.Code.Equals("ACC")), ServiceFAQ.AccountBasics));

                Response.Write(FAQAccordion.CreateCategorySection(sections.FirstOrDefault(m => m.Code.Equals("CUS")), ServiceFAQ.CustomerService));

                Response.Write(FAQAccordion.CreateCategorySection(sections.FirstOrDefault(m => m.Code.Equals("PAY")), ServiceFAQ.Payment));

                Response.Write(FAQAccordion.CreateCategorySection(sections.FirstOrDefault(m => m.Code.Equals("POT")), ServiceFAQ.Payouts));

                Response.Write(FAQAccordion.CreateCategorySection(sections.FirstOrDefault(m => m.Code.Equals("CRE")), ServiceFAQ.CreditReportingAndScores));
            %>
        </div>
    </div>
</main>

</asp:Content>