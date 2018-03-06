using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Text;

namespace DbScala.Db
{
    public class ScalaContext : DbContext
    {
        public static string DataDirectory= "Data";
        public static string DataFilename = Path.Combine(DataDirectory, "Scala.sqlite");
        public DbSet<Article> Articles { get; set; }
        public DbSet<Tenant> Tenants { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite($@"Data Source={DataFilename}");
        }

        private static ScalaContext _Instance = null;
        public static ScalaContext Instance { get => _Instance ?? (_Instance = new ScalaContext()); }

        public static void Unload()
        {
            _Instance?.Dispose();
            _Instance = null;
        }
    }
}
