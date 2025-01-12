using System.Text.Json.Serialization;

namespace BaseLibrary.Entities
{
    public class VacationType:BaseEntity
    {
        //relationship with vacation
        [JsonIgnore]
        public List<Vacation>? Vacations { get; set; }
    }
}
