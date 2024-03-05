using Dtm.Framework.ClientSites.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CREDITUP.Navigation
{
    public class NavigationList
    {
        /// <summary>
        /// Collection of items that follow specific rules and constraints
        /// </summary>
        public List<NavigationItem> Entries;

        /// <summary>
        /// Utility that is designed to collect information about an item or list of items that represent a link or a button
        /// </summary>
        public NavigationList()
        {
            Entries = new List<NavigationItem>();
        }

        /// <summary>
        /// Takes a `NavigationItem`, applies the rules and constraints and adds to the entries list
        /// </summary>
        /// <param name="item"></param>
        public void AddItem(NavigationItem item)
        {
            Entries.Add(SetPage(item));
        }

        /// <summary>
        /// Determines if the item exists
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        public bool HasItem(NavigationItem item)
        {
            return !string.IsNullOrEmpty(item.Id) && !string.IsNullOrWhiteSpace(item.Id);
        }

        /// <summary>
        /// Returns an individual item based on the id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public NavigationItem GetItemById(string id)
        {
            var entry = Entries.Where(i => i.Id == id);

            return entry.Any() ? entry.FirstOrDefault() : new NavigationItem();
        }

        /// <summary>
        /// Returns a new filtered list of items based on the list of id's provided
        /// </summary>
        /// <param name="idRange"></param>
        /// <returns></returns>
        public List<NavigationItem> GetItemsByIdRange(List<string> idRange)
        {
            var entries = new List<NavigationItem>();

            foreach (var id in idRange)
            {
                entries.Add(GetItemById(id));
            }

            return entries.Where(entry => HasItem(entry)).ToList();
        }

        /// <summary>
        /// Determines if the item being compared is equal to the current page alias. For items that share the same page alias, the destination will result in the hash fragment.
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        public bool IsOnSamePage(string page)
        {
            return string.Equals(page, DtmContext.Page.PageAlias, StringComparison.InvariantCultureIgnoreCase) || string.Equals(page, DtmContext.Page.PageCode, StringComparison.InvariantCultureIgnoreCase);
        }


        /// <summary>
        /// Sets the item to follow the appropriate rules and constraints 
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        public NavigationItem SetPage(NavigationItem item)
        {
            if (item.IsExternal)
            {
                return item;
            }

            if (string.IsNullOrEmpty(item.Page) && !string.IsNullOrEmpty(item.Hash))
            {
                item.Page = item.Hash;

                return item;
            }

            item.Page = !string.IsNullOrEmpty(item.Route) 
                ? string.Format("/{0}", item.Route)
                : IsOnSamePage(item.Page)
                    ? item.Hash
                    : FormatPageByOfferVersion(item);

            return item;
        }

        /// <summary>
        /// Returns the page alias including the offer-version context
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        private string FormatPageByOfferVersion(NavigationItem item)
        {
            return string.Format("/{0}/{1}/{2}{3}{4}",
                DtmContext.OfferCode,
                DtmContext.Version,
                item.Page,
                DtmContext.ApplicationExtension,
                item.ApplyHash ? item.Hash : string.Empty);
        }

    }
}