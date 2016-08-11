using RotativaPDFDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RotativaPDFDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        //public ActionResult GetSamples()
        //{
        //    //List<Sample> samples = new List<Sample>();
        //    //samples.Add(new Sample() { Name = "tmp1", Email = "tmp1@example.com" });
        //    //samples.Add(new Sample() { Name = "tmp2", Email = "tmp2@example.com" });
        //    //return View(samples);
        //}
        public ActionResult GeneratePDF()
        {

            return new Rotativa.ActionAsPdf("GetSamples");
        }
    }
}
