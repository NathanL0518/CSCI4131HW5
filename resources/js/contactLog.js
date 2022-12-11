window.addEventListener("load", function(){
    let button = document.getElementById("filter");

    button.addEventListener("click", function () {
        let filter = "";
        if(document.getElementById("all").checked){
            filter = "all";
        }
        else if(document.getElementById("question").checked){
            filter = "question";
        }
        else if(document.getElementById("comment").checked){
            filter = "comment";
        }
        else if(document.getElementById("concern").checked){
            filter = "concern";
        }
        let url = "/contactLog?filter=" + filter;
        console.log(url)
        fetch(url)
    })
})