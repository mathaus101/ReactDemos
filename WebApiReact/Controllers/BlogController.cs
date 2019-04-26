using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiReact.Models;

namespace WebApiReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly BlogContext _context;

        public BlogController(BlogContext context)
        {
            _context = context;
        }

        // GET: api/Blog
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Blog>>> GetBlog()
        {
            return await _context.Blog.ToListAsync();
        }

        // GET: api/Blog/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Blog>> GetBlog(int id)
        {
            var blog = await _context.Blog.FindAsync(id);

            if (blog == null)
            {
                return NotFound();
            }

            return blog;
        }

        // PUT: api/Blog/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlog(int id, Blog blog)
        {
            if (id != blog.BlogID)
            {
                return BadRequest();
            }

            _context.Entry(blog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Blog
        [HttpPost]
        public async Task<ActionResult<Blog>> PostBlog(Blog blog)
        {
            _context.Blog.Add(blog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlog", new { id = blog.BlogID }, blog);
        }

        // DELETE: api/Blog/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Blog>> DeleteBlog(int id)
        {
            var blog = await _context.Blog.FindAsync(id);
            if (blog == null)
            {
                return NotFound();
            }

            _context.Blog.Remove(blog);
            await _context.SaveChangesAsync();

            return blog;
        }

        private bool BlogExists(int id)
        {
            return _context.Blog.Any(e => e.BlogID == id);
        }
    }
}
