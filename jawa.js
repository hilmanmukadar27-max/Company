
document.getElementById('contactForm').addEventListener('submit', function(event) {

    event.preventDefault();

  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

   
    alert(`Terima kasih, ${name}! Pesan Anda dari email ${email} telah berhasil kami terima. Tim kami akan segera menghubungi Anda.`);

    
    this.reset();
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});