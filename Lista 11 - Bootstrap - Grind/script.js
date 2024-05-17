const images = [
    'imagem-grande.jpg',
    'produto-1-imagem-pequena.jpg',
    'produto-2-imagem-pequena.jpg'
];

const promises = images.map(image => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = () => reject(new Error(`Failed to load image: ${image}`));
    });
});

Promise.all(promises)
    .then(results => {
        console.log('All images loaded:', results);
    })
    .catch(error => {
        console.error('One or more images failed to load:', error);
    });
