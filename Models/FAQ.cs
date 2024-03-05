namespace CREDITUP.Models
{
    public class FAQ
    {
        /// <summary>
        /// Name of the question
        /// </summary>
        public string Question { get; set; }
        /// <summary>
        /// Name of the answer
        /// </summary>
        public string Answer { get; set; }

        public FAQ()
        {
            Question = string.Empty;
            Answer = string.Empty; 
        }
    }

    public class FAQSection
    {
        /// <summary>
        /// Selectable with linq
        /// </summary>
        public string Code { get; set; }
        /// <summary>
        /// Name of the HTML element id
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// Name of the HTML element human-friendly name
        /// </summary>
        public string Name { get; set; }
    }
}