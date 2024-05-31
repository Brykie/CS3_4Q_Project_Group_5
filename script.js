function input() {
    var firstname = document.getElementById("fName").value;
    var lastname = document.getElementById("lName").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById("Email").value;
    var password = document.getElementById("pword").value;
    var mobile_num = document.getElementById("mobile_num").value;
    var reason = document.getElementById("reason").value;

    var isValid = true;

    if (!firstname) {
        document.getElementById("fNameError").innerText = "required";
        isValid = false;
    } else {
        document.getElementById("fNameError").innerText = "";
    }

    if (!lastname) {
        document.getElementById("lNameError").innerText = "required";
        isValid = false;
    } else {
        document.getElementById("lNameError").innerText = "";
    }

    if (!gender) {
        document.getElementById("genderError").innerText = "required";
        isValid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }

    if (!email) {
        document.getElementById("emailError").innerText = "required";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (!password) {
        document.getElementById("pwordError").innerText = "required";
        isValid = false;
    } else {
        document.getElementById("pwordError").innerText = "";
    }

    if (!reason) {
        document.getElementById("reasonError").innerText = "required";
        isValid = false;
    } else {
        document.getElementById("reasonError").innerText = "";
    }

    if (!isValid) {
        return false;
    }

    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("fname", firstname);
        localStorage.setItem("lname", lastname);
        localStorage.setItem("gender", gender.value);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("mobile_num", mobile_num);
        localStorage.setItem("reason", reason);
    }
    
    return true; 
}

window.onload = function() {
    if (typeof(Storage) !== "undefined") {
        var firstname = localStorage.getItem("fname");
        if (firstname) {
            var navText = document.querySelector('.htext');
            navText.innerHTML = '<a href="profile.html">Welcome Back ' + firstname + '</a>';
            navText.innerHTML += '<img src="media/image.png" alt="Default Image" style="width: 10vh; height: 10vh; border-radius: 50%;">';

            var signupSection = document.getElementById('signup-section');
            if (signupSection) {
                signupSection.style.display = 'none';
            }
        }
    }
}

function profilestats() {
        if (typeof(Storage) !== "undefined") {
            document.getElementById('profile-name').innerText = localStorage.getItem('fname') + ' ' + localStorage.getItem('lname');
            document.getElementById('profile-email').innerText = localStorage.getItem('email');
            document.getElementById('profile-gender').innerText = localStorage.getItem('gender');
            document.getElementById('profile-mobile').innerText = localStorage.getItem('mobile_num') || 'N/A';
            document.getElementById('profile-reason').innerText = localStorage.getItem('reason');
        } 
}


