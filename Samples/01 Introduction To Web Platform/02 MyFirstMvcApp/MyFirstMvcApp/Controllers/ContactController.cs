using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyFirstMvcApp.Controllers
{
    public class ContactController : Controller
    {
        // GET: Home
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(string name, string email)
        {
            new ContactRepository().Add(name, email);

            return RedirectToAction("Index", "Home");
        }
    }
}