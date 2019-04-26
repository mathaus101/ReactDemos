using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiReact.Models
{
    public class Blog
    {
        public int BlogID { get; set; }
        public string Url { get; set; }

        public ICollection<Post> Posts { get; set; }

    }
}
