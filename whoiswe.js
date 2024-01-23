// whoiswe

let cardsMain3 = document.querySelector(".cardsMain3");
let cardsMain4 = document.querySelector(".cardsMain4");

function radiobutton1() {
  cardsMain3.innerHTML = "";

  cardsMain3.innerHTML = `
                       <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Gareth Smith</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                       <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Lopez Smith</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                       <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Jennifer Smith</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                               `;
}
radiobutton1();
function radiobutton2() {
  cardsMain3.innerHTML = "";

  cardsMain3.innerHTML = `
                           <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Lopez</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                       <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Gareth</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                       <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName"> Smith</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                               `;
}
function radiobutton3() {
  cardsMain3.innerHTML = "";

  cardsMain3.innerHTML = `
                           <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Gareth</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                       <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Lopez</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                       <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Smith</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                               `;
}
function radiobutton4() {
  cardsMain3.innerHTML = "";

  cardsMain3.innerHTML = `
                           <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Lopez</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                       <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName">Gareth</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                       <div id="cardUser">
                           <img id="userphoto" src="/img/user1.png" alt="UserPhoto">
                           <p class="cardUserText">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <p class="cardUserName"> Smith</p>
                           <p class="cardUserVac">interface designer</p>
                       </div>
                               `;
}
//   whoiswevideo
let whoWeHeadplayVector = document.getElementById("whoWeHeadplayVector");
let whoWeHeadMain = document.getElementById("whoWeHeadMain");
let whoWeHead = document.getElementById("whoWeHead");
let whoWeHeadplayVector2 = document.getElementById("whoWeHeadplayVector2");

whoWeHeadplayVector.addEventListener("click", function () {
  whoWeHead.style.backgroundImage = "url()";
  whoWeHeadMain.innerHTML = `<iframe id="whoiswevideo" src="https://www.youtube.com/embed/EWJOr2A_xKA?si=tqjB4lfBljp2qGMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
});

whoWeHeadplayVector2.addEventListener("click", function () {
  whoWeHead.style.backgroundImage = "url()";
  whoWeHeadMain.innerHTML = `<iframe id="whoiswevideo" src="https://www.youtube.com/embed/EWJOr2A_xKA?si=tqjB4lfBljp2qGMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
});
