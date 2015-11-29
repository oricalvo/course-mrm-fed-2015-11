using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class ContactController : ApiController
    {
        public Contact[] Get()
        {
            return new Contact[]
                {
                    new Contact() {ID=1, Name="Ori" },
                };
        }

        public Contact Get(int id)
        {
            return new Contact() { ID = id, Name = "Ori" };
        }
    }

    public class Contact
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
