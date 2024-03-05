<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<ClientSiteViewData>" %>
<%@ Import Namespace="Dtm.Framework.ClientSites" %>
<%@ Import Namespace="CREDITUP.Navigation" %>

<%
	var isStartPage = DtmContext.Page.IsStartPageType;

	var productAttributeName = SettingsManager.ContextSettings["Label.ProductName"];
	var productName = productAttributeName;

	var sitemap = new Sitemap();
	var sitemapList = sitemap.SitemapList;
	var homeLink = sitemapList.GetItemById("home");

	var logoLink = isStartPage ? homeLink.Page : "#main";
	var logoTemplate = @"
	<a href=""{0}"" class=""logo"" aria-label=""{1}"">
		<img src=""/images/Site1/logo.svg"" alt=""{1}"" width=""172"" height=""100"">
	</a>";
	var logo = string.Format(logoTemplate, logoLink, productName);
%>
  
<header aria-labelledby="header-title" class="view header section @print-only-hide">
	<span class="skip-link">
		<a href="#main" class="skip-link__button" id="skip-link">
			<span>Skip To Main Content?</span>
		</a>
	</span>
	<div class="header__banner">The best there is in credit building.</div>
	<div class="view__in header__in section__in">
		<div class="header__group">
			<div class="header__logo">
				<%= logo %>
			</div>
			<div id="header-title" class="header__title">
				<b>We do the work. You get the credit!</b>
				<span>No fees, lower interest rates, and banked in the USA</span>
			</div>
		</div>
	</div>
</header>

<header id="nav" aria-label="Website pages links" class="view nav section @print-only-hide">
	<div class="view__in nav__group nav__in section__in">
		<div class="nav__logo">
			<%= logo %>
		</div>
		<div class="nav__headline">
			<b>We do the work.<br>You get the credit!</b>
		</div>
		<% if (isStartPage) { %>
		<button type="button" class="nav__label" aria-label="Toggle Menu">
			<span></span>
		</button>
		<div class="nav__underlay nav__underlay--for-drawer" role="presentation"></div>
		<div class="nav__pane">
			<div class="nav__group">
				<div class="nav__list nav__tier-first">
					<div class="nav__logo">
						<%= logo.Replace("navbar-logo", "navbar-header-logo") %>
						<div id="nav-title" class="nav__headline">
							<b>We do the work.<br>You get the credit!</b>
							<span>No fees, lower interest rates, and banked in the USA</span>
						</div>
					</div>
					<%
						var navLinks = sitemapList.GetItemsByIdRange(new List<string> { 
							"about-creditup",
							"faq",
							"reviews",
							"how-it-works-lp", 
							"app",
							"contact-us"
						});

						foreach (var navLink in navLinks)
						{
							%>
							<a class="nav__link" href="<%= navLink.Page %>" id="nav-<%= navLink.Id %>">
								<span><%= navLink.Name %></span>
							</a>
							<%
						}
					%>
				</div>
			</div>
		</div>
		<% } %>
	</div>
</header>