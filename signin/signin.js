function login() {
  const redirectUrl = "../index.html";
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let uppercheck = /[A-Z]/;
  let scharactercheck = /[!@#$%^&*(),.?":{}|<>]/;
  let numbercheck = /[1234567890]/;

  //Emtpy Check
  if (username === "" || password === "") {
    if (username === "" && password != "") {
      alert("Please fill in username!");
      return;
    }
    if (password === "" && username != "") {
      alert("Please fill in password!");
      return;
    }
    if (password === "" && username === "") {
      alert("Please fill in both username and password!");
      return;
    }
  }
  //Legth Check
  if (username.legth < 10 || password.legth < 10) {
    alert("Username and password cannot be longer than 10 characters");
    return;
  }
  //Upper Check
  if (!uppercheck.test(username) && !uppercheck.test(password)) {
    alert("Username and password must contain at least one uppercase letter");
    return;
  }
  //Special Character Check
  if (!scharactercheck.test(username) && !scharactercheck.test(password)) {
    alert("Username and password must contain at least one special character");
    return;
  }
  //Number Check
  if (!numbercheck.test(username) && !numbercheck.test(password)) {
    alert("Username and password must contain at least one number");
    return;
  }

  if (username === "Admin123@" && password === "Admin123@") {
    alert("Login successfully!");
    window.location.href = redirectUrl;
  } else {
    alert("You are not a valid user");
  }
}
