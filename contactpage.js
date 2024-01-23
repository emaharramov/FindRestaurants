// Contact Page
let addd = document.querySelector(".addd")
let mailCO = document.querySelector(".mailCO")
let contactPageMap2 = document.querySelector(".contactPageMap")
let faphone = document.querySelector(".fa-phone")
let faenvelope = document.querySelector(".fa-envelope")
let falocationdot = document.querySelector(".fa-location-dot")
let call = document.querySelector(".call")

function add() {

    contactPageMap2.innerHTML = ''
    contactPageMap2.innerHTML = `
                            <div id="mapCon" class="mapCon">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12148.299664000358!2d49.78317685!3d40.429339999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1704545633384!5m2!1saz!2saz" id="map" height="448" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                                `
    call.classList.remove("bg")
    addd.classList.remove("bg")
    mailCO.classList.add("bg")

    faphone.style.color = "#fff"
    faenvelope.style.color = "#fff"
    falocationdot.style.color = "#94572A"
}
add()

function calltome() {
    contactPageMap2.innerHTML = ''

    contactPageMap.classList.add("callto")
    addd.classList.remove("bg")
    mailCO.classList.remove("bg")
    call.classList.add("bg")

    faphone.style.color = "#94572A"
    falocationdot.style.color = "#fff"
    faenvelope.style.color = "#fff"

    let con =  confirm("Do you want call to us")

    if(con) {
        contactPageMap2.innerHTML = `
                                    <div id="callNow">
                                        <p>Call to Us</p>&nbsp;&nbsp;
                                        <button id="buttonCall"><a href="tel:+9942070180">Call Now</a></button>
                                    </div>
                                    `
    }else {
        addd.classList.remove("bg")
        call.classList.remove("bg")
        mailCO.classList.add("bg")
        faphone.style.color = "#fff"
        falocationdot.style.color = "#fff"
        faenvelope.style.color = "#94572A"
        add() 
    }
}

function mail() {
    contactPageMap2.innerHTML = ''

    contactPageMap2.innerHTML = `
                                <div id="mailCon" class="mailCon">
                                    <div id="form">
                                        <p>Your Name</p>
                                        <div id="labelInp">
                                            <i class="fa-regular fa-user"></i>
                                            <input type="text" class="inpSize mbottom" id="nameInp">
                                        </div>
                                        <p>Email</p>
                                        <div id="labelInp">
                                            <i class="fa-regular fa-envelope faenvelope faf"></i>
                                            <input type="email" class="inpSize mbottom" id="emailInp">
                                        </div>
                                        <p>Message</p>
                                        <textarea id="textareaInp" class="inpSize" cols="30" rows="10"></textarea>
                                        <button id="sendBtn">Send message</button>
                                    </div>
                            </div>`

    mailCO.classList.remove("bg")
    call.classList.remove("bg")
    addd.classList.add("bg")


    faphone.style.color = "#fff"
    falocationdot.style.color = "#fff"
    faenvelope.style.color = "#94572A"
}