using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DbScala.Db
{
    public class ScalaContext : DbContext
    {
        public DbSet<Article> Articles { get; set; }
        public DbSet<Tenant> Tenants { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=Data\Scala.sqlite");
        }

        private static ScalaContext _Instance = null;
        public static ScalaContext Instance { get => _Instance ?? (_Instance = new ScalaContext()); }
    }
}
