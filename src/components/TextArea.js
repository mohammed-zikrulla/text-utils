import React, { useState } from "react";

function TextArea() {
  const [text, setText] = useState("");
  const [Case, setCase] = useState("Uppercase");

  const handleClick = () => {
    if (Case === "Uppercase") {
      setCase("Lowercase");
      setText(text.toUpperCase());
    } else {
      setCase("Uppercase");
      setText(text.toLowerCase());
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  function handleCopyTextFromArea() {
    const area = document.querySelector("#textAreaExample");
    area.select();
    document.execCommand("copy");
  }

  return (
    <div className="mx-auto w-75 my-2">
      <h1 className="">Enter the Text Below:</h1>
      <textarea
        className="form-control"
        id="textAreaExample"
        rows="6"
        placeholder="Write here..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <button
        type="button"
        id="1"
        className="btn btn-primary my-2"
        onClick={handleClick}
      >
        {Case}
      </button>
      <button
        type="button"
        id="2"
        className="btn btn-primary my-2 mx-3"
        onClick={handleCopyTextFromArea}
      >
        Copy
      </button>
      <div>
        Word count : {text === "" ? 0 : text.split(" ").length}
        <br />
        Characters = {text.length}
      </div>
      <h2>your text here:</h2>
      <textarea
        className="form-control mx-auto w-75 my-2"
        id="textAreaExample"
        rows="2"
        placeholder="Output"
        value={text}
      ></textarea>
    </div>
  );
}

export default TextArea;
