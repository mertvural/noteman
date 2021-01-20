import React, { useEffect, useContext } from 'react'
import NoteContext from '../context/noteContext'
import NoteLists from './NoteLists'
const Notelist = () => {

    const { posts } = useContext(NoteContext)


    return (

        <div className="noteList">


            {posts.map(post => (
                <NoteLists post={post} key={post.id} />
            ))}



        </div>

    )
}

export default Notelist