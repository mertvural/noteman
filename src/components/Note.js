import React, { Component, useContext, useState } from 'react'
import Editor from 'react-medium-editor';
import NoteContext from '../context/noteContext'


const Note = () => {

    const { textEditor, postNote } = useContext(NoteContext)

    const [inputText, setInputText] = useState("");
  
    const addNote = () => {
        let text = document.getElementById("editor").innerHTML;
        
        if(!!text) {
            textEditor.texthtml = text;        
        var isLoggin = localStorage.getItem("isLoggin");
        if(!!isLoggin) {
        var passJson = JSON.parse(isLoggin)
        textEditor.pass = passJson.pass;
        postNote(text, passJson.pass);
        } else {
            alert("Lütfen giriş yapınız");
            document.getElementById("btn-login").click()
        }
        }else {
            alert("Not ekleyin")
        }

    }

  

    return (
        
        <div className="mb-5">       
            <Editor data-placeholder="Not alın..."  id="editor" />
            <button className="btn mt2" onClick={addNote}><i className="far fa-edit"></i> Not Ekle</button>
        </div>

    )

}

export default Note