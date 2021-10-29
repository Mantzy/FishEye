setTimeout(function() {
    var submitBtn = document.querySelectorAll(".btn-submit");
    submitBtn.forEach((btn) => btn.addEventListener("click", function(e) {
        e.preventDefault();
        validate();
    }));

    const modalbg = document.querySelector(".bground");
    const modalClose = document.querySelectorAll(".close");
    // close modal event
    modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

    //close modal form
    function closeModal() {
        modalbg.style.display = "none";

    }

    function validate() {


        //getting data
        var contactMail = {
            first: document.getElementById('first').value,
            last: document.getElementById('last').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value

        }



        var firstError = true;
        var lastError = true;
        var mailError = true;
        var messageError = true;



        //first name validation
        if (contactMail.first == "") {
            document.getElementById('first').style.borderColor = "red";
            document.getElementById('firstError').innerHTML = "Please enter the first name!"
            firstError = true;
            //alert("nope")
        } else
        if (contactMail.first.length < 2) {
            firstError = true;
            document.getElementById('first').style.borderColor = "red";
            document.getElementById('firstError').innerHTML = "The first name should be more than 2 characters!"
        } else {
            firstError = false;
            document.getElementById('first').style.borderColor = "black";
            document.getElementById('firstError').innerHTML = ""
        }

        //last name validation
        if (contactMail.last == "") {
            lastError = true;
            document.getElementById('last').style.borderColor = "red";
            document.getElementById('lastError').innerHTML = "Please enter the last name!"
        } else if (contactMail.last.length < 2) {
            document.getElementById('last').style.borderColor = "red";
            document.getElementById('lastError').innerHTML = "The last name should be more than 2 characters!"
            lastError = true;
        } else {
            lastError = false;
            document.getElementById('last').style.borderColor = "black";
            document.getElementById('lastError').innerHTML = ""
        }

        //validate email
        if (contactMail.email == "") {
            document.getElementById('email').style.borderColor = "red";
            document.getElementById('mailError').innerHTML = "Please enter your email address!"
            mailError = true;
        } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(contactMail.email) === false) {
            document.getElementById('email').style.borderColor = "red";
            document.getElementById('mailError').innerHTML = "Please enter valid email address!"
            mailError = true;
        } else {
            mailError = false;
            document.getElementById('email').style.borderColor = "black";
            document.getElementById('mailError').innerHTML = ""
        }

        //validate message
        if (contactMail.message == "") {
            document.getElementById('message').style.borderColor = "red";
            document.getElementById('messageError').innerHTML = "Please type your message!"
            messageError = true;
        } else {
            messageError = false;
            document.getElementById('message').style.borderColor = "black";
            document.getElementById('messageError').innerHTML = ""
        }





        if (firstError || lastError || mailError || messageError) {
            return false;
        } else {
            closeModal();
            console.log(contactMail);
            return true;
        }





    }
}, 3000);