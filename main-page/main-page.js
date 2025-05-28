let currentUser=JSON.parse(localStorage.getItem("currentUser"))||[];
let user=JSON.parse(localStorage.getItem("user"))||[];
let userName=document.getElementById("name");
let logOutBtn=document.getElementById("logoutbtn")
const notyf = new Notyf({
    duration: 1000,
    position: { x: 'right', y: 'top' }
});
let currentperson = user.find(item => item.id==currentUser.userId);
userName.innerHTML=currentperson.username;

if(currentUser==""){
    setTimeout(() => {
        location="../authentication/login.html"
    }, 1000);
}

let deletePerson=()=>{
    let currentperson = user.find(item => item.id==currentUser.userId);
    let indexUser=user.findIndex(item => item.id==currentperson.id);  
   
   if(indexUser != -1){
    user.splice(indexUser, 1);
    localStorage.setItem("user", JSON.stringify(user));
    location="../authentication/login.html"
    }else{
        notyf.error("user not found");
    }
    
}
logOutBtn.addEventListener("click",deletePerson)


  


