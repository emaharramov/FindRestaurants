// category

jQuery(document).ready(function () {
  jQuery(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    responsiveClass: true,
    nav: true,
    dots: true,
    center: true,
    navText: [
      '<i class="fa-solid sagSolIcon SolIcon fa-arrow-left"></i>',
      '<i class="fa-solid sagSolIcon SagIcon fa-arrow-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
  });
});

let sec2 = document.getElementById("sec2");
let gridFunc = document.getElementById("gridFunc");
let listFunc = document.getElementById("listFunc");
const upIcon = document.getElementById("upIcon");

let obj = [
  {
    id: 1,
    img: "/img/Div-img.png",
    ad: "Central Baku",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 8,
    tip: "Cafe",
    yer: "Ganjlik",
    spatialImage: "Closed Space",
  },
  {
    id: 2,
    img: "/img/Div-img.png",
    ad: "Burger King",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 14,
    tip: "Burger House",
    yer: "Icharisheher",
    spatialImage: "Closed Space",
  },
  {
    id: 3,
    img: "/img/Div-img.png",
    ad: "Kah Kaha",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 6,
    tip: "Lunch",
    yer: "Icharisheher",
    spatialImage: "Closed Space",
  },
  {
    id: 4,
    img: "/img/Div-img.png",
    ad: "Dolma",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 5,
    tip: "Lunch",
    yer: "Narimanov",
    spatialImage: "Garden Space",
  },
  {
    id: 5,
    img: "/img/Div-img.png",
    ad: "Özsüt",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 8,
    tip: "Lunch",
    yer: "Nizami",
    spatialImage: "Seashore",
  },
  {
    id: 6,
    img: "/img/Div-img.png",
    ad: "Tostçu Orhan",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 7,
    tip: "Burger House",
    yer: "Narimanov",
    spatialImage: "Garden Space",
  },
  {
    id: 7,
    img: "/img/Div-img.png",
    ad: "Pizza Mizza",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 20,
    tip: "Burger House",
    yer: "Nizami",
    spatialImage: "Seashore",
  },
  {
    id: 8,
    img: "/img/Div-img.png",
    ad: "Central Baku",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 16,
    tip: "Retro cafe",
    yer: "28 May",
    spatialImage: "Outdoor Space",
  },
  {
    id: 9,
    img: "/img/Div-img.png",
    ad: "Mc Donalds",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 8,
    tip: "Retro cafe",
    yer: "28 May",
    spatialImage: "Closed Space",
  },
  {
    id: 10,
    img: "/img/Div-img.png",
    ad: "Burger House",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 14,
    tip: "Burger House",
    yer: "Ganjlik",
    spatialImage: "Garden Space",
  },
  {
    id: 11,
    img: "/img/Div-img.png",
    ad: "Meatadore",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 3,
    tip: "Burger House",
    yer: "Icharisheher",
    spatialImage: "Seashore",
  },
  {
    id: 12,
    img: "/img/Div-img.png",
    ad: "Mado",
    phone: "+994 (55)200-50-50",
    address: "Baku city 1005, 75 Nizami St,",
    workTime: "10.00 am to 01:30 pm",
    comment: 0,
    tip: "Cafe",
    yer: "Narimanov",
    spatialImage: "Outdoor Space",
  },
];
let selectTip = obj;

let kod = "";

function grid() {
  sec2.innerHTML = "";
  kod = "";
  obj.forEach((item, index) => {
    kod += `            <div class="mainBox">
                            <div id="allInfo">   
                                <img id="restoranImg" src="${item.img}"/>
                                <p id="restoranName">${item.ad}</p>
                                <div class="star">
                                  <i class="fa-solid fa-star deger"></i>
                                  <i class="fa-solid fa-star deger"></i>
                                  <i class="fa-solid fa-star deger"></i>
                                  <i class="fa-solid fa-star deger"></i>
                                  <i class="fa-solid fa-star deger"></i>
                                </div>
                                <div class="restoranInfo">
                                    <div class="plus">
                                        <img src="/img/mob.png" />
                                    </div>
                                    <div>
                                        <span class="text">${item.phone}</span>
                                    </div>
                                </div>
                                <div class="restoranInfo" >
                                    <div>
                                        <img src="/img/loc.png" />
                                    </div>
                                    <div>
                                        <span class="text">${item.address}</span>
                                    </div>
                                </div>
                                <div class="restoranInfo">
                                    <div>
                                        <img src="/img/clock.png" />
                                    </div>
                                    <div>
                                        <span class="text">${item.workTime}</span>
                                    </div>
                                </div>
                                <div class="restoranInfoLast">
                                    <div class="restoranInfo" id='addtofav'>
                                        <div>
                                            <i class="fa-solid fa-heart begen"></i>
                                        </div>
                                        <div>
                                            <span class="text">Add to favorite</span>
                                        </div>
                                    </div>
                                    <div class="restoranInfo">
                                        <div>
                                            <img src="/img/comment.png" />
                                        </div>
                                        <div>
                                            <span class="text">${item.comment}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
  });
  sec2.innerHTML = kod;
  downUp();
  starInitialize();
  addFav();
}

let stars = document.querySelectorAll(".fa-star");

stars.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("starBg");
  });
});

gridFunc.addEventListener("click", grid);

grid();

listFunc.addEventListener("click", list);

function list() {
  let code = "";
  sec2.innerHTML = "";

  sec2.style.display = "flex";
  sec2.style.justifyContent = "space-evenly";

  selectTip.forEach((item, index) => {
    code += `<div id="mainBox" class="boxShadowrestoran">
                    <div>
                        <div class="star stars">
                          <i class="fa-solid fa-star deger"></i>
                          <i class="fa-solid fa-star deger"></i>
                          <i class="fa-solid fa-star deger"></i>
                          <i class="fa-solid fa-star deger"></i>
                          <i class="fa-solid fa-star deger"></i>
                        </div>
                    </div>
                    <div>
                        <div class="allInfo"> 
                            <div>
                                <img class="restoranImg" src="${item.img}"/>
                            </div> 
                            <div class="allInfoSec">
                                <p id="resListname">${item.ad}</p>
                                <div class="restoranInfo">
                                    <div class="mright">
                                        <img src="/img/mob.png" />
                                    </div>
                                    <div>
                                        <span class="text">${item.phone}</span>
                                    </div>
                                </div>
                                <div class="restoranInfo">
                                    <div class="mright">
                                        <img src="/img/loc.png" />
                                    </div>
                                    <div>
                                        <span class="text">${item.address}</span>
                                    </div>
                                </div>
                                <div class="restoranInfo">
                                    <div class="mright">
                                        <img src="/img/clock.png" />
                                    </div>
                                    <div>
                                        <span class="text">${item.workTime}</span>
                                    </div>
                                </div>
                                <div class="restoranInfoLast">
                                    <div class="restoranInfo">
                                        <div class="mright">
                                          <i class="fa-solid fa-heart begen"></i>                                                       </div>
                                        <div>
                                            <span class="text">Add to favorite</span>
                                        </div>
                                    </div>
                                    <div class="restoranInfo">
                                        <div class="mright">
                                            <img src="/img/comment.png" />
                                        </div>
                                        <div>
                                            <span class="text">8</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
  });
  sec2.innerHTML = code;
  starInitialize();
  addFav();
}

jQuery(document).ready(function () {
  jQuery("#upIcon").click(function () {
    upIcon.classList.toggle("rotateIcons");
    jQuery("#panel").slideToggle("slow");
  });
});

let category = [
  "Cafe",
  "Burger House",
  "Breakfast",
  "Lunch",
  "Co-working",
  "Retro cafe",
  "Pub/Bistro",
  "Club",
  "24 Hour Dining",
  "Late Night",
  "Private Room",
  "Wheelchair Access",
];
let paneL = document.getElementById("paneL");

function first() {
  let cat = "";
  for (let m = 0; m < category.length; m++) {
    cat += `
                <div class="categoryList categoryListM categoryListB">
                    <input type="checkbox" class="allCategoryC tip" value="${category[m]}" id='inpt${m}'>
                    <label for="inpt${m}" class="allCategoryC2">
                    </label>
                    <p class="allCategoryP">${category[m]}</p>
                </div>`;
  }

  paneL.innerHTML = cat;
}
first();

/*  */
let upIcon1 = document.getElementById("upIcon1");

jQuery(document).ready(function () {
  jQuery("#upIcon1").click(function () {
    upIcon1.classList.toggle("rotateIcons");
    jQuery("#panel2").slideToggle("slow");
  });
});

let category2 = [
  "Central City",
  "Icharisheher",
  "Ganjlik",
  "28 May",
  "Narimanov",
  "Nizami",
  "Bakikhanov",
  "Sabail",
  "Khatai",
];
let paneL2 = document.getElementById("paneL2");

let cat2 = "";
for (let n = 0; n < category2.length; n++) {
  cat2 += `
            <div class="categoryList categoryListM categoryListB">
                <input type="checkbox" class="allCategoryC" value="${category2[n]}" id='inp${n}'>
                <label for="inp${n}" class="allCategoryC2">
                </label>
                <p class="allCategoryP">${category2[n]}</p>
            </div>`;
}

paneL2.innerHTML = cat2;

/* */

let upIcon2 = document.getElementById("upIcon2");

jQuery(document).ready(function () {
  jQuery("#upIcon2").click(function () {
    upIcon2.classList.toggle("rotateIcons");
    jQuery("#panel3").slideToggle("slow");
  });
});

let category3 = ["Seashore", "Outdoor Space", "Closed Space", "Garden Space"];
let paneL3 = document.getElementById("paneL3");

let cat3 = "";

for (let b = 0; b < category3.length; b++) {
  cat3 += `
            <div class="categoryList categoryListM categoryListB">
                <input type="checkbox" class="allCategoryC" value="${category3[b]}" id='inpp${b}'>
                <label for="inpp${b}" class="allCategoryC2">
                </label>
                <p class="allCategoryP">${category3[b]}</p>
            </div>`;
}

panel3.innerHTML = cat3;

let popular = [
  {
    img: "centralBaku",
    ad: "Central Baku",
    comments: "10 comments",
    like: "105 likes",
  },
  {
    img: "hardRock",
    ad: "Hard Rock",
    comments: "12 comments",
    like: "72 likes",
  },
  {
    img: "coffeemania",
    ad: "Coffeemania",
    comments: "20 comments",
    like: "128 likes",
  },
  {
    img: "salamBaku",
    ad: "Salam Baku",
    comments: "10 comments",
    like: "65 likes",
  },
];

let mainPopJS = document.getElementById("mainPopJS");

let mainPopJ = "";

for (let i = 0; i < popular.length; i++) {
  mainPopJ += `
                    <div id="mainPop">
                        <div>
                            <img id="mainPopImg" src="/img/popular/${popular[i].img}.png"/>
                        </div>
                        <div class="mainPopSec">
                            <div class="mainPopName">${popular[i].ad}</div>
                            <div class="nameAlt">
                                <div class="mainPopComment">${popular[i].comments}</div>
                                <div class="mainPopLikes">${popular[i].like}</div>
                            </div>
                        </div>
                    </div>
                `;
}

mainPopJS.innerHTML = mainPopJ;

let catSearch = document.getElementById("catSearch");
let yeni = "";

function showData(arr) {
  let kod = "";
  arr.forEach((item) => {
    kod += `<div class="mainBox">
            <div id="allInfo">   
                <img id="restoranImg" src="${item.img}"/>
                <p id="restoranName">${item.ad}</p>
                <div class="star">
                  <i class="fa-solid fa-star deger"></i>
                  <i class="fa-solid fa-star deger"></i>
                  <i class="fa-solid fa-star deger"></i>
                  <i class="fa-solid fa-star deger"></i>
                  <i class="fa-solid fa-star deger"></i>
                </div>
                <div class="restoranInfo">
                    <div class="plus">
                        <img src="/img/mob.png" />
                    </div>
                    <div>
                        <span class="text">${item.phone}</span>
                    </div>
                </div>
                <div class="restoranInfo" >
                    <div>
                        <img src="/img/loc.png" />
                    </div>
                    <div>
                        <span class="text">${item.address}</span>
                    </div>
                </div>
                <div class="restoranInfo">
                    <div>
                        <img src="/img/clock.png" />
                    </div>
                    <div>
                        <span class="text">${item.workTime}</span>
                    </div>
                </div>
                <div class="restoranInfoLast">
                    <div class="restoranInfo" id='addtofav'>
                        <div>
                        <i class="fa-solid fa-heart begen"></i>
                        </div>
                        <div>
                            <span class="text">Add to favorite</span>
                        </div>
                    </div>
                    <div class="restoranInfo">
                        <div>
                            <img src="/img/comment.png" />
                        </div>
                        <div>
                            <span class="text">${item.comment}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  });
  sec2.innerHTML = kod;
  starInitialize();
  
}

function second() {
  code = "";
  sec2.innerHTML = "";
  sec2.style.display = "flex";
  sec2.style.alignItems = "initial";
  sec2.style.paddingLeft = "30px";

  let tip = Array.from(
    document.querySelectorAll("input[type='checkbox']:checked")
  ).map((item) => item.value);
  console.log(tip);

  if (tip.length / 3 == 0 && screen.width < "994px") {
    sec2.style.justifyContent = "start";
  } else if (tip.length / 3 == 0 && screen.width >= "994px") {
    sec2.style.justifyContent = "start";
  } else if (tip.length / 3 !== 0 && screen.width > "994px") {
    sec2.classList.add("sec2Jus");
  } else if (
    tip.length / 3 !== 0 ||
    tip.length / 3 == 0 ||
    sec2.width < "734px"
  ) {
    sec2.classList.remove("sec2Jus");
    sec2.classList.add("sec2JusSp");
  } else sec2.classList.add("sec2Jus");

  if (tip.length) {
    selectTip = obj
      .filter(
        (item) =>
          tip.includes(item.tip) ||
          tip.includes(item.yer) ||
          tip.includes(item.spatialImage)
      )
      .filter((item) =>
        item.ad.toLowerCase().includes(catSearch.value.trim().toLowerCase())
      );
  } else {
    selectTip = obj.filter((item) =>
      item.ad.toLowerCase().includes(catSearch.value.trim().toLowerCase())
    );
  }

  showData(selectTip);
  sec2.style.height = "100%";
  addFav()
}

let iconRot = document.querySelector(".fa-sort-up");
let panel = document.querySelector(".panel")


jQuery(document).ready(function () {
  jQuery(".flip").click(function () {
    jQuery(".panel").slideToggle("slow");
    iconRot.classList.toggle("rotateIcons");
  });
});

let mainBox = document.querySelectorAll(".mainBox");

function downUp() {
  jQuery(document).ready(function () {
    jQuery(".mainBox").hover(function () {
      jQuery(".panel").slideUp("slow");
      iconRot.classList.remove("rotateIcons");
    });
  });
}
downUp();
function starInitialize() {
  let faheart = Array.from(document.querySelectorAll(".star"));

  faheart.forEach((item) => {
    let hearts = item.querySelectorAll("i");
    hearts.forEach((heart, i) => {
      heart.onclick = function () {
        for (let j = 0; j < hearts.length; j++) {
          hearts[j].classList.remove("redColor");
        }
        for (let j = 0; j <= i; j++) {
          hearts[j].classList.add("redColor");
        }
      };
    });
  });
}
starInitialize();

function addFav() {
  let begen = document.querySelectorAll(".begen");

  for (let i = 0; i < begen.length; i++) {
    begen[i].onclick = () => {
      if (begen[i].classList.toggle("begenBg")) {
        begen[i].style.color = "#e32400";
      } else begen[i].style.color = "#4a424231";
    };
  }
}
addFav();
