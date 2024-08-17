import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("upper case was clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Cleared!", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    }

    //javascript rejecs concept is used here
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    const handleOnChange = (event) => {         //we are using event b'coz textarea has default value as {text} and on change it starts using 
        setText(event.target.value)             //handleOnChange, hence we are using event to dynamically add text  .
    }


    const [text, setText] = useState("");                //useState("")
    // text = "Enter text here1";      //Wrong way to change state                  |------>Default value place here
    // setText("Enter text here2");   //Correct way to change state

  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>              {/*  ---> Here styles={{}} , so first {} is  for javascript and second {} is for object     */}
        <div className="mb-3">                {/*  |       */}
        <textarea className="form-control"  style={{backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h3>Your text summary</h3>
        <p> {text.split(" ").length} words , {text.length} characters & {text.split(".").length} sentences</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
    </div>
    </>
  )
}
