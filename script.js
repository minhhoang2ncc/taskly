const form = document.getElementById('popupForm');
const name = form.elements['name'];
const email = form.elements['email'];
const message = form.elements['message'];
const dialogTitle = document.querySelector('#inputDialog div h1');
const dialog = document.getElementById('inputDialog');
const submitButton = form.querySelector('button[type="submit"]');
const closeButton = document.querySelector('.dialog-close');

const responseMessage = document.getElementById('responseMessage');
const errorMessage = document.getElementById('errorMessage');

const link = "https://5f3e7a7d13a9640016a68c24.mockapi.io/api/key2";

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitButton.disabled = true;
    
    const payload = {
        name: name.value,
        email: email.value,
        inquiry: message.value
    };

    console.log("Form submitted:", payload);

    fetch(link, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        
        responseMessage.style.display = 'block';
        errorMessage.style.display = 'none'; 
    })
    .catch(error => {
        console.error("Error:", error);
        
        errorMessage.style.display = 'block';
        responseMessage.style.display = 'none';
    })
    .finally(() => {
        form.style.display = 'none';
        dialogTitle.style.display = 'none';
        closeButton.style.display = 'none';
        submitButton.disabled = false;

        setTimeout(() => {
            dialog.close();
            form.style.display = 'block';
            dialogTitle.style.display = 'block';
            closeButton.style.display = 'block';
            responseMessage.style.display = 'none';
            errorMessage.style.display = 'none'; 
            form.reset();
        }, 750);
    });
});
