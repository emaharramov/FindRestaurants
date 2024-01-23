// Index Page

let indexMainBtnsArrow = document.querySelector(".indexMainBtnsArrow");
let indexMainBtnsArrowIcon = document.querySelector(".indexMainBtnsArrowIcon");

function transLateY() {
  indexMainBtnsArrow.classList.add("indexMainBtnsArrowIconMainOver");

  setTimeout(() => {
    indexMainBtnsArrowIcon.classList.add("indexMainBtnsArrowIconTransY");
  }, 0);

  setTimeout(() => {
    indexMainBtnsArrowIcon.classList.add("indexMainBtnsArrowIconTrans");
  }, 200);

  setTimeout(function () {
    window.open("category.htm", "_blank");
  }, 500);

  setTimeout(function () {
    location.reload();
  }, 510);
}

let pops = document.querySelector(".pops");
let indexMainBtns1 = document.getElementById("indexMainBtns1");
let secondPopMain = document.querySelector(".secondPopMain");

function signin() {
  secondPopMain.innerHTML = "";
  secondPopMain.innerHTML = `
                              <div id="secondPop">
                                <h3 class="popUpHead">Welcome!</h3>
                                <div class="popUpRow2 popUpRowSign">
                                  <div class="popUpRow">
                                    <p>Email</p>
                                    <form class="formClass">
                                    <label for="passwordLabel" class="popUplabel1">
                                      <input type="text" class="popUpinpt2 popUpinpt3 passwordLabel00" placeholder="type your email adress" />
                                    </label>
                                  </form>
                                  </div>
                                  <div class="popUpRow">
                                    <p>Password</p>
                                    <form class="formClass">
                                      <label for="passwordLabel" class="popUplabel1">
                                        <input type="password" class="popUpinpt2 popUpinpt3" id="passwordLabel3" placeholder="type your password" />
                                        <i onclick="myFunction3()" class="fa-solid fa-eye-slash deneme3 hide1"></i>
                                      </label>
                                    </form>
                                  </div>
                                  <button class="signupPop signupPopMar">Sign In</button>
                                </div>                    
                              </div>
                            `;
  pops.style.visibility = "initial";
}

function signup() {
  secondPopMain.innerHTML = "";
  secondPopMain.innerHTML = `
                  <div id="secondPop">
                    <h3 class="popUpHead">Welcome!</h3>
                    <div class="popUpRow2">
                      <div class="popUpRow">
                        <p>Name</p>
                        <input type="text" class="popUpinpt popUpinpt2" placeholder="type your name" />
                      </div>
                      <div class="popUpRow">
                        <p>Email</p>
                        <input type="text" class="popUpinpt popUpinpt2" placeholder="type your email" />
                      </div>
                      <div class="popUpRow">
                        <p>Password</p>
                        <form class="formClass">
                          <label for="passwordLabel" class="popUplabel1">
                            <input type="password" class="popUpinpt2 popUpinpt3" id="passwordLabel" placeholder="type your password" />
                            <i onclick="myFunction()" class="fa-solid fa-eye-slash deneme"></i>
                          </label>
                        </form>
                      </div>
                      <div class="popUpRow">
                        <p>Confirm Password</p>
                        <form class="formClass">
                          <label for="passwordLabel2" class="popUplabel2">
                            <input type="password" class="popUpinpt2 popUpinpt3" id="passwordLabel2" placeholder="type your password" />
                            <i onclick="myFunction2()" class="fa-solid fa-eye-slash deneme1"></i>
                          </label>
                        </form>
                      </div>
                      <button class="signupPop">Sign Up</button>
                    </div>                    
                  </div>
                  `;
  pops.style.visibility = "initial";
}

function xmarkclose() {
  pops.style.visibility = "hidden";
}

function myFunction() {
  let x = document.getElementById("passwordLabel");
  let deneme = document.querySelector(".deneme");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  deneme.classList.toggle("fa-eye");
}

function myFunction2() {
  let y = document.getElementById("passwordLabel2");
  let deneme1 = document.querySelector(".deneme1");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
  deneme1.classList.toggle("fa-eye");
}

function myFunction3() {
  let z = document.getElementById("passwordLabel3");
  let deneme3 = document.querySelector(".deneme3");
  if (z.type === "password") {
    z.type = "text";
  } else {
    z.type = "password";
  }
  deneme3.classList.toggle("fa-eye");
}

let btnsubs = document.getElementById("btnsubs")
let inp = document.getElementById("inp").value

function forsub() {
  if(inp.value !== '') alert('Thanks for Subscribe Us')
}