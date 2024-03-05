using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CREDITUP.Navigation
{
    public class Sitemap
    {
        /// <summary>
        /// Represents a complete, collection of destinations for a single website 
        /// </summary>
        public NavigationList SitemapList;
        /// <summary>
        /// A dictionary of all destinations and landmarks for a single website
        /// </summary>
        public Sitemap()
        {
            SitemapList = new NavigationList();

            // Home
            SitemapList.AddItem(new NavigationItem
            {
                Id = "home",
                Name = "Home",
                Page = "Index",
                Hash = "#main"
            });

            // About CreditUp
            SitemapList.AddItem(new NavigationItem
            {
                Id = "about-creditup",
                Name = "About CreditUp",
                Page = "Index",
                Hash = "#features",
                ApplyHash = true
            });

            // Five Star Reviews
            SitemapList.AddItem(new NavigationItem
            {
                Id = "reviews",
                Name = "Five Star Reviews",
                Page = "Index",
                Hash = "#reviews",
                ApplyHash = true
            });

            // How It Works
            SitemapList.AddItem(new NavigationItem
            {
                Id = "how-it-works",
                Name = "How It Works",
                Page = "HowItWorks",
                Hash = "#main"
            });

            // How It Works (Landing Page)
            SitemapList.AddItem(new NavigationItem
            {
                Id = "how-it-works-lp",
                Name = "How It Works",
                Page = "Index",
                Hash = "#how-it-works",
                ApplyHash = true
            });

            // Get The App
            SitemapList.AddItem(new NavigationItem
            {
                Id = "app",
                Name = "Get the App",
                Page = "Index",
                Hash = "#download-app",
                ApplyHash = true
            });

            // Sign In
            SitemapList.AddItem(new NavigationItem
            {
                Id = "signin",
                Name = "SIGN IN",
                Page = "https://5star.creditupbuilder.com/suite",
                IsExternal = true
            });

            // Customer Service
            SitemapList.AddItem(new NavigationItem
            {
                Id = "customer-service",
                Name = "Customer Service",
                Page = "Customer-Service",
                Hash = "#main"
            });

            // Contact Us
            SitemapList.AddItem(new NavigationItem
            {
                Id = "contact-us",
                Name = "Contact Us",
                Page = "Customer-Service",
                Hash = "#main"
            });

            // Help
            SitemapList.AddItem(new NavigationItem
            {
                Id = "help",
                Name = "Help",
                Page = "Customer-Service",
                Hash = "#main"
            });

            // FAQ
            SitemapList.AddItem(new NavigationItem
            {
                Id = "faq",
                Name = "FAQs",
                Page = "FAQ",
                Hash = "#main"
            });

            // FAQ (Landing Page)
            SitemapList.AddItem(new NavigationItem
            {
                Id = "faq-lp",
                Name = "FAQs",
                Page = "Index",
                Hash = "#faq",
                ApplyHash = true
            });

            // Terms of Use
            SitemapList.AddItem(new NavigationItem
            {
                Id = "terms",
                Name = "Terms of Use",
                Page = "Index",
                Hash = "#main"
            });

            // Privacy Policy
            SitemapList.AddItem(new NavigationItem
            {
                Id = "privacy-policy",
                Name = "Privacy Policy",
                Page = "/pdf/privacy-policy.pdf",
                IsExternal = true
            });

            // Site Map
            SitemapList.AddItem(new NavigationItem
            {
                Id = "sitemap",
                Name = "Site Map",
                Page = "SiteMap",
                Hash = "#main"
            });

            // Get Started
            SitemapList.AddItem(new NavigationItem
            {
                Id = "get-started",
                Name = "Get Started",
                Hash = "#order"
            });
        }

    }
}