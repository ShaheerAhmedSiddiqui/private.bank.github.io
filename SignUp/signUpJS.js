

function SignUp(event) {
    var user = document.getElementById("user").value;
    var user_email = document.getElementById("email").value;
    var user_pass = document.getElementById("password").value;
    // console.log(user_email);
    // console.log(user_pass);
    var encrypted = window.btoa(user_pass)
    console.log(encrypted)
    

    if (user_email !== null &&  user_pass !== null) {

        var myArray = {userName:user, email:user_email, password: encrypted};
        var getUsers = localStorage.getItem('users');
       
        if((getUsers === null) || (getUsers === "undefined")){
            var record = JSON.stringify([myArray]);
            localStorage.setItem('users', record)
        }
        else{
            let users = JSON.parse(getUsers);
            console.log(users);
            users.push(myArray);
            localStorage.setItem('users', JSON.stringify(users));
        }

    } else {
        alert("Please Fill This Information");
    }
    
   if (user!== "" && user_email!== "" && user_pass!== "") {
        window.open("https://shaheerahmedsiddiqui.github.io/private.bank.github.io/index.html", "_self")
        // var balance =  document.getElementById("logName").innerHTML = element.user; 
   } else {
        alert("please fill information to sign Up")
   }

    $('#mytable').append('<tr> <td  class="data">' + user + '</td> <td  class="data">' +  user_email + '</td> <td  class="data">' + user_pass + '</td> </tr>');
    var signup = document. getElementById("signUp-record");
    signup.style.display = "block";


   var user = document.getElementById("user").value = "";
    var user_email = document.getElementById("email").value = "";
    var user_pass = document.getElementById("password").value ="";
}

function showPass(){
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  
  }