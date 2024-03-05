using System.IO;
using Dtm.Framework.ClientSites.Web;

namespace CREDITUP.Utils
{
    public class ResourceWriter
    {
        /// <summary>
        /// Takes a relative path and appends a `cache bust` parameter if the file exists on the server; otherwise, the provided relative path is returned.
        /// </summary>
        /// <param name="relativePath"></param>
        /// <returns></returns>
        public string AddQueryStringParameterToRelativePathOrDefault(string relativePath)
        {
            string path = GetPathToFile(relativePath);

            return File.Exists(path) 
                ? string.Format("/{0}?cb={1}", relativePath, File.GetLastWriteTime(path).Ticks) 
                : relativePath;
        }

        /// <summary>
        /// Writes an HTML link element specifically to preload a CSS resource
        /// </summary>
        /// <param name="relativePath"></param>
        /// <returns></returns>
        public string WriteStylePreload(string relativePath)
        {
            return WriteLinkPreload(relativePath, "style");
        }

        /// <summary>
        /// Writes an HTML link element specifically to preload a JS resource
        /// </summary>
        /// <param name="relativePath"></param>
        /// <returns></returns>
        public string WriteScriptPreload(string relativePath)
        {
            return WriteLinkPreload(relativePath, "script");
        }

        /// <summary>
        /// Writes an HTML link element to load a CSS resource
        /// </summary>
        /// <param name="relativePath"></param>
        /// <returns></returns>
        public string WriteLink(string relativePath)
        {
            return string.Format(@"<link rel=""stylesheet"" href=""{0}"">", AddQueryStringParameterToRelativePathOrDefault(relativePath));
        }

        /// <summary>
        /// Writes an HTML script element to load a JS resource
        /// </summary>
        /// <param name="relativePath"></param>
        /// <returns></returns>
        public string WriteScript(string relativePath)
        {
            return string.Format(@"<script defer src=""{0}""></script>", AddQueryStringParameterToRelativePathOrDefault(relativePath));
        }

        /// <summary>
        /// Writes an HTML link element specifically to preload a resource using the provided type
        /// </summary>
        /// <param name="relativePath"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        private string WriteLinkPreload(string relativePath, string type)
        {
            return string.Format(@"<link rel=""preload"" href=""{0}"" as=""{1}"">", AddQueryStringParameterToRelativePathOrDefault(relativePath), type);
        }

        /// <summary>
        /// Returns the combined relative path mapped to the project path
        /// </summary>
        /// <param name="relativePath"></param>
        /// <returns></returns>
        private string GetPathToFile(string relativePath)
        {
            return Path.Combine(DtmContext.ProjectPath, relativePath);
        }
    }
}