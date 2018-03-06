using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DbScala.Db
{
    [Table("TARTICLE")]
    public class Article
    {
        [Column("FSTOCKLIST")]
        public int? StockList { get; set; }

        [Column("FCODE")]
        public string Code { get; set; }
        [Column("FCODETYPE")]
        public int CodeType { get; set; }
        [Column("FNAME")]
        public string Name { get; set; }

        [Column("FPSEUDO")]
        public int Pseudo { get; set; }

        [Column("FTYP")]
        public string Typ{ get; set; }

        [Column("FUNIT")]
        public string Unit{ get; set; }


        [Key]
        [Column("FID")]
        public int Id { get; set; }

    }
}
