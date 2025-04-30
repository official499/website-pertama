document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Klik Saya!';
    document.body.appendChild(button);
    
    button.addEventListener('click', function() {
        alert('Tombol telah diklik!');
    });
});