window.addEventListener("load", function(){
    let counter = document.getElementById("counter");

    counter.addEventListener("click", async function(){
        await fetch('/api/click',{method: 'POST'})
    })
})

async function display(){
    let counter = document.getElementById("counter")
    let data = await fetch('/api/click').then(response => response.json()).then(data => {
        counter.innerText = data.clickCount
    })
}

setInterval(display, 10) 