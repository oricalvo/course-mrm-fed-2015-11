using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace PlayWithCookies.Controllers
{
    public class AccountController : Controller
    {
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(LoginModel model)
        {
            if (model.UserName == "ori" && model.Password == "123")
            {
                FormsAuthentication.RedirectFromLoginPage(model.UserName, model.RememberMe);
                return null;
            }
            else
            {
                ModelState.AddModelError("", "Invalid user name or password");
            }

            return View();
        }
    }

    public class LoginModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}