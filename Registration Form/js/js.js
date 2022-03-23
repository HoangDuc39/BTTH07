// user id
let useridPattern = /^[A-Za-z]\w{5,12}$/;
let userid = document.getElementById("userid")
let useridError = document.getElementById("useridError")

userid.addEventListener('blur',function(){
    if(useridPattern.test(userid.value)){
        useridError.textContent='Bạn có thể dùng User id này'
        useridError.style.color='green'
    }else{
        useridError.textContent=' User id không hợp lệ'
        useridError.style.color='red'
    }
})
// password
let passwordPattern = /\w{7,12}$/;
let password = document.getElementById("password")
let passwordError = document.getElementById("passwordError")

password.addEventListener('blur',function(){
    if(passwordPattern.test(password.value)){
        passwordError.textContent='Bạn có thể dùng password này'
        passwordError.style.color='green'
    }else{
        passwordError.textContent=' password không hợp lệ'
        passwordError.style.color='red'
    }
})
// name
let namePattern = /[A-Za-z]$/;
let txtName = document.getElementById("name")
let nameError = document.getElementById("nameError")

txtName.addEventListener('blur',function(){
    if(namePattern.test(txtName.value)){
        nameError.textContent='Bạn có thể dùng Name này'
        nameError.style.color='green'
    }else{
        nameError.textContent=' name không hợp lệ'
        nameError.style.color='red'
    }
})
// address
let addressPattern = /\w$/;
let address = document.getElementById("address")
let addressError = document.getElementById("addressError")

address.addEventListener('blur',function(){
    if(addressPattern.test(address.value)){
        addressError.textContent=' Address hợp lệ'
        addressError.style.color='green'
    }else{
        addressError.textContent=' address không hợp lệ'
        addressError.style.color='red'
    }
})
// zipcode
let zipcodePattern = /[0-9]$/;
let zipcode = document.getElementById("zipcode")
let zipcodeError = document.getElementById("zipcodeError")

zipcode.addEventListener('blur',function(){
    if(zipcodePattern.test(zipcode.value)){
        zipcodeError.textContent='Zipcode hợp lệ'
        zipcodeError.style.color='green'
    }else{
        zipcodeError.textContent=' zipcode không hợp lệ'
        zipcodeError.style.color='red'
    }
})
// email
let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let email = document.getElementById("email")
let emailError = document.getElementById("emailError")

email.addEventListener('blur',function(){
    if(emailPattern.test(email.value)){
        emailError.textContent='Bạn có thể dùng email này'
        emailError.style.color='green'
    }else{
        emailError.textContent='Email không hợp lệ'
        emailError.style.color='red'
    }
})
// 
const gender = document.registration;
const language = document.registration;
const country = document.getElementById("country");
function formValidation() {
    // checking country
   if (country.value === "") {
    alert("Please select your country!")
    return false;
  }
  // checking gender
if (gender.gender.value === "") {
    alert("Please select your sex!");
    return false;
  }
  // checking language
  if (language.language.value === "") {
    alert("Please select your language!");
    return false;
  }
   
}


