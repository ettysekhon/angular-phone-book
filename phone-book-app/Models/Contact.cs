using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phone_book_app.Models
{
    public class Contact : IModel
    {
        private int _id;
        public int Id
        {
            get
            {
                return _id;
            }
            set
            {
                _id = value;
            }
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string EmailAddress { get; set; }

        public string Twitter { get; set; }

        public string CompanyName { get; set; }

        public string ImageUrl { get; set; }

        public SuperHeroType SuperHeroType { get; set; }
    }
}