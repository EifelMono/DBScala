using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular.Db;
using Microsoft.AspNetCore.Mvc;

namespace angular.Controllers
{
    [Route("api/[controller]")]
    public class DbController : Controller
    {

        [HttpGet("[action]")]
        public TableResult<Article> GetArticleByName([FromQuery] string searchName, [FromQuery] int pageIndex = 0, int pageSize = 100)
        {
            var data = ScalaContext.Instance.Articles.Where((a) => a.Name.Contains(searchName));
            return new TableResult<Article>
            {
                PageIndex = pageIndex,
                PageSize = pageSize,
                Pages = (int)Math.Ceiling((double)data.Count() / (double)pageSize),
                Data = data.Skip(pageIndex * pageSize).Take(pageSize)
            };
        }
    }
}