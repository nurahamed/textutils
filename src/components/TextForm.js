import React, {useState} from 'react'

export default function TextForm(props) {

    const handleCopy = () =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")
    }
    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extera spaces", "success")
    }

    const [text, setText] = useState();

    const handleUpClick = () =>{
        console.log("Upper Case was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPER CASE", "success")
    }

    const handleLoClick = () =>{
        console.log("Upper Case was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success")
    }
     const handleClearClick= () =>{
        let newText =("");
        setText(newText);
        props.showAlert("Clear Text", "success")
     }

    const handleOnChange = (event) =>{
        console.log("on change");
    
        setText(event.target.value);
    }
   
        
  return (
    <>
    <div className= "container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
        <h1>{props.heading} </h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#002B5B':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-warning mx-1  my-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick} >Clear text</button>
        <button className="btn btn-success mx-1 my-1" onClick={handleCopy} >Copy text</button>
        <button className="btn btn-info mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        {/* <h2>Your text Summery</h2> */}
        {/* <p>{text.split(" ").length-1} words and {text.length} of character. 
        {Math.fround(0.008 * text.split(" ").length).toFixed(2)} Minutes to read </p>
         */}
        <h2>Preview Text</h2>
        {/* <p>{text.lenght>0?text:"Enter text above to preview here"} </p> */}
        <p>{text} </p>

    </div>
    </>
  )
}
