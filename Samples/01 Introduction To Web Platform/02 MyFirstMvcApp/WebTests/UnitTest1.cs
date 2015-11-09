using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MyFirstMvcApp.Controllers;
using System.Web.Mvc;

namespace WebTests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            ContactController ctrl = new ContactController();
            ActionResult res = ctrl.Create();
            Assert.IsNotNull(res as ViewResult);

        }
    }
}
