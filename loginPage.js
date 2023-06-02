function send(){
   let email =document.getElementById("emailinputes").value;
   let password =document.getElementById("passwordinputs").value;
   if(email == "" || password == ""){
    document.getElementById("error").innerHTML="Enter the details";
    document.getElementById("error").style.color="red";
}else if(email=="wantedatom7@gmail.com"&& password=="hesoyam"){
    window.location.replace("./premium.html");
}
else if(email =="bharath@gmail.com"&&password=="bharath"){
    window.location.replace("/mainPage.html");
}
else if(email=="dheeraj@gmail.com"&&password=="dheeraj"){
    document.getElementById("error").style.color="red";
    document.getElementById("error").innerHTML="Account does not exist..Sign up";
    document.getElementById("emailinputes").style.backgroundColor = "#FFCCCB";
    document.getElementById("passwordinputs").style.backgroundColor="#FFCCCB";
    document.getElementById("emailinputes").style.borderColor = "red";
    document.getElementById("passwordinputs").style.borderColor="red";
}
else{
    document.getElementById("error").style.color="red";
    document.getElementById("error").innerHTML="Wrong password or Email. Try again";
    document.getElementById("emailinputes").style.backgroundColor = "#FFCCCB";
    document.getElementById("passwordinputs").style.backgroundColor="#FFCCCB";
    document.getElementById("emailinputes").style.borderColor = "red";
    document.getElementById("passwordinputs").style.borderColor="red";
}
}
let a =document.getElementById("passwordinputs");
let b =document.getElementById("emailinputes");
a.addEventListener("click", () =>{
    document.getElementById("error").style.color="transparent";
    document.getElementById("emailinputes").style.backgroundColor = "white";
    document.getElementById("passwordinputs").style.backgroundColor="white";
    document.getElementById("emailinputes").style.borderColor = "white";
    document.getElementById("passwordinputs").style.borderColor="white";
} )
b.addEventListener("click", () =>{
    document.getElementById("error").style.color="transparent";
    document.getElementById("emailinputes").style.backgroundColor = "white";
    document.getElementById("passwordinputs").style.backgroundColor="white";
    document.getElementById("emailinputes").style.borderColor = "white";
    document.getElementById("passwordinputs").style.borderColor="white";
}
)
function visibal() {
    var x = document.getElementById("passwordinputs");
    if (x.type === "text") {
        x.type = "password";
    } else {
        x.type = "text";
    }
}
function loginpage(){
    window.location.replace("./loginPage.html");
}



 let A=[1,2,3,4,5,6,7,8,9];
let B=[];
 for(i=A.length-1;i<0;i++){
  console.log(B[i]=A[i])
 }

