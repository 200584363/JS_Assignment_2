// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the thumbnails container and the featured image elements
    const thumbnailsContainer = document.getElementById('thumbnails');
    const featuredImage = document.querySelector('#gallery figure img');
    const figcaption = document.querySelector('#gallery figure figcaption');
    
    // Array containing details of images (src, thumbnail, alt text, and caption)
    const imageDetails = [
        {
            src: 'images/flowers-yellow-large.jpg',
            thumbnail: 'images/flowers-yellow-small.jpg',
            alt: 'Sunflowers',
            caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany'
        },
        {
            src: 'images/flowers-white-large.jpg',
            thumbnail: 'images/flowers-white-small.jpg',
            alt: 'Poppies',
            caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany'
        },
        {
            src: 'images/flowers-red-large.jpg',
            thumbnail: 'images/flowers-red-small.jpg',
            alt: 'Daffodils',
            caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westphalia, Germany'
        },
        {
            src: 'images/flowers-purple-large.jpg',
            thumbnail: 'images/flowers-purple-small.jpg',
            alt: 'Sentmaring Park',
            caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany'
        },
        {
            src: 'images/flowers-pink-large.jpg',
            thumbnail: 'images/flowers-pink-small.jpg',
            alt: 'Market',
            caption: 'Market in Münster, North Rhine-Westphalia, Germany'
        }
    ];

    // Function to update the featured image and caption when a thumbnail is clicked
    const updateFeaturedImage = (image, thumbnailElement) => {
        // Update the src, alt attributes, and caption of the featured image
        featuredImage.src = image.src;
        featuredImage.alt = image.alt;
        figcaption.textContent = image.caption;
        
        // Remove 'active' class from all thumbnails and add it to the clicked one
        const allThumbnails = document.querySelectorAll('#thumbnails img');
        allThumbnails.forEach(img => img.classList.remove('active'));
        thumbnailElement.classList.add('active');
    };

    // Loop through each image in the imageDetails array to create thumbnails
    imageDetails.forEach((image) => {
        const li = document.createElement('li'); // Create a new list item for each thumbnail
        const img = document.createElement('img'); // Create a new image element
        img.src = image.thumbnail; // Set the thumbnail source
        img.alt = image.alt; // Set the alt text
        img.width = 240; // Set the width of the thumbnail
        img.height = 160; // Set the height of the thumbnail
        // Add click event listener to update the featured image on click
        img.addEventListener('click', () => updateFeaturedImage(image, img));
        li.appendChild(img); // Append the image to the list item
        thumbnailsContainer.appendChild(li); // Append the list item to the thumbnails container
    });

    // Initially set the first thumbnail as active
    document.querySelector('#thumbnails img').classList.add('active');
});
