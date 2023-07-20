document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackContainer = document.getElementById("feedback-container");
  
    feedbackForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      const feedbackHTML = `
        <div>
          <h3>${name}</h3>
          <p>${message}</p>
        </div>
      `;
  
      feedbackContainer.innerHTML += feedbackHTML;
      feedbackForm.reset();
    });
  });