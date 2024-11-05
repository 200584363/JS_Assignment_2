document.addEventListener('DOMContentLoaded', function() {
    const thumbnailsContainer = document.getElementById('thumbnails');
    const featuredImage = document.querySelector('#gallery figure img');
    const figcaption = document.querySelector('#gallery figure figcaption');
    
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
            caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany'
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

    const updateFeaturedImage = (image, thumbnailElement) => {
        featuredImage.src = image.src;
        featuredImage.alt = image.alt;
        figcaption.textContent = image.caption;
        
        const allThumbnails = document.querySelectorAll('#thumbnails img');
        allThumbnails.forEach(img => img.classList.remove('active'));
        thumbnailElement.classList.add('active');
    };

    imageDetails.forEach((image) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = image.thumbnail;
        img.alt = image.alt;
        img.width = 240;
        img.height = 160;
        img.addEventListener('click', () => updateFeaturedImage(image, img));
        li.appendChild(img);
        thumbnailsContainer.appendChild(li);
    });

    // Initially set the first thumbnail as active
    document.querySelector('#thumbnails img').classList.add('active');
});
