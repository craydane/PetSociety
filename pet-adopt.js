const pets = [
    // Cats
    {
        name: "Victoria",
        age: "3 years",
        breed: "Siamese Cat",
        type: "Cat",
        image: "./images/cats/Victoria-cat.jpg"
    },
    {
        name: "Beluga",
        age: "3 years",
        breed: "Stray Cat",
        type: "Cat",
        image: "./images/cats/beluga.jpg"
    },
    {
        name: "Sawyer",
        age: "2 years",
        breed: "Persian Cat",
        type: "Cat",
        image: "./images/cats/Sawyer.jpg"
    },
    {
        name: "Rusty",
        age: "2 years",
        breed: "Stray Cat",
        type: "Cat",
        image: "./images/cats/Stray-cat-1.jpg"
    },
    {
        name: "Zephyr",
        age: "1 year",
        breed: "Stray Cat",
        type: "Cat",
        image: "./images/cats/Stray-cat-2.jpg"
    },
    {
        name: "Shadow",
        age: "1 year",
        breed: "Stray Cat",
        type: "Cat",
        image: "./images/cats/Stray-cat-3.jpg"
    },
    // Dogs
    {
        name: "Mentos",
        age: "3 years",
        breed: "German Shepherd",
        type: "Dog",
        image: "./images/dogs/German-shepherd-1.jpg"
    },
    {
        name: "Paldogs",
        age: "2 years",
        breed: "Husky",
        type: "Dog",
        image: "./images/dogs/Husky-1.jpg"
    },
    {
        name: "Sembol",
        age: "1 year",
        breed: "Askal",
        type: "Dog",
        image: "./images/dogs/askal-3.jpg"
    },
    {
        name: "Kidlat",
        age: "1 year",
        breed: "Husky",
        type: "Dog",
        image: "./images/dogs/Husky-2.jpg"
    },
    {
        name: "Derek Ramsey",
        age: "1 year",
        breed: "Askal",
        type: "Dog",
        image: "./images/dogs/derek-ramsey.jpg"
    },
    {
        name: "Kuto Pascual",
        age: "1 year",
        breed: "Askal",
        type: "Dog",
        image: "./images/dogs/piolo-pascual.jpg"
    }

];
function displayPets(petType, breed, age) {
    const petGrid = document.querySelector('.pets-flex');
    petGrid.innerHTML = ''; // Clear existing content

    const filteredPets = pets.filter(pet => {
        return (
            (petType ? pet.type === petType : true) &&
            (breed ? pet.breed === breed : true) &&
            (age ? pet.age === age : true)
        );
    });

    filteredPets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');

        petCard.innerHTML = `
            <div class="adoptable-container" onclick="adoptPet('${pet.name}')">
                <img src="${pet.image}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <button>Adopt</button>
            </div>
        `;

        petGrid.appendChild(petCard);
    });
}


// Initial display all pets
displayPets();

// Event listeners for filtering by pet type, breed, and age
document.getElementById('cat-filter').addEventListener('click', () => {
    const breed = document.getElementById('breed-filter').value;
    const age = document.getElementById('age-filter').value;
    displayPets('Cat', breed, age);
});

document.getElementById('dog-filter').addEventListener('click', () => {
    const breed = document.getElementById('breed-filter').value;
    const age = document.getElementById('age-filter').value;
    displayPets('Dog', breed, age);
});

document.getElementById('all-filter').addEventListener('click', () => {
    const breed = document.getElementById('breed-filter').value;
    const age = document.getElementById('age-filter').value;
    displayPets(null, breed, age);
});

// Event listener for breed filter
document.getElementById('breed-filter').addEventListener('change', () => {
    const petType = document.querySelector('button.active')?.id.replace('-filter', '') || null;
    const breed = document.getElementById('breed-filter').value;
    const age = document.getElementById('age-filter').value;
    displayPets(petType, breed, age);
});

// Event listener for age filter
document.getElementById('age-filter').addEventListener('change', () => {
    const petType = document.querySelector('button.active')?.id.replace('-filter', '') || null;
    const breed = document.getElementById('breed-filter').value;
    const age = document.getElementById('age-filter').value;
    displayPets(petType, breed, age);
});

function adoptPet(petName) {
    window.location.href = "pet-adopt-individual.html?pet=" + encodeURIComponent(petName);
}