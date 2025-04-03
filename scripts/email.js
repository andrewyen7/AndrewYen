// app.js
emailjs.init('zeK6jvddhNFDYsG2f'); // Replace with your EmailJS user ID

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    try {
        await emailjs.send('service_4xnda4r', 'template_c8uamlh', templateParams);
        console.log('Email sent successfully!');
        // You can show a success message to the user here
    } catch (error) {
        console.error('Error sending email:', error);
        // Handle the error (e.g., show an error message to the user)
    }
});
