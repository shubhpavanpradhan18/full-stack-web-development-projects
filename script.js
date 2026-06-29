const register = () => {

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let track = document.getElementById("track").value;
    let reason = document.getElementById("reason").value;
    let resume = document.getElementById("resume").files[0];

    if(name==""){
        alert("Please enter your name.");
        return;
    }

    if(password.length < 8){
        alert("Password must contain at least 8 characters.");
        return;
    }

    if(phone.length != 10){
        alert("Phone number should contain exactly 10 digits.");
        return;
    }

    if(track==""){
        alert("Please select a hackathon track.");
        return;
    }

    if(resume == undefined){
        alert("Please upload your resume.");
        return;
    }

    let gender = document.querySelector('input[name="gender"]:checked');

    if(gender == null){
        alert("Please select your gender.");
        return;
    }

    let skills = [];

    document.querySelectorAll('input[name="skill"]:checked').forEach(skill => {

        skills.push(skill.value);

    });

    document.getElementById("cardName").textContent = name;
    document.getElementById("cardEmail").textContent = email;
    document.getElementById("cardPhone").textContent = phone;
    document.getElementById("cardDob").textContent = dob;
    document.getElementById("cardGender").textContent = gender.value;
    document.getElementById("cardTrack").textContent = track;
    document.getElementById("cardSkills").textContent = skills.join(", ");
    document.getElementById("cardReason").textContent = reason;
    document.getElementById("cardResume").textContent = resume.name;

    document.getElementById("outputCard").style.display = "block";

}

document.getElementById("registerBtn").addEventListener("click", register);