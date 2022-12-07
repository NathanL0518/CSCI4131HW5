window.addEventListener("load", function () {
  let login = document.getElementById("login")
  let logout = document.getElementById("logout")

  // login.addEventListener("click", function(){
  //     let name = document.getElementById("name");
  //     let password = document.getElementById("password");

  // })

  logout.addEventListener("click", function () {
    console.log("logout clicked")
    fetch("/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "hello",
      }),
    })
  })
})
