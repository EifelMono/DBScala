using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DbScala.Db;
using Microsoft.AspNetCore.Mvc;

namespace DbScala.Controllers
{
    [Route("api/db")]
    public class DbController : Controller
    {

        [HttpGet("getarticlesbyname")]
        public TableResult<Article> GetArticlesByName([FromQuery] string searchname, [FromQuery] int pageindex = 0, int pagesize = 100)
        {
            var data = ScalaContext.Instance.Articles.Where((a) => string.IsNullOrEmpty(searchname)? true: a.Name.Contains(searchname));
            return new TableResult<Article>
            {
                PageIndex = pageindex,
                PageSize = pagesize,
                Pages = (int)Math.Ceiling((double)data.Count() / (double)pagesize),
                Data = data.Skip(pageindex * pagesize).Take(pagesize)
            };
        }

        [HttpGet("gettenants")]
        public TableResult<Tenant> GetTenants()
        {
            return new TableResult<Tenant>
            {
                Data = ScalaContext.Instance.Tenants
            };
        }
    }
}