using Rotativa;
using RotativaPDFDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RotativaPDFDemo.Controllers
{
    public class CustomerController : Controller
    {
        private List<Customer> _customers;

        public CustomerController()
        {
            _customers = new List<Customer>()
            {
                new Customer {CustomerId = 1, FirstName = "Rajeev", LastName = "Ranjan"},
                new Customer {CustomerId = 2, FirstName = "Virat", LastName = "Kohali"},
                 new Customer {CustomerId = 3, FirstName = "Rohit", LastName = "Sharma"},
                 new Customer {CustomerId = 4, FirstName = "M.S", LastName = "Dhoni"}
            };
        }

        // GET: Customer
        [HttpGet]
        public ActionResult Index()
        {
            return View();

        }
        public ActionResult Index1()
        {
            return View();
        }


        public ActionResult Print()
        {
            return new ActionAsPdf("Index1");
        }

        public ActionResult PrintView()
        {
            return new ViewAsPdf("Index1");
        }

    }
}
