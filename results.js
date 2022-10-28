const placeForResults = document.querySelectorAll("contactResults")
let fname = document.getElementById("fname");
let address = document.getElementById("address");
let email = document.getElementById("email");
let phone = document.getElementById("phone");;
let message = document.getElementById("message");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        fname: fname.value,
        address: address.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }
    console.log(formData)
})