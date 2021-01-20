import React, { useEffect, useContext } from 'react'
import NoteContext from '../context/noteContext'

const Notelists = (props) => {

  const {deletePost} = useContext(NoteContext);

  function createMarkup(ths) {
    return {
      __html: props.post.texthtml+"<span class='delete-icon'><i class='fas fa-times-circle'></i></span>"
    };
  };
  const deleteNote = (id) => {
    deletePost(id)
  }

  return (

    <div className="list" id={props.post.id}  dangerouslySetInnerHTML={createMarkup()} onClick = {()=> deleteNote(props.post.id)} />

  )
}

export default Notelists