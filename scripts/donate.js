// In your JavaScript file (e.g., app.js)
const donationForm = document.getElementById('donation-form');

donationForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Process the donation (you can send data to a server or handle it locally)
    console.log(`Thank you, ${name}! You donated $${amount}.`);

    // Clear the form or show a thank-you message
    donationForm.reset();
});
