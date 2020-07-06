var Name = document.getElementById("name");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var message = document.getElementById("message");
var linkButton = document.getElementById("sendMessageButton");
var usermessage = {
  Name: Name.value,
  Email: email.value,
  Tel: tel.value,
  Message: message.value,
};
function handleChange() {
  usermessage.Name = Name.value;
  usermessage.Email = email.value;
  usermessage.Tel = tel.value;
  usermessage.Message = message.value;
}
linkButton.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("working")
  location.href =
    "https://wa.me/2349072475658?text=" + JSON.stringify(usermessage);
});
