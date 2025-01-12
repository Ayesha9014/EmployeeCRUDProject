using System.Text.Json.Serialization;

namespace BaseLibrary.Entities
{
    public class OvertimeType:BaseEntity
    {
        //relation with overtime
        [JsonIgnore]
        public List<Overtime>? Overtimes {  get; set; }
    }
}
