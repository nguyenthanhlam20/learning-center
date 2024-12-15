using BusinessObjects.Models;

namespace Reporitories
{
    public interface IContactRepository
    {
        List<Contact> GetContacts();
        Contact FindContactById(int id);
        void CreateContact(Contact c);
        void UpdateContact(Contact c);
    }
}
