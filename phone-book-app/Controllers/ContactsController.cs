using phone_book_app.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace phone_book_app.Controllers
{
    //no repository/dependency injection etc. real app would have all of these.
    public class ContactsController : ApiController
    {
        private static List<Contact> contacts = InitContacts();

        private static List<Contact> InitContacts()
        {
            var ret = new List<Contact>()
            {
                new Contact()
                {
                    Id = 1,
                    FirstName = "Peter",
                    LastName = "Parker",
                    EmailAddress = "peter.parker@daily-bugle.com",
                    Twitter = "@spiderman",
                    CompanyName = "Daily Bugle",
                    ImageUrl = "src/assets/peter-parker.jpg",
                    SuperHeroType = SuperHeroType.Marvel
                },
                new Contact()
                {
                    Id = 2,
                    FirstName = "Clark",
                    LastName = "Kent",
                    EmailAddress = "clark.kent@daily-planet.com",
                    Twitter = "@superman",
                    CompanyName = "Daily Planet",
                    ImageUrl = "src/assets/clark-kent.jpg",
                    SuperHeroType = SuperHeroType.Dc
                },
                new Contact()
                {
                    Id = 3,
                    FirstName = "Tony",
                    LastName = "Stark",
                    EmailAddress = "tony@stark-industries.com",
                    Twitter = "@ironman",
                    CompanyName = "Stark Industries",
                    ImageUrl = "src/assets/tony-stark.jpg",
                    SuperHeroType = SuperHeroType.Marvel
                },
                new Contact()
                {
                    Id = 4,
                    FirstName = "Bruce",
                    LastName = "Banner",
                    EmailAddress = "bruce@northwind-observatory.com",
                    Twitter = "@hulk",
                    CompanyName = "Northwind Observatory",
                    ImageUrl = "src/assets/bruce-banner.jpg",
                    SuperHeroType = SuperHeroType.Marvel
                },
                new Contact()
                {
                    Id = 5,
                    FirstName = "Steve",
                    LastName = "Rogers",
                    EmailAddress = "steve@us-army.com",
                    Twitter = "@captainamerica",
                    CompanyName = "US Army",
                    ImageUrl = "src/assets/steve-rogers.jpg",
                    SuperHeroType = SuperHeroType.Marvel
                }
            };
            return ret;

        }

        // GET api/contacts
        public IEnumerable<Contact> Get()
        {
            return contacts;
        }

        // GET api/contacts/5
        public Contact Get(int id)
        {
            return contacts.SingleOrDefault(x => x.Id == id);
        }

        // POST api/contacts
        public void Post([FromBody]Contact value)
        {
            //int id = contacts.Max(s => s.Id) + 1;
            //value.Id = id;
            //contacts.Add(value);
        }

        // PUT api/contacts/5
        public void Put(int id, [FromBody]Contact value)
        {
            //just replace for now...
            contacts.RemoveAt(id - 1);
            contacts.Add(value);
        }

        // DELETE api/contacts/5
        public void Delete(int id)
        {
            //remove delete option for now
            //contacts.RemoveAt(id);
        }
    }
}
