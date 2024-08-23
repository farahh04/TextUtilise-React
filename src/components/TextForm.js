import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [replacementText, setReplacementText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  // const [punctuationCount, setPunctuationCount] = useState({});

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }

  const handleReplaceClick = () => {
    const selectedText = getSelectedText();
    if (selectedText && replacementText) {
      let updatedText = text.replace(new RegExp(selectedText, 'g'), replacementText);
      setText(updatedText);
    } else {
      alert('Please select text and enter replacement text.');
    }
    props.showAlert("Selected Text is Replaced", "success");
  }

  const getSelectedText = () => {
    const selection = window.getSelection();
    return selection.toString();
  }

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleReplacementTextChange = (event) => {
    setReplacementText(event.target.value);
    props.showAlert("Please Select the Text to Replace", "success");
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const findAndHighlightText = () => {
    if (!searchTerm) return 0;

    const regex = new RegExp(searchTerm, 'gi');
    const matches = text.match(regex);
    const count = matches ? matches.length : 0;

    const newText = text.replace(regex, (match) => `<mark>${match}</mark>`);
    setHighlightedText(newText);
    props.showAlert("Text or Word Found", "success");

    return count;
  }

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra Spaces Removed", "success");
  }

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  // Determine button border color based on theme
  const borderColor = props.mode === 'dark' ? 'white' : 'black';

  return (
    <>
      <div className="container" style={{ color: `var(--text-color-${props.mode})` }}>
        <h1 style={{ color: `var(--heading-color-${props.mode})` }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            value={text} 
            style={{
              backgroundColor: `var(--background-color-${props.mode})`, 
              color: `var(--text-color-${props.mode})`
            }}
            onChange={handleOnChange} 
            id="myText" 
            rows="9"
          />
        </div>
        <button className="btn mx-2" 
                style={{ 
                  backgroundColor: `var(--button-background-color-${props.mode})`, 
                  color: `var(--button-text-color-${props.mode})`,
                  border: `2px solid ${borderColor}`  // Add border color based on theme
                }} 
                onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn mx-2" 
                style={{ 
                  backgroundColor: `var(--button-background-color-${props.mode})`, 
                  color: `var(--button-text-color-${props.mode})`,
                  border: `2px solid ${borderColor}`  // Add border color based on theme
                }} 
                onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn mx-2" 
                style={{ 
                  backgroundColor: `var(--button-background-color-${props.mode})`, 
                  color: `var(--button-text-color-${props.mode})`,
                  border: `2px solid ${borderColor}`  // Add border color based on theme
                }} 
                onClick={handleSpeakClick}>
          Speech
        </button>
        <button className="btn mx-2" 
                style={{ 
                  backgroundColor: `var(--button-background-color-${props.mode})`, 
                  color: `var(--button-text-color-${props.mode})`,
                  border: `2px solid ${borderColor}`  // Add border color based on theme
                }} 
                onClick={handleClearClick}>
          Clear Text
        </button>
        
        <input 
          type="text" 
          placeholder="Enter replacement text" 
          value={replacementText} 
          onChange={handleReplacementTextChange} 
        />
        <button className="btn mx-2" 
                style={{ 
                  backgroundColor: `var(--button-background-color-${props.mode})`, 
                  color: `var(--button-text-color-${props.mode})`,
                  border: `2px solid ${borderColor}`  // Add border color based on theme
                }} 
                onClick={handleReplaceClick}>
          Replace
        </button>

        <input 
          type="text" 
          placeholder="Find word or phrase" 
          value={searchTerm} 
          onChange={handleSearchTermChange} 
        />
        <button className="btn mx-2" 
                style={{ 
                  backgroundColor: `var(--button-background-color-${props.mode})`, 
                  color: `var(--button-text-color-${props.mode})`,
                  border: `2px solid ${borderColor}`  // Add border color based on theme
                }} 
                onClick={() => {
                  const count = findAndHighlightText();
                  alert(`Found ${count} occurrences of "${searchTerm}"`);
                }}>
          Find
        </button>

        <button className="btn my-4" 
                style={{ 
                  backgroundColor: `var(--button-background-color-${props.mode})`, 
                  color: `var(--button-text-color-${props.mode})`,
                  border: `2px solid ${borderColor}`  // Add border color based on theme
                }} 
                onClick={handleRemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{ color: `var(--text-color-${props.mode})` }}>
        <h2 style={{ color: `var(--heading-color-${props.mode})` }}>Words & Characters:</h2>
        <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
        <h2 style={{ color: `var(--heading-color-${props.mode})` }}>Minutes to read:</h2>
        <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes to read text</p>

        <h2 style={{ color: `var(--heading-color-${props.mode})` }}>Preview</h2>
        {/* <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {1000 - text.length} characters</p> */}
        <p>{text.length > 0 ? text : "Enter something in the Textbox above to Preview it here"}</p>
      </div>
    </>
  );
}
