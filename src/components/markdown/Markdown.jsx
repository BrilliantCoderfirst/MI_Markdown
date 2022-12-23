import React from 'react';
import './markdown.css';
import ReactMarkDown from 'react-markdown';
import { useState } from 'react';


const Markdown = () => {

    const [text, setText] = useState();


  return (
    <>
        <h1 className='firstHeading'>Click here For <span><a href="https://www.markdownguide.org/cheat-sheet/" target="_blank"> Cheat Sheet </a></span></h1>
        <div className="container">
        
            <div className="forMarkDown">
                <div className="left">
                    <textarea name="textarea" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className="right">
                    <ReactMarkDown>{text}</ReactMarkDown>
                </div>
            </div>

        </div>
    
    
    </>
  )
}

export default Markdown