using System.Collections.Generic;
using CREDITUP.Models;
using Dtm.Framework.ClientSites;

namespace CREDITUP.UIComponents
{
    public static class FAQAccordion
    {
        public const string HTMLSectionContainer = @"
            <section aria-labelledby=""section-{{Id}}"" id=""{{Id}}"" class=""section__block content__text"">
                <h2 id=""section-{{Id}}"" class=""content__header"">{{Headline}}</h2>
                <div id=""accordion-{{Id}}"" class=""accordion"" data-accordion-toggle data-accordion-many-containers itemscope itemtype=""https://schema.org/FAQPage"">
                    {{FAQ}}
                </div>
            </section>
            ";

        public const string HTMLContainer = @"
            <div id=""{{Id}}"" class=""section__block content__text"">
                <div id=""accordion-{{Id}}"" class=""accordion"" data-accordion-toggle data-accordion-many-containers itemscope itemtype=""https://schema.org/FAQPage"">
                    {{FAQ}}
                </div>
            </div>
            ";

        public static string CreateCard(FAQ faq, int index)
        {
            string productName = SettingsManager.ContextSettings["Label.ProductName"];

            string html = @"
            <div class=""card"" itemscope itemprop=""mainEntity"" itemtype=""https://schema.org/Question"">
                <div class=""accordion__header card__header"" itemprop=""name"">
                    <button type=""button"" class=""accordion__button card__button"" aria-controls=""faq-section-{{Index}}"" id=""faq-controller-{{Index}}"">
                        <span>{{Question}}</span>
                        <span class=""accordion__icon""></span>
                    </button>
                </div>
                <section aria-labelledby=""faq-controller-{{Index}}"" id=""faq-section-{{Index}}"" class=""card__section accordion__section"" itemscope itemprop=""acceptedAnswer"" itemtype=""https://schema.org/Answer"">
                    <div class=""card__content"" itemprop=""text"">
                        {{Answer}}	
                    </div>
                </section>
            </div>
            ";

            return html
                .Replace("{{Index}}", index.ToString())
                .Replace("{{Question}}", faq.Question.Replace("{{ProductName}}", productName))
                .Replace("{{Answer}}", faq.Answer.Replace("{{ProductName}}", productName));
        }

        public static string CreateCategorySection(FAQSection section, List<FAQ> faqs, string template = "")
        {
            if (faqs.Count == 0)
            {
                return string.Empty;
            }

            string faqOutput = string.Empty;

            foreach (FAQ faq in faqs)
            {
                int index = faqs.IndexOf(faq);

                faqOutput += CreateCard(faq, index);
            }

            string faqTemplate = string.IsNullOrWhiteSpace(template) ? HTMLSectionContainer : template;

            string output = faqTemplate
                .Replace("{{Id}}", section.Id)
                .Replace("{{Headline}}", section.Name)
                .Replace("{{FAQ}}", faqOutput);

            return output;
        }
    }
}