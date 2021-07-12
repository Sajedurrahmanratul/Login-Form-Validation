const form = document.querySelector("form"),
    emailField = form.querySelector(".email"),
    emailInpt = emailField.querySelector("input"),
    passField = form.querySelector(".password"),
    passInput = passField.querySelector("input");


form.onsubmit = (e) => {
    e.preventDefault();
    //if email field is empty
    if (emailInpt.value == "") {
        emailField.classList.add("shake", "error");
    }

    if (passInput.value == "") {
        passField.classList.add("shake", "error");
    }


    setTimeout(() => {
        emailField.classList.remove("shake", "error");
        passField.classList.remove("shake", "error");
    }, 500)

    //lets validate email 

}
