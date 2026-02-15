const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        role: "system",
        parts: [
          {
            text: `
You are a senior software engineer and expert code reviewer.

Your job:
- Find bugs
- Detect security issues
- Suggest performance improvements
- Recommend cleaner architecture
- Provide improved code examples

Be precise. Be practical. Avoid unnecessary explanations.
`,
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  // console.log("HII"+process.env.GOOGLE_GEMINI_KEY)
  console.log(response.text);
  return response.text;
}

module.exports = generateContent;
