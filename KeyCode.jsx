import { useState, useEffect } from 'react';
import './KeyCodestyle.css';
function KeyCode() {
const [keyInfo,setKeyInfo]=useState({
    key:'-',
    code:'-',
    keyCode:'-',
});
useEffect(()=>{
    const handleKeyDown = (e) =>{
        setKeyInfo({
            key:e.key===' '?'Space':e.key,
            code:e.code,
            keyCode:e.key.charCodeAt(0),
        });
    };
  window.addEventListener('keydown',handleKeyDown);
},[]);

  return (
    <div className="container">
      <div className="key-container">
        <h4>Key</h4>
        <div className="key-content">{keyInfo.key}</div>
      </div>
      <div className="key-container">
        <h4>Code</h4>
        <div className="key-content">{keyInfo.code}</div>
      </div>
      <div className="key-container">
        <h4>Key-Code</h4>
        <div className="key-content">{keyInfo.keyCode}</div>
      </div>
    </div>
  );
}

export default KeyCode;
