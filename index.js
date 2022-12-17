let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('pwd');
let button = document.getElementById('btn');
let messageDiv1 = document.getElementById('message1');
let messageDiv2 = document.getElementById('message2');
let messageDiv3 = document.getElementById('message3');
passwordInput.addEventListener('keypress', validate);

messageDiv1.innerText = "Make sure email is more than 3 characters and has @ and a .";
messageDiv1.style.color = "red";

messageDiv2.innerText = "Make sure password is more than 8 characters."
messageDiv2.style.color = "red";

function validate(){
    let email = emailInput.value;
    let password = passwordInput.value;

    if(email != "" && email.includes("@") && email.includes(".")){
        messageDiv1.innerText = "";
        if(password != "" && password.length >= 8){
            messageDiv1.innerText="";
            messageDiv2.innerText = ""
            messageDiv3.innerText = "All good to go!";
            messageDiv3.style.color = "green";
            button.removeAttribute("disabled");
            button.onclick = function(){
                if(confirm("Confirm login") == true){
                    alert("successful signup!");
                }
                else{
                    emailInput.value="";
                    passwordInput.value="";
                }
            }
        }
    }
    else{
        messageDiv1.innerText = "Make sure email is more than 3 characters and has @ and a .";
        messageDiv1.style.color = "red";

        messageDiv2.innerText = "Make sure password is more than 8 characters."
        messageDiv2.style.color = "red";
    }
}
