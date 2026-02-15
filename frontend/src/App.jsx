import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import axios from "axios";
import Markdown from "react-markdown";
import Editor from "react-simple-code-editor";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    if (!code.trim()) return;

    try {
      setLoading(true);

      const response = await axios.post(
        "https://ai-codereviewer-jktg.onrender.com/ai/get-review",
        { code }
      );

      setReview(response.data);
    } catch (error) {
      console.error(error);
      setReview("❌ Error fetching review.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="left">
        <div className="editor-header">
          <h3>AI Code Reviewer</h3>
          <span className="hint">Supports all programming languages</span>
        </div>

        <div className="code-wrapper">
          {code === "" && (
            <div className="placeholder">
              // Paste your code here...
            </div>
          )}

          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              Prism.highlight(
                code,
                Prism.languages.javascript,
                "javascript"
              )
            }
            padding={30}
            style={{
              fontSize: 15,
              height: "100%",
              width: "100%",
              backgroundColor: "transparent",
              color: "#e2e8f0",
            }}
          />
        </div>

        <div
          className="review"
          onClick={!loading ? reviewCode : null}
        >
          {loading ? "Reviewing..." : "Review Code"}
        </div>
      </div>

      <div className="right">
        {review ? (
          <Markdown>{review}</Markdown>
        ) : (
          <div className="empty-state">
            💡 AI feedback will appear here.
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
