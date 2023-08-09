const firebaseConfig = {
  //   copy your firebase config informations
  
    apiKey: "AIzaSyAu2gL8IdCUYF6scfSLnNXGofydPYIoKdo",
    authDomain: "contact-form-f5b52.firebaseapp.com",
    databaseURL: "https://contact-form-f5b52-default-rtdb.firebaseio.com",
    projectId: "contact-form-f5b52",
    storageBucket: "contact-form-f5b52.appspot.com",
    messagingSenderId: "150626469582",
    appId: "1:150626469582:web:ed9ea609cb0e9bb69cf29f"
  };


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
