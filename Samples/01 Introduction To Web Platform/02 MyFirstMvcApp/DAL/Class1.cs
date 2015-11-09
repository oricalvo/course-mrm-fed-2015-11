using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ContactRepository
    {
        static List<Contact> contacts = new List<Contact>()
        {
            new Contact() {ID=1, Name="Ori" },
            new Contact() {ID=2, Name="Roni" },
        };

        public Contact[] GetAll()
        {
            return contacts.ToArray();
        }

        public void Add(string name, string email)
        {
            contacts.Add(new Contact()
            {
                ID = -1,
                Name = name,
            });
        }
    }

    public class Contact
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
