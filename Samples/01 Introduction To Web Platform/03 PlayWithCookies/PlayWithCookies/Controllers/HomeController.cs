using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlayWithCookies.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreateCookie()
        {
            HttpCookie cookie = new HttpCookie("mydata", "blabla");
            Response.Cookies.Add(cookie);

            return View("Index");
        }
    }
}