using System.Text.Json.Serialization;

namespace BaseLibrary.Entities
{
    public class SanctionType:BaseEntity
    {
        //Relationship with Sanction
        [JsonIgnore]
        public List<Sanction>? Sanctions { get; set; }
    }
}
