window.addEventListener("load", function(){
    let sheperd = document.getElementById("yellow_sheperd");
    let keller1 = document.getElementById("white_keller");
    let keller2 = document.getElementById("yellow_keller");
    let apartment = document.getElementById("yellow_apartment");
    let bruiniks = document.getElementById("white_bruiniks");

    sheperd.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "/images/shepherd.jpg";
        let img = document.getElementById("sheperd");
        img.style.display="block";
    })
    sheperd.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "/images/gopher.jpg";
        let img = document.getElementById("sheperd");
        img.style.display="none";
    })

    keller1.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "/images/keller.jpg";
        let img = document.getElementById("keller1");
        img.style.display="block";
    })
    keller1.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "/images/gopher.jpg";
        let img = document.getElementById("keller1");
        img.style.display="none";
    })

    keller2.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "/images/keller.jpg";
        let img = document.getElementById("keller2");
        img.style.display="block";
    })
    keller2.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "/images/gopher.jpg";
        let img = document.getElementById("keller2");
        img.style.display="none";
    })

    apartment.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "/images/apartment.jpg";
        let img = document.getElementById("apartment");
        img.style.display="block";
    })
    apartment.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "/images/gopher.jpg";
        let img = document.getElementById("apartment");
        img.style.display="none";
    })

    bruiniks.addEventListener("mouseenter", function(){
        let image = document.getElementById("picture");
        image.src = "/images/bruiniks.jpg";
        let img = document.getElementById("bruiniks");
        img.style.display="block";
    })
    bruiniks.addEventListener("mouseleave", function(){
        let image = document.getElementById("picture");
        image.src = "/images/gopher.jpg";
        let img = document.getElementById("bruiniks");
        img.style.display="none";
    })

});

function sortTable(header, idx){
    let table = document.getElementById("contactList");
    let rows = table.rows;
    let list = [];
    let sortBy = [];
    for(let i = 1; i < rows.length; i++){
        sortBy.push(rows[i].getElementsByTagName("TD")[idx].innerHTML);
        list.push(rows[i]);
    }
    sortBy.sort();
    for(let i = 0; i < sortBy.length; i++){
        for(let j = 0; j < list.length; j++){
            if(sortBy[i] == list[j].getElementsByTagName("TD")[idx].innerHTML){
                table.appendChild(list[j]);
                list.splice(j, 1);
                break;
            }
        }
    }
};

// This event listener will sort the contacts table by whichever header/column is clicked
window.addEventListener("load", function(){
    let headers = document.querySelectorAll("th");
    for(let i = 0; i < headers.length; i++){
        headers[i].addEventListener("click", function(){
            sortTable(headers[i].innerHTML.toLowerCase(), i);
        });
    }
});

