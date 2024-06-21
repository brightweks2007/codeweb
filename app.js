function myfunction() {
  const name = document.getElementById("message").value
  const email = document.getElementById("message").value
  const password = document.getElementById("message").value

  document.getElementById("message").innerHTML = "welcome" + name;
  document.getElementById("message").innerHTML = "welcome" + email;
  document.getElementById("message").innerHTML = "welcome" + password;

  let userinput = document.querySelector("#userinput");
  let message = document.querySelector("#message");

  let userdetails = document.querySelector("#userdetails");
  let details = document.querySelector("#details");

  let usermemo = document.querySelector("#usermemo");
  let memo = document.querySelector("#memo");

  message.innerHTML = "welcome to my webpage " + userinput.value;
  details.innerHTML = "welcome to my webpage " + userdetails.value;
  memo.innerHTML = "welcome to my webpage " + usermemo.value;
}