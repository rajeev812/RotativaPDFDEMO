using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RotativaPDFDemo.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfileImage { get; set; }
    }
}