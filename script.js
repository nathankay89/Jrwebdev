// Define proficiency levels for each skill (you can adjust these values)
const skillProficiency = {
    'HTML': 3, // Example: High proficiency in HTML (3 mini icons)
    'CSS': 3,  // Example: Moderate proficiency in CSS (2 mini icons)
    'JavaScript': 4,
    'Node.js': 3, 
    'Express.js': 3,
    'React': 3,
    'NoSQL': 3,
    'SQL': 4,
    // Add more skills and proficiency levels here
};

// Function to generate mini icons based on proficiency level
function generateMiniIcons(skillName, proficiency) {
    const skillLevelDiv = document.getElementById(`${skillName.toLowerCase()}-skill-level`);
    const iconClass = getIconClass(skillName); // Get the appropriate icon class
    for (let i = 0; i < proficiency; i++) {
        const miniIcon = document.createElement('i');
        miniIcon.className = iconClass; // Set the icon class
        skillLevelDiv.appendChild(miniIcon);
    }
}

// Function to get the appropriate icon class for each skill
function getIconClass(skillName) {
    // Define icon classes for each skill (modify as needed)
    const iconClasses = {
        'HTML': 'fab fa-html5',          // HTML5 icon class
        'CSS': 'fab fa-css3',            // CSS3 icon class
        'JavaScript': 'fab fa-js',       // JavaScript icon class
        'Node.js': 'fab fa-node-js',     // Node.js icon class
        'Express.js': 'fab fa-node-js',  // Express.js icon class
        'React': 'fab fa-react',         // React icon class
        'NoSQL': 'fas fa-database',      // NoSQL icon class
        'SQL': 'fas fa-database',        // SQL icon class
        // Add icon classes for other skills as needed
    };
    
    return iconClasses[skillName] || ''; // Return the icon class or an empty string if not found
}

// Generate mini icons for each skill
for (const skillName in skillProficiency) {
    generateMiniIcons(skillName, skillProficiency[skillName]);
}


document.getElementById('showPhone').addEventListener('click', function(event) {
    event.preventDefault(); 
    const phone = document.getElementById('phone');
    phone.classList.toggle('hidden');
    this.textContent = phone.classList.contains('hidden') ? 'Show Phone' : 'Hide Phone';
});

document.getElementById('showEmail').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email');
    email.classList.toggle('hidden');
    this.textContent = email.classList.contains('hidden') ? 'Show Email' : 'Hide Email';
});

function addScrollAnimations() {
    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)'; // Start with the sections below, then move up
        section.style.transition = `all 0.5s ease ${0.2 * (index + 1)}s`;
    });

    const animateElements = () => {
        animatedSections.forEach((section) => {
            if (isElementInViewport(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Add scroll animations when the page loads
    animateElements();

    // Attach a throttled scroll event listener for better mobile performance
    let isThrottled = false;
    window.addEventListener('scroll', () => {
        if (!isThrottled) {
            isThrottled = true;
            requestAnimationFrame(() => {
                animateElements();
                isThrottled = false;
            });
        }
    });
}

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add scroll animations when the page loads
document.addEventListener('DOMContentLoaded', addScrollAnimations);
