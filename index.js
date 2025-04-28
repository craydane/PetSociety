function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

const blogs = [
    {
        title: "5 Essential Tips for Adopting a Pet",
        image: "images/beluga.png",
        content: `Adopting a pet is a big decision, and it’s important to be prepared. Here are five key tips to ensure a smooth transition:
        
        <ol>
            <li><strong>Assess Your Lifestyle:</strong> Before adopting, consider your schedule, home space, and daily routine. Different pets require different levels of care and attention.</li>
            <li><strong>Choose the Right Pet:</strong> Research different breeds and species to find one that matches your lifestyle. Some pets need more exercise, while others require more grooming.</li>
            <li><strong>Prepare Your Home:</strong> Pet-proof your home by removing hazards and preparing a comfortable space for your new pet.</li>
            <li><strong>Understand the Financial Commitment:</strong> Pets need food, vet visits, grooming, and supplies. Be sure you're financially ready for these responsibilities.</li>
            <li><strong>Be Patient & Give Love:</strong> Adjusting to a new home can be stressful for a pet. Show patience, provide consistent training, and offer love and care.</li>
        </ol>`
    },
    {
        title: "How to Keep Your Pet Healthy & Happy",
        image: "images/cat-crying.png",
        content: `Your pet's well-being is crucial. Here are some ways to keep them healthy and happy:
        
        <ol>
            <li><strong>Provide a Balanced Diet:</strong> Different pets require different nutrients. Consult a vet to determine the best diet for your pet.</li>
            <li><strong>Regular Exercise:</strong> Whether it’s a daily walk, playtime, or interactive toys, keeping your pet active is key to their health.</li>
            <li><strong>Routine Vet Check-ups:</strong> Annual check-ups, vaccinations, and preventative care can help detect and prevent health issues early.</li>
            <li><strong>Grooming and Hygiene:</strong> Regular grooming, including brushing, bathing, and nail trimming, prevents infections and keeps your pet comfortable.</li>
            <li><strong>Mental Stimulation & Love:</strong> Interactive toys, socialization, and training help prevent boredom and behavioral issues.</li>
        </ol>`
    },
    {
        title: "Training Tips for First-Time Pet Owners",
        image: "images/throw-up-cat-me.png",
        content: `Training a pet takes time and patience. Here are a few beginner-friendly tips:

        <ol>
            <li><strong>Start with Basic Commands:</strong> Teach commands like 'sit,' 'stay,' and 'come.' Use treats and positive reinforcement to encourage good behavior.</li>
            <li><strong>Be Consistent:</strong> Set clear rules and routines. Pets learn better when they receive the same instructions and expectations daily.</li>
            <li><strong>Use Positive Reinforcement:</strong> Reward good behavior with treats, praise, or playtime rather than punishing bad behavior.</li>
            <li><strong>Socialize Early:</strong> Introduce your pet to different environments, people, and animals to help them feel comfortable in various situations.</li>
            <li><strong>Be Patient and Enjoy the Process:</strong> Training takes time. Stay patient, be gentle, and enjoy the bonding experience with your pet.</li>
        </ol>`
    }
];

function loadHTML(id, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Error loading HTML: ", error));
}

// Load the nav and footer content on window load
window.onload = function () {
    loadHTML("NavSection", "navigation-bar.html");
    loadHTML("FooterSection", "footer.html");
};


// Array of image data
const galleryItems = [
    {
        src: "./images/pet-rescued.jpg",
        alt: "Pet 1",

    },
    {
        src: "./images/pet-rescued-1.jpg",
        alt: "Pet 2",

    },
    {
        src: "./images/pet-rescued-2.jpg",
        alt: "Pet 3",

    },
    {
        src: "./images/pet-rescued-3.jpg",
        alt: "Pet 4",

    }
];


if (typeof galleryItems !== "undefined" && galleryItems.length > 0) {
    // Populate gallery and initialize slider
    let index = 0;
// Dynamically populate the gallery
const gallerySlide = document.querySelector('.gallery-slide');
galleryItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;

    const caption = document.createElement('p');
    caption.textContent = item.caption;

    div.appendChild(img);
    div.appendChild(caption);
    gallerySlide.appendChild(div);
});

function moveSlide(direction) {
    const slides = document.querySelector('.gallery-slide');
    const totalSlides = document.querySelectorAll('.gallery-item').length;

    index += direction;

    if (index < 0) {
        index = totalSlides - 1;
    }
    if (index >= totalSlides) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 5000);
} else {
    console.warn("galleryItems is not defined or empty.");
}



