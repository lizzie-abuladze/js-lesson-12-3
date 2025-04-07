const formEl = document.getElementById("form-el");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = {};
  //username field
  let usernamefieldValue = document.getElementById("username").value;

  if (usernamefieldValue === "") {
    errors.usernamefield = "where's your name at? 🙄";
  }

  // password value

  let passwordValue = document.getElementById("password").value;
  let passwordValue2 = document.getElementById("password2").value;

  if (passwordValue === "") {
    errors.passwordfield = "Enter your password😠";
  }
  if (passwordValue !== passwordValue2) {
    errors.passwordfield2 = "Wow, you can't even match your own passwords? 🙄";
  }

  //   gender field
  let gender = false;
  let chooseGender = this.querySelectorAll(' [name = "gender" ] ');
  chooseGender.forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });
  if (!gender) {
    errors.gender = "Are u genderless. Choose one 😂";
  }

  //   check box
  let checkbox = document.getElementById("check").checked;
  if (!checkbox) {
    errors.agree = "Hold up, we're not done yet.😏";
  }

  console.log(errors);

  //   clear before anything

  this.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  //   using loop for errors to print on the screen

  for (let item in errors) {
    console.log(item); //key

    let errorText = document.getElementById("error_" + item);
    console.log(errorText);

    if (errorText) {
      errorText.textContent = errors[item];
    }
  }
  // submit the input
  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});


// show/hide password

const icon = document.getElementById("icon-passw");
const passwField = document.getElementById("password");

function showHidePassw() {
  if (passwField.type === "password") {
    passwField.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwField.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
icon.addEventListener("click", showHidePassw);
