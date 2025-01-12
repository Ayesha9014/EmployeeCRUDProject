using System.Text.Json.Serialization;

namespace BaseLibrary.Entities
{
    public class City:BaseEntity
    {
        //Relationship with country
        public Country? Country { get; set; }
        public int CountryId { get; set; }

        //Relationship with town
        [JsonIgnore]
        public List<Town>? Towns { get; set; }
    }
}
