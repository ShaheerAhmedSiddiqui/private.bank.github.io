function logIn() {
var user_email = document.getElementById("email").value;
var user_pass = document.getElementById("password").value;

var getUsers = localStorage.getItem('users');
let users = JSON.parse(getUsers);

var encrypted = window.btoa(user_pass);

var currentUser = users.find(element => ((element.email == user_email) && element.password == encrypted));

console.log(currentUser);

if ((user_email !== '') && (user_pass !== '')) {


  // return;

  if(currentUser !== undefined){
    console.log("you have successfully login");
    console.log(currentUser);
    window.open("https://shaheerahmedsiddiqui.github.io/private.bank.github.io/", "_self")
    
    var  check = localStorage.getItem("key1");
    console.log(check);
    var text = "LogOut";
    check = text;
    var  check = text;
    console.log(check)
  }
  else{
    alert("your email and password is incorrect");
  }
      
  // users.forEach((element, index) => {
  //     if((element.email !== "") && (element.email)){
  //       var decryptPassword = window.atob( String( element.password ));
  //       if((user_email == element.email) && (user_pass == decryptPassword)){
  //         console.log("you have successfully login");
  //       }
  //     }
  // });
  
  users.fin
  
  // localStorage.setItem("userEmail", user_email);
  // localStorage.setItem("userPassword", user_pass);
  
  // var getUsers = localStorage.getItem('users');
  //   console.log(getUsers)
    
  //   var getEmail =  JSON.parse(localStorage.getItem(users[1]));
  //   console.log(getEmail);
  
  // if ( user_email!== "" && user_pass!== "") {
    
  //     // var get = JSON.parse(localStorage.getItem(user_email));
  //     //             JSON.parse(localStorage.getItem(user_pass));
  //     //             console.log(record);
  //                 // JSON.parse(localStorage.getItem(user));
  
  
  //     if (getUsers != null) {
  //        if( user_email == users.email && user_pass == users.password){
          
  //         //  window.open("file:///E:/Shaheer's_Program/Javascript/My-bank/bank.html", "_self")
  //          console.log(users);
  //        }
  //        else{
  //         alert("please  give correct information")
  //        }
  //     } 
  // } else {
  //     alert("please fill information to sign Up")
  // }
  
  
  
} else {
  alert("PLEASE FILL THIS")
}
}
function showPass(){
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

}