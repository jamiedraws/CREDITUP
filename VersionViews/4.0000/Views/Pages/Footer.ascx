<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<ClientSiteViewData>" %>
<%@ Import Namespace="Dtm.Framework.ClientSites" %>

<footer aria-label="Copyright and Policies" class="view footer section @print-only-hide">
	<div id="footer" class="view__anchor"></div>
	<div class="view__in section__in">
		<div class="section__block">
		<% 
			Html.RenderPartial("SitemapList");
		%>
		</div>
	</div>
</footer>

<% 
	if ( DtmContext.Page.IsStartPageType ) 
	{ 
		Html.RenderPartial("Scripts");
		Html.RenderSnippet("ORDERFORMSCRIPT");

		%>
		<script type="text/javascript">
			var verifyBStreet = false;
			var verifyBCity = false;
			var verifyBState = false;
			var verifyBZip = false;
			var verifyBCountry = false;
			$(document).ready(function () {
				$('#AcceptOfferButton').bind("click", validateForm);
				$('#ShippingIsDifferentThanBilling').bind("click", toggleShipping);
				toggleShipping();
			});
	</script>
		<%
	}
%>

<%= Model.FrameworkVersion %>

<div class="l-controls" aria-hidden="true" role="none">
  <% 
	  Html.RenderSiteControls(SiteControlLocation.ContentTop);
	  Html.RenderSiteControls(SiteControlLocation.ContentBottom);
	  Html.RenderSiteControls(SiteControlLocation.PageBottom);
  %>
</div>