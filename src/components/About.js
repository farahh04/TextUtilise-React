import React, { useState } from 'react'

export default function About() {
const[myStyle,setMyStyle]= useState({
    color:'black',
    backgroundColor:'white'
})  
    const[btnText,setBtnText] =useState("Enable light Mode")        
 const toggleStyle=()=>{
    if(myStyle.color==='white'){
        setMyStyle({
             color:'black',
    backgroundColor:'white'
        })
        setBtnText("Enable dark Mode")
    }
    else{
        setMyStyle({
            color:'white',
   backgroundColor:'black',
   border:'1px solid white'
       })
       setBtnText("Enable light Mode")
       
    }
 }

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body "style={myStyle}>

      With TextUtilises, you can easily analyze your text for various metrics such as word count, character count, readability score, and much more. Our advanced algorithms provide accurate and fast results, enabling you to get detailed insights into your writing instantly.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      TextUtilises is completely free to use, without any hidden costs or premium features locked behind a paywall. We believe in providing valuable tools to everyone, so all features of our application are available to all users. No registration required—just start using our app right away!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      Our application is fully compatible with all modern web browsers. Whether you’re using Chrome, Firefox, Safari, or Edge, you can access TextUtilises without any issues. Our responsive design ensures a seamless experience across all devices, so you can use our app on your desktop, tablet, or smartphone
      </div>
    </div>
  </div>
</div>
{/* <div className='my-4'>
<button  onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
</div> */}
    </div>
  )
}
