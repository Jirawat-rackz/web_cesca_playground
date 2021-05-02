// document.getElementById("formsubmit").addEventListener("submit",ActionLogin);

// function ActionLogin(){
//     x = document.getElementById("username101").value;
//     console.log("username : "+x);
//     window.alert("Welcome "+x+" to CESCa#16 Online Classroom ");
//     window.location="../classroom/classroom.html";
// }

function buttonClicked(){
var uname = document.getElementById("username101").value;
var pass = document.getElementById("password101").value;
    if(uname && pass)
    {
        window.alert("Welcome "+uname+" to CESCa#16 Online Classroom ");
        window.location="../classroom/classroom.html";
    }
}