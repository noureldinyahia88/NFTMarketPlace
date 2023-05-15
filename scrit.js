let nums = document.querySelectorAll('.content .num');
let mainSection = document.querySelector('.main-section');

nums.forEach((num) => starCount(num));


function starCount(el) {
  let goal = parseInt(el.dataset.goal);
  let count = setInterval(() => {
    let currentCount = parseInt(el.textContent);
    el.textContent = currentCount + 1 +"K+";
    if (currentCount >= goal) {
      clearInterval(count);
    }
  }, 1000/ goal);
}


// validation form

function formvalid() {
  let user = document.getElementById('user').value
  let validpass = document.getElementById('pass').value;
  let btnSubmit = document.querySelector('.submit');

  if (validpass.length <= 8 || validpass.length >= 20 || user.trim() === '' ) {
    document.getElementById('vaild-pass').innerHTML = 'Minimum 8 characters';
    btnSubmit.disabled = true;
    btnSubmit.style.opacity = '0.5'
    return false;
  }
  else {
    document.getElementById('vaild-pass').innerHTML = '';
    btnSubmit.disabled = false;
    btnSubmit.style.opacity = '1'
  }
}

  
  function show() {
    let x = document.getElementById("pass");
    if (x.type === "password") {
    x.type = "text";
    document.getElementById("showimg").src =
        "https://static.thenounproject.com/png/777494-200.png";
    } else {
    x.type = "password";
    document.getElementById("showimg").src =
        "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
}


// ******************cookies********************

const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
      cookieBox.classList.remove("show");
      }
    });
  });
};

window.addEventListener("load", executeCodes);