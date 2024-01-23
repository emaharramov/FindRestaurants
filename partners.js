// Partners Page

let search = document.getElementById("search");
let restaurantsList = document.getElementById("restaurantsList");
let restaurantInfo = document.getElementById("restaurantInfo");

let res = [
  "",
  "Central Baku",
  "Cook Shop",
  "Central Baku",
  "Lido",
  "Central Baku",
  "Paris",
  "Soul Kitchen",
  "Cook Shop",
];

resInfo();

function resInfo() {
  let kod = "";

  for (let i = 1; i < res.length; i++) {
    kod += `
                        <div id="restaurantInfo">
                            <img id="restaurantLogo" src="img/restaurantsLogo/res${i}.png">
                            <p id="restaurantName">${res[i]}</p>
                        </div>
                    `;
  }
  restaurantsList.innerHTML = kod;
}

function findPartners() {
  restaurantsList.innerHTML = "";
  for (let j = 1; j < res.length; j++) {
    let y = res[j].split(" ").join(" ").toLowerCase().split(" ");
    if (
      search.value == res[j] ||
      search.value == res[j].split(" ")[0] ||
      search.value == res[j].split(" ")[1] ||
      search.value == y[0] ||
      search.value == y[1]
    ) {
      restaurantsList.innerHTML = `
                                        <div id="restaurantInfo">
                                            <img id="restaurantLogo" src="img/restaurantsLogo/res${j}.png">
                                            <p id="restaurantName">${res[j]}</p>
                                        </div>
                                            `;
    } else if (search.value == "") resInfo();
  }
}

function toConPage() {
  console.log("salam");
  window.location = `https://wa.me/994500000000?text=Hello, I need your help!`;
  target = "_blank";
}

function moreThan() {
  window.location = "innovation.htm";
  target = "_blank";
}
