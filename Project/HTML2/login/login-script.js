document.getElementById("formsubmit").addEventListener("submit",ActionLogin);

function ActionLogin(){
    x = document.getElementById("username101").value;
    console.log("username : "+x);
    window.alert("Welcome "+x+" to CESCa#16 Online Classroom ");
    window.open('../classroom/classroom.html');
}