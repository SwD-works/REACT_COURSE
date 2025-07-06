import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");
    }
const handleLoClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success");
    }
const handleclearClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = " ";
        setText(newText)
    }
const handleCopy = ()=> {
  
        console.log("I am Copy");
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);    
}
 const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
const handleExtraSpaces  = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }




//declare a new state variable
const [text, setText] = useState('Enter text here');
//setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}} > 
        <h1>{props.heading}</h1>
      <div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleclearClick}> Clear text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy text</button> 
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>  
    </div>
    </>
  )
}

