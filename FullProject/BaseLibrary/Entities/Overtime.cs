using System.ComponentModel.DataAnnotations;

namespace BaseLibrary.Entities
{
    public class Overtime:OtherBaseEntity
    {
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        public int NumberOfDays=>(EndDate-StartDate).Days;

        //relationship with OverTimeType
        public OvertimeType? OvertimeType { get; set; }
        [Required]
        public int OverTimeTypeId { get; set; }
    }
}
