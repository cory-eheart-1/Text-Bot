let send = document.getElementById("send");
send.addEventListener("click", addUserChat);

let call_and_response = document.getElementById("call_and_response");

function addUserChat() {
    //get user input and clear text field
    const message = document.getElementById("user_input").value;
    document.getElementById("user_input").value = "";

    //create the message box div
    const message_box = document.createElement("div");
    //give it the correct id
    message_box.id = "message_box";
    //add the user input
    message_box.innerHTML = "<p><b>User</b></p><p>" + message + "</p>";
    //append the message box
    call_and_response.appendChild(message_box);

    //create bot response for forgot password
    addBotChat(message);
}

function addBotChat(message) {
    //create the message box div
    const message_box = document.createElement("div");
    //give it the correct id
    message_box.id = "message_box";
    //append bot message
    if ((message.includes("forgot") || message.includes("remember")) && (message.includes("email") || (message.includes("gmail"))) && (message.includes("password") || message.includes("login"))) {
        message_box.innerHTML = "<p><b>IT Services</b></p><p>If you forgot your email password, please perform the following:" + 
                                "<br>1. Navigate to <a href=\"https://boss.ualr.edu\" target=\"_blank\">https://boss.ualr.edu</a> in your web browser" + 
                                "<br>2. Click Secure Login" + 
                                "<br>3. Sign in with your T-Number (including the T) and your 6-digit pin" +
                                "<br>4. Click \"Personal Information\" at the bottom" +
                                "<br>5. Click \"View System Accounts and Change Password\"" +
                                "<br>6. Scroll down, and type your new password twice, and then click submit" +
                                "<br>Note: Your password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number." +
                                "<br>      Please be sure that when you hit submit, you are notified that your request was successfully submitted." +
                                "<br><br>Is there anything else I can assist with?";
    }

    call_and_response.appendChild(message_box);
    call_and_response.scrollTop = call_and_response.scrollHeight;
}