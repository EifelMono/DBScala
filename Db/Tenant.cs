using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace angular.Db
{
    [Table("TTENANT")]
    public class Tenant
    {
        [Column("FDESCRIPTION")]
        public string Description { get; set; }
        [Column("FCOLORSCHEME")]
        public int ColorScheme { get; set; }

        [Column("FITSYSTEMPORT")]
        public int FitSystemPort { get; set; }
        [Column("FSTOCKLIST")]
        public int? StockList { get; set; }

        [Key]
        [Column("FID")]
        public int Id { get; set; }

        [Column("FEXTERNALID")]
        public int ExternalId { get; set; }
    }
}
