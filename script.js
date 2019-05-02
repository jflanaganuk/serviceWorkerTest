const image = document.querySelector('.container img');

image.addEventListener('click', function(e){
    alert('Clicked');
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log('Registered! 😎', reg);
        })
        .catch(err => {
            console.error('😢 Registration failed: ', err);
        });
    });
}