using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebInterface.Models.DataBase
{
    public class Item
    {
        [Key] [Required] public int Id { get; set; }
        [Required] public DateTime ArriveDate { get; set; }
        public DateTime? RemoveDate { get; set; }

        [Required] public int CategoryId { get; set; }
        [Required] public int StorageSpaceId { get; set; }

        [ForeignKey("CategoryId")]
        public Category Category { get; set; }
        [ForeignKey("StorageSpaceId")]
        public StorageSpace StorageSpace { get; set; }

    }
}