<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="Dtm.Framework.ClientSites" %>
<%@ Import Namespace="CREDITUP.UIComponents" %>
<%@ Import Namespace="CREDITUP.Utils" %>

<% 
	var getFacebookImage = SettingsManager.ContextSettings["SocialPlugins.Facebook.OpenGraphImage"];
	var getTwitterImage = SettingsManager.ContextSettings["SocialPlugins.Twitter.OpenGraphImage"]; 

	var isStartPage = DtmContext.Page.IsStartPageType;

	string pageTitle = DtmContext.Page.PageTitle;
	string metaDescription = DtmContext.Page.MetaDescription;
	string metaKeywords = DtmContext.Page.MetaKeywords;
	string ogUrl = DtmContext.Domain.FullDomainOfferVersionUrl(DtmContext.PageCode);
%>

<!DOCTYPE html>
<html class="dtm" lang="en">

	<head>

		<title><%= pageTitle %></title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<%= metaDescription %>">
		<meta name="keywords" content="<%= metaKeywords %>">
		<% var androidThemeBarColor = SettingsManager.ContextSettings["AndroidThemeBarColor", "#ffffff"]; %>
		<meta name="theme-color" content="<%= androidThemeBarColor %>">

		<!-- // Open Graph Metadata -->
		<meta property="og:title" content="<%= pageTitle %>">
		<meta property="og:type" content="website">
		<meta property="og:description" content="<%= metaDescription %>">
		<meta property="og:url" content="<%= ogUrl %>">
		<meta property="og:image" content="<%= getFacebookImage %>">

		<!-- // Twitter Metadata  -->
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:title" content="<%= pageTitle %>">
		<meta name="twitter:description" content="<%= metaDescription %>">
		<meta name="twitter:image" content="<%= getTwitterImage %>">
		<meta name="twitter:domain" content="<%= ogUrl %>">

		<%
			var mainSeoDomain = DtmContext.CampaignDomains
				.Where(cd => cd.IsSEO).FirstOrDefault() 
				?? DtmContext.CampaignDomains
				.Where(cd => cd.IsIndexable).FirstOrDefault() 
				?? DtmContext.Domain;

			string canonicalUrl = DtmContext.PageCode.Equals("Index") 
				? mainSeoDomain.FullDomainContext 
				: mainSeoDomain.FullDomainCustomPathContext(DtmContext.Page.PageAlias) + DtmContext.ApplicationExtension;

			canonicalUrl = canonicalUrl.Replace("http://", "https://");
		%>

		<% if (DtmContext.IsProxyIpAddress || DtmContext.CampaignDomains.Any(d => d.DomainId == DtmContext.DomainId && d.Domain.ToLower().Contains("dtmstage"))) { %>

			<meta name="robots" content="noindex, nofollow">

		<% } else { %>

			<meta name="google-site-verification" content="<%= DtmContext.Page.MetaVerify %>">
			<meta name="msvalidate.01" content="617F9E44E7841BBC8E57FE0772BB9DD9">
			<link rel="canonical" href="<%= canonicalUrl %>">

		<% } %>

		<link rel="preconnect" href="https://use.typekit.net/" crossorigin>
		<link rel="dns-prefetch" href="https://use.typekit.net/">
		<link rel="stylesheet" href="https://use.typekit.net/hhc5jfb.css">

		<%
			ResourceWriter resourceWriter = new ResourceWriter();
			
			Response.Write(resourceWriter.WriteStylePreload("css/Site1/style.css"));
			Response.Write(resourceWriter.WriteLink("css/Site1/style.css"));
			Response.Write(resourceWriter.WriteScript("js/Site1/app.es5.js"));
		%>

		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="manifest" href="/site.webmanifest">
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="theme-color" content="#ffffff">
	</head>

	<body class="dtm__in">

		<% Html.RenderPartial("Header", Model); %>

		<main aria-labelledby="main-title" class="view conf section">
			<div id="main" class="view__anchor"></div>
			<div class="view__in section__in">
				<div class="section__block conf__header">
					<h1 id="main-title" class="conf__title">We're so glad you're joining <b style="text-transform: none;">CreditUp!</b></h1>
					<p>Please check your email for confirmation and secure account sign-in information.</p>
					<p>If you did not receive the account confirmation email to your inbox, please check your spam or junk mail folder. The confirmation email comes from <a href="mailto:CreditUpNotifications@5star.bank">CreditUpNotifications@5star.bank</a>.</p>
				</div>

				<div class="conf__text">
					<h2 class="conf__title">How It Works <span>&ndash;</span> 3 Easy Steps</h2>

					<ul class="conf__list">
						<li>
							<div class="conf__headline-with-arrow"><h3>Step 1</h3></div>
							<p>Enter your personal and bank details</p>
						</li>
						<li>
							<div class="conf__headline-with-arrow"><h3>Step 2</h3></div>
							<p>Review and select program terms</p>
						</li>
						<li>
							<div class="conf__headline-with-arrow"><h3>Step 3</h3></div>
							<p>Consent to the e-sign disclosure</p>
						</li>
					</ul>

					<p>Please have a form of identification ready when you begin your application. You will need a state issued Identification Card, valid state issued Driver&rsquo;s License, or current U.S. Passport.</p>

					<p>Once your CreditUp application is approved, 5Star Bank will create two separate accounts in your name: a loan account and a savings account. In order to finalize your CreditUp account, you will need to sign your Savings Deposit Contracts via E-sign AND you will need to sign Loan Contracts that will be delivered via email.</p>

					<p>We Do The Work. You Get The Credit!</p>
				</div>

				<div class="section__block">
					<% using (Html.BeginForm()) { %>
					<button type="submit" name="createOrder" class="button">
						<span>Done</span>
					</button>
					<% } %>
				</div>
			</div>
		</main>

		<% Html.RenderPartial("Footer", Model); %>

	</body>

</html>