const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordCheckValue = passwordCheck.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username can not be blank");
   
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email can not be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password can not be blank");
  } else {
    setSuccessFor(password);
  }
  if (passwordCheckValue === "") {
    setErrorFor(passwordCheck, "Password check can not be blank");
  } else {
    setSuccessFor(passwordCheck);
  }
  if (passwordValue !== passwordCheckValue) {
    setErrorFor(passwordCheck, "Password do not match");
  }
};
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
};
const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
const isEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
const resetForm = () => {
    const errorInputs = form.querySelectorAll(".form-control.error");
    if (errorInputs.length === 0) {
      username.value = "";
      email.value = "";
      password.value = "";
      passwordCheck.value = "";
    }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  resetForm();
  
});
