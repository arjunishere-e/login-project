


var email_input=document.getElementById('email-input');
var password_input =document.getElementById('password-input');
document.getElementById('loginform').addEventListener("submit",function(e){
  e.preventDefault();
 
if (email_input.value == 'arjun@gmail.com' && password_input.value == 'arjun123') {
  alert('Admin Login Successful');
  window.location.href='loginpage.html';
  console.log('Email: ' + email_input.value + ' Password: ' + password_input.value);
}
 
    else if(email_input.value==''&&password_input.value==null){
      alert(' login is not possible !! try signin');
      window.location.href='signed.html'
    }

  
});