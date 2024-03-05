using Newtonsoft.Json;

namespace CREDITUP.UserHelper
{
    public class UserCreationProcessModel
    {
        [JsonProperty("pp")]
        public UserCreationProcessModelProperties Properties { get; set; }
    }
}