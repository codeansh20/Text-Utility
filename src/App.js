import './App.css';
// import Accordion from './components/Accordion';
// import Props from './components/Props';
import Textbox from './components/Textbox';
import Navbar from './components/Navbar';
// import Colorpicker from './components/Colorpicker';
import React,{useState} from 'react';
function App() {
   const [mode,setMode]=useState('light')
   const [text,setText]=useState('dark')
   const [textColor,setTextColor]=useState('lights')
   const [alertContent,setAlertContent]=useState('Light Mode Enabled'
   )
   const togglemode=()=>
   {
    if(mode==='light')
    {
      setMode('dark')
      setText('light')
      document.body.style.backgroundColor="#334756";
      setTextColor('black')
      setAlertContent('Dark Mode Enabled')
    }
    else
    {
      setMode('light')
      setText('dark')
      document.body.style.backgroundColor="white";
      setTextColor('white')
      setAlertContent('Light Mode Enabled')
    }
   }
  return (
    <>
<Navbar value="Enable Dark Mode" text={text} mode={mode}  togglemode={togglemode} alertValue={alertContent}/>
{/* <Colorpicker/> */}
{/* <Props  content="I am passing props here nothing else wanna learn more about it" text={text}/> */}
<Textbox content="TextBox" mode={mode} text={text} textColor={textColor} previewContent="Enter your text here"/>
{/* <Accordion/> */}
    </>
  );
}

export default App;
