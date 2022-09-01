import React, { useState } from "react";

export default function TextForm(props) {
  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const OnChange = (event) => {
    setText(event.target.value);
    setCount(event.target.value.length);
    setCharCount(event.target.value.split(" ").length);
  };

  const [text, setText] = useState(); //To Change text value

  const [count, setCount] = useState(0); //TO count text words

  const [charCount, setCharCount] = useState(0);

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control widthOf"
          id="myBox"
          rows="6"
          value={text}
          onChange={OnChange}
          placeholder={props.placeHolder}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={toUpperCase}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary lower" onClick={toLowerCase}>
        Convert to LowerCase
      </button>
      <h3>Character Count : {count}</h3>
      <h3>Word Count : {charCount}</h3>
    </>
  );
}
