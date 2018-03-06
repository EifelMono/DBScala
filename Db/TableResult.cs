using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DbScala.Db
{
    public class TableResult<T> where T: class
    {
        public IEnumerable<T> Data { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int Pages { get; set; }
    }
}
