(function() {
    emailjs.init("f5UaAuPQDS3JYprg-"); 
})();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    
    
    const customAlert = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");
    const closeAlertBtn = document.getElementById("closeAlertBtn");

    function showCustomAlert(message) {
        alertMessage.textContent = message;
        customAlert.style.display = "flex";  
    }
   
    closeAlertBtn.addEventListener("click", function() {
        customAlert.style.display = "none"; 
    });

    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                showCustomAlert("Please fill out all fields.");
                return;  
            }
            
            emailjs.send("service_14lik7b", "template_4ow94ad", {
                from_name: name,
                from_email: email,
                message: message,
            }).then(function(response) {
                showCustomAlert("Message sent successfully!");
                form.reset(); 
            }, function(error) {
                showCustomAlert("Failed to send message.");
                console.error("EmailJS error:", error.text);
            });
        });
    }
});