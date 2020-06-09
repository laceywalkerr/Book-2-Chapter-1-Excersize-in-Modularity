const flower = getFlower(1)

// Update the DOM
document.querySelector("#currentFlower").innerHTML = `${flower.commonName}`


const tulip = {
    "id": 1,  
    "commonName": "Tulip",
    "species": ["Tylennis oriander"]
}

const rose = {
    "id": 2,  
    "commonName": "Rose",
    "species": ["Rosius Maximus"]
}

saveFlower(tulip)
saveFlower(rose)