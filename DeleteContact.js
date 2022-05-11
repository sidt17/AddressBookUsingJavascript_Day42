class Contact
{
   //constructor
   constructor(...params) 
 {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }


get firstName() 
{ return this._firstName; 
}
set firstName(firstName) 
{
  let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
  // test returns a boolen value
  if (nameRegex.test(firstName))
    this._firstName = firstName;
  else
    throw "Invalid first Name";
}


get lastName() 
{ return this._lastName; 
}
set lastName(lastName) 
{
  let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
 
  if (nameRegex.test(lastName))
    this._lastName = lastName;
  else
    throw "Invalid  last Name";
}

get address() 
{ return this._address; 
}
set address(address)
{
  let addressRegex = RegExp("^[A-Za-z]{4,}$");
  if (addressRegex.test(address))
    this._address = address;
  else
    throw "Invalid address ";
}


get city() 
{ return this._city; 
}
set city(city) 
{
  let cityRegex = RegExp("^[A-Za-z]{4,}$");
  if (cityRegex.test(city))
    this._city = city;
  else
    throw "Invalid city ";
}


get state() 
{ return this._state; 
}
set state(state) 
{
  let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
  if (stateRegex.test(state))
    this._state = state;
  else
    throw "Invalid state";
}


get zip() 
{ return this._zip; 
}
set zip(zip) 
{
  let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
  if (zipRegex.test(zip))
    this._zip = zip;
  else
    throw "Invalid zip ";
}

 
get phoneNumber() 
{ return this._phoneNumber; 
}
set phoneNumber(phoneNumber) 
{
  let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
  if (phoneRegex.test(phoneNumber))
    this._phoneNumber = phoneNumber;
  else
    throw "Invalid phone number";
}

  // get and set for email
//ac.xyz@gmail.com.in .xyz-optional  .in-optional
get email() 
{ return this._email; 
}
set email(email) 
{
  let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
  if (emailRegex.test(email))
    this._email = email;
  else
    throw "Invalid email";
}

  //defining to string method
  toString() 
  {
    return "First Name: " + this.firstName + ", Last Name: " + this.lastName
      + "\nAddress: " + this.address
      + ", City: " + this.city + ", State: "
      + this.state + "\nZip: " + this.zip
      + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
  }
}


try 
{
let contact_book = new AddressBook("Shreya", "Vyas", "Ajadnagar", "Ajmer", "Rajasthan", "422142",
  "91 8344443433", "shreya@gmail.com");
console.log(contact_book.toString());
} catch (e) 
{
  console.log(e);
}

let contactsArray = new Array();
function AddContact(firstName,lastName,address,city,state,zip,phoneNumber,Email){
    try{
    let contactobject = new Contact(firstName,lastName,address,city,state,zip,phoneNumber,Email);
    contactsArray.push(contactobject);
    }
    catch (ex){
        console.error(ex);
    }
}
AddContact("Apoorv","Jain","Vednagar","Amritsar","Punjab","456454","91 9992222333","apoorv@gmail.com");
AddContact("Khushi", "Singh", "Nalkheda", "Lucknow", "UttarPradesh", "444555","91 9922334455", "khushi@gmail.com");

contactsArray.forEach(contactsDetails => console.log(contactsDetails.toString()));



let check = contactsArray.findIndex(
    (contact_book) => contact_book.firstName == "Khushi"
  );


  //UC5 Removing an element from an array at an  index

  try{
    contactsArray.splice(check, 1);
    console.log("----------------------Contacts after Being Deleted from the array---------------------------------");
    contactsArray.forEach((contact_book) => console.log(contact_book.toString()));
    
  }catch (e)

{
  console.log(e);
}