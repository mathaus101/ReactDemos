using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace WebApiReact.Models
{
    public class BlogContext: DbContext
    {
        public BlogContext(DbContextOptions<BlogContext> options)
            : base(options)
        { }

        public DbSet<Blog> Blog { get; set; }
        public DbSet<Post> Post { get; set; }
    }
}
