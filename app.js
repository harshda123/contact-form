

function validateForm() {
    var user = document.getElementById('user').value;
    var mobilenumber = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gdr').value;
    var address = document.getElementById('address').value;
    var sym = document.getElementById('country').value;
    var zip = document.getElementById('zip').value;






    if (user == "") {
        document.getElementById('username').innerHTML = "please enter the name";
        return false;
    }
    if (mobilenumber == "") {
        document.getElementById('contactno').innerHTML = "please enter the mobile number";
        return false;
    }
    if (email == "") {
        document.getElementById('mailid').innerHTML = "please enter the Email";
        return false;
    }
    if (gender == "") {
        document.getElementById('gdr').innerHTML = "please select the gender";
        return false;
    }
    if (address == "") {
        document.getElementById('addressd').innerHTML = "please enter the address";
        return false;
    }

    if (zip == "") {
        document.getElementById('zipc').innerHTML = "please enter the zip code";
        return false;
    }
    if (symtops == "") {
        document.getElementById('sypt').innerHTML = "please choose the symptops";
        return false;
    }

   
}