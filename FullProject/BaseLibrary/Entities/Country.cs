
using System.Text.Json.Serialization;

namespace BaseLibrary.Entities
{
    public class Country:BaseEntity
    {
        //relationship
        [JsonIgnore]
        public List<City>? Cities { get; set; }
    }
}
