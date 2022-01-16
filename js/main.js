function displayErrorSong() {
  if (userName.value !== "" && password.value !== "" ) {

    if (
      (userName.value === "BANANA" && password.value === "3333") ||
      (userName.value === "ROBONI" && password.value === "4884") ||
      (userName.value === "BBORO" && password.value === "1000")
    ) {
      document.body.style.background = "url(cons.jpg)";
      document.body.style.backgroundSize = "cover";
      userName.style.border = "3px solid #10cc9d";
      password.style.border = "3px solid #10cc9d";
      btn.style.background = "#10cc9d";
      btn.style.color = "black";
    }else {
      document.body.style.background = "url(wrong.jpg)";
      document.body.style.backgroundSize = "cover";
      userName.style.border = "3px solid red";
      password.style.border = "3px solid red";
      btn.style.background = "red";
      btn.style.color = "white";
    }
  } else {
    userName.style.border = "3px solid red";
    password.style.border = "3px solid red";
    btn.style.background = "red";
    btn.style.color = "white";
  }
}

let errorSong = document.querySelector("#myAudio");
let btn = document.querySelector("button");

let userName = document.querySelector("#username");
let password = document.querySelector("#password");

btn.addEventListener("click", displayErrorSong);
