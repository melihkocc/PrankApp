const button = document.querySelector("#button")
const joke = document.getElementById("joke")

const options = {
    method: "GET",
    headers:{
        'X-Api-Key':"aHrD/afbju8GdGuZ47cP0g==a9ZJJRsP0LbbTqGG"
    }
}
async function updateJoke(){


    try {
        joke.textContent="Updating..."
        button.textContent="Loading..."
        button.disabled = true
    
        const data = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1",options).then(res=>res.json())
        console.log(data[0].joke)
    
        joke.textContent = data[0].joke
        button.textContent="Tell me a joke"
        button.disabled=false
    } catch (error) {
        alert("Hata!!!")
        button.textContent="Tell me a joke"
        button.disabled=false
        joke.textContent="Here is a joke"
    }


}

button.addEventListener("click",updateJoke)