import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("upperclick was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleloclick = () => {
    // console.log("upperclick was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclearclick = () => {
    // console.log("upperclick was clicked" + text)
    let newText = " ";
    setText(newText);
  };
  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords;

    setText(newText);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    window.alert("Copied");
  };
  const RepateData = () => {
    setText("You have clicked the handle  ");
    let newtext = text.repeat(2);
    setText(newtext);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  let handleExtraSpaces = () => {
    setText(text.replace(/ +(?= )/g, ""));
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleloclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleclearclick}>
          Clear Text
        </button>
        <button className="btn btn-success mx-2" onClick={reversed}>
          Reverse Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-success mx-2" onClick={RepateData}>
          Repeat Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>
          Extra Space
        </button>
        <button className="btn btn-success my-3" onClick={speak}>
          Speak Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Here's the summary of your text</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} time to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
