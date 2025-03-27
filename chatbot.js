const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "healthapp-53dca",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");
    const chatBox = document.getElementById("chatBox");

    sendBtn.addEventListener("click", async function () {
        const userMessage = chatInput.value;
        if (!userMessage) return;

        // Show user message
        chatBox.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;

        try {
            const response = await fetch("http://127.0.0.1:5001/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            chatBox.innerHTML += `<div><strong>Chatbot:</strong> ${data.response}</div>`;
        } catch (error) {
            console.error("Error fetching chatbot response:", error);
        }

        chatInput.value = ""; // Clear input field
    });
});
