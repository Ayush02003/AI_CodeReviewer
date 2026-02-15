# 🤖 AI Code Reviewer

AI Code Reviewer is a full-stack web application that analyzes programming code and provides automatic feedback using an AI model.

The user can paste or write source code inside the built-in code editor. When the **Review Code** button is clicked, the frontend sends the code to a backend API. The backend then forwards the code to an AI service, which examines it and generates a structured review. The review may include possible bugs, logical issues, bad coding practices, readability problems, and suggestions for improvement.

The response is returned to the application and displayed in a formatted panel so the developer can easily understand what is wrong and how to improve the code.

This tool is designed to help students and developers quickly check their code without waiting for manual review. It supports any programming language because the AI model interprets the code contextually instead of relying on a fixed compiler.

### Main Capabilities

* Write or paste code directly in the editor
* Send code for analysis with one click
* Receive AI-generated feedback instantly
* Get suggestions for better practices and optimization
* Read structured output in a clean interface

The project demonstrates frontend-backend communication, API integration, and real-time processing of user input using an AI service.
