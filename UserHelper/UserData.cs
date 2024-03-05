namespace CREDITUP.UserHelper
{
    public class UserData
    {
        public UserData() { }
        public UserData(string firstName, string lastName, string email, bool? isTest = null)
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            IsTest = isTest;
        }

        public UserData(string firstName, string lastName, string email, string password, bool? isTest = null) : this(firstName, lastName,email, isTest)
        {
            TempPassword = password;
        }

        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string Email { get; private set; }

        public string TempPassword { get; private set; }

        public bool? IsTest { get; private set; }
    }
}