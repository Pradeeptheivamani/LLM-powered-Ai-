function getAIResponse() {
    let question = document.getElementById("userInput").value;

    if (question === "") {
        alert("Please enter a question");
        return;
    }

    // Demo response (replace with real LLM API later)
    let demoResponse = "This is a sample AI response generated using an LLM.";

    document.getElementById("aiResponse").innerText = demoResponse;
}
