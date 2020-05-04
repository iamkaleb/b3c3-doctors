//Exercise 1

const createDoctor = (name, specialty, address) => {
    return {
        doc_name: name,
        doc_specialty: specialty,
        doc_address: address
    }
}

// Exercise 2

const createPet = function (name, breed) {
    return {
        pet_name: name,
        pet_breed: breed
    }
}

const bowWowKennels = []

const fido = createPet("fido", "mutt")
const ginger = createPet("ginger", "meerkat")
const gargapolous = createPet("gargapolous", "panda")

bowWowKennels.push(fido)
bowWowKennels.push(ginger)
bowWowKennels.push(gargapolous)

console.log(bowWowKennels)