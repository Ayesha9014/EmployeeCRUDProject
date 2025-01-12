

using System.Text.Json.Serialization;

namespace BaseLibrary.Entities
{
    public class Town:BaseEntity
    {
        //Relationship with Employee
        [JsonIgnore]
        public List<Employee>? Employees { get; set; }
        //relationship with city
        public City? City { get; set; }
        public int CityId { get; set; }
    }
}
