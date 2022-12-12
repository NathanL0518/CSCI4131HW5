window.addEventListener("load", function(){
    let email = document.getElementById("email");
    let username = document.getElementById("username");

    email.addEventListener("input", function(){
        if(username.value == ""){
            let input = email.value;
            let at = input.indexOf("@");
            if(at != -1){
                username.value = input.substring(0, at);
            }
        }
        else{
            if(email.value == ""){
                let input = email.value;
                let at = input.indexOf("@");
                username.value = input.substring(0, at);
            }
        }
    })

    let category = document.querySelectorAll('input[type=radio][name="category"]');
    category.forEach(button => button.addEventListener("change",function(){
        if(category[2].checked){
            let radios = document.getElementById("radios");
            let alert = document.getElementById("alert");
            alert.style.display = "inline-block";
            alert.style.textAlign = "center";
            alert.style.border = '1px solid red';
            alert.innerHTML = "“In order to best address your concern, please make sure to list the specific way in which I have wronged you.";
        }
        else {
            let alert = document.getElementById("alert");
            alert.style.border = 'none';
            alert.innerHTML = "";
        }
    }))
});