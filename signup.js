
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8R5cks5SQ3BkgDzHiEMxxMiFPseuMd1M",
    authDomain: "chelseacaresfoundation.firebaseapp.com",
    databaseURL: "https://chelseacaresfoundation-default-rtdb.firebaseio.com",
    projectId: "chelseacaresfoundation",
    storageBucket: "chelseacaresfoundation.appspot.com",
    messagingSenderId: "195729725397",
    appId: "1:195729725397:web:0ddf2ae2053473b20d4f5c",
    measurementId: "G-026XXVHX11"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var ChelseaCaresFoundationDB = firebase.database().ref("sign-up");
  
  document.getElementById("sign-up").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var password = getElementVal("password");
  
    saveMessages(name, email, password);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("sign-up").reset();
  }
  
  const saveMessages = (name, email, password) => {
    var newContactForm = ChelseaCaresFoundationDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      password: password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };