import React,{useState} from 'react'

export default function Textbox(props) {
  const handleOnChange=(event)=>
  {
    setText(event.target.value);
    // setContent(text)
  }
  const toUpperCase=()=>
  {
     let changeToUpCase=text.toUpperCase();
     if(text.length===0)
     {
      alert("You have empty content in the textbox");
     }
     else
     {
       setText(changeToUpCase);
     }

  }
  const toChangeColor=()=>
  {
    if(text.length===0)
    {
      alert("You have empty content in the textbox");
    }
    else
    {
      changeStyle(
        {
          fontStyle: "italic"
        }
      )
    }
  }
  const toClear=()=>
  {
    if(text.length===0)
    {
      alert("You have empty content in the textbox");
      // setContent('Nothing to Preview Here')
    }
    else
    {
      setText(" ")
      // setContent('Nothing to Preview Here')
    }
  }
    const [text, setText] = useState("");
    const [myStyle,changeStyle] = useState({});
    // const [content,setContent]=useState('Nothing to Preview Here');
  return (
    <>
    <div className="container mx-1 ">
<div className={`mb-3 my-3 bg-{props.mode}`}>
  <label htmlFor="exampleFormControlTextarea1" id='textbox' className={`form-label container text-${props.text}`}>{props.content} </label>
  <textarea className={`form-control bg-${props.textColor} text-${props.text}`}  placeholder='Enter your text here' id="exampleFormControlTextarea1" style={myStyle} onChange={handleOnChange} value={text} rows="8"></textarea>
</div>
<button type="button" className="btn btn-outline-success" onClick={toUpperCase}>UpperCase</button>
<button type="button" className="btn btn-outline-danger mx-2 my-1" onClick={toChangeColor}>Italic Text</button>
<button type="button" className="btn btn-outline-danger mx-2 my-1" onClick={toClear}>Clear Text</button>

    </div>
    <div className='textBoxInfo'>
      <h1>The content inside your textbox</h1>
      <p className={`text-${props.text}`}>Have {text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p className={`text-${props.text}`}>Time to read the content is {0.008*(text.split(' ').filter((element)=>{return element.length!==0}).length)} minute</p>
    </div>
     <div id='previewbox'className={`previewInfo text-${props.text}`}>
      <h2>Preview:</h2>
      <p>{text.length>0?text:"Nothing Preview Here text"}</p>
      {/* <p>{content}</p> */}
     </div>
    </>
  )
}
