using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using SQLitePCL;

namespace API.Data
{
    public class DbInitializer
    {
         public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {

            if (!userManager.Users.Any())
        {
            var user = new User
            {
                UserName = "civ",
                Email = "Civ@test.com"
            };

            await userManager.CreateAsync(user, "Hamza0002.");
            await userManager.AddToRoleAsync(user, "Member");

            var admin = new User
            {
                UserName = "admin",
                Email = "admin@test.com"
            };

            await userManager.CreateAsync(admin, "Hamza0002.");
            await userManager.AddToRolesAsync(admin, new[] { "Admin", "Member" });
        }


            if (context.Products.Any()) return;

            var Products = new List<Product>
            {
                		new Product
                {
                    Name = "Adidas1",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 20000,
                    PictureUrl = "/images/products/bagstash_laptop.jpg",
                    Brand = "Adidas",
                    Type = "Sırt Çantası",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Nike",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 15000,
                    PictureUrl = "/images/products/bagstash_ofis.jpg",
                    Brand = "Nike",
                    Type = "Spor Çantası",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Rebook",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictureUrl = "/images/products/bagstash_sirt.jpg",
                    Brand = "Rebook",
                    Type = "Laptop Çantası",
                    QuantityInStock = 100
                },
                  new Product
                {
                    Name = "BagStash",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictureUrl = "/images/products/nike_ofis.jpg",
                    Brand = "BagStash",
                    Type = "Evrak Çantası",
                    QuantityInStock = 100
                },





            };
            foreach (var product in Products)
            {
                context.Products.Add(product);
            }
            context.SaveChanges();

        }
    }
}