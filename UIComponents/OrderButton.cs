using Dtm.Framework.ClientSites;

namespace CREDITUP.UIComponents
{
    public class OrderButton
    {
        /// <summary>
        /// Represents the text node for the order button
        /// </summary>
        public string Text { get; set; }
        /// <summary>
        /// Represents the CSS class list for the order button
        /// </summary>
        public string ClassList { get; set; }

        public OrderButton(string text = "Click Here To Get Started", string classList = "button")
        {
            Text = text;
            ClassList = classList;
        }

        /// <summary>
        /// Takes the text along with the CSS class list to create the HTML for the `Order` button. If the `Order Form` setting is disabled, the HTML will contain the `tabindex=-1` attribute value.
        /// </summary>
        /// <param name="text"></param>
        /// <param name="classList"></param>
        /// <returns></returns>
        public string CreateHTML(string text = null, string classList = null)
        {
            string attributeList = string.Format(@"href=""#sign-up"" class=""{0}""{1}", classList ?? ClassList, ApplyAttributes());

            return string.Format(@"<a {0}><span>{1}</span></a>", attributeList, text ?? Text);
        }

        /// <summary>
        /// Returns `tabindex=-1` given whether the order form setting is disabled
        /// </summary>
        /// <returns></returns>
        public string ApplyAttributes()
        {
            bool enableOrderForm = SettingsManager.ContextSettings["Order.enableOrderForm", true];

            return !enableOrderForm ? @" tabindex=""-1""" : string.Empty;
        }
    }
}