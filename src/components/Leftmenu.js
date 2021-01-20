import React, { useContext } from 'react'
import NoteContext from '../context/noteContext'


const Leftmenu = () => {

    const {changeListViewer, changeThema} = useContext(NoteContext)

    const viewerList = (e) => {
        
        changeListViewer("list-viewer")
        e.preventDefault();

    }

    const viewerTable = (e) => {

        changeListViewer("table-viewer")
        e.preventDefault();

    }
    
    const themeDark = (e) => {

        changeThema("thema-dark")
        e.preventDefault();

    }

    const themeSun = (e) => {

        changeThema("thema-sun")
        e.preventDefault();

    }

    return (
    <div>
        <ul className="menu">
            <li>
                <a href=""><i className="far fa-edit"></i> Not Ekle</a>
            </li>
            <li>
                <a href=""  onClick={viewerList}><i className="fas fa-list-ul"></i> Liste Görünümlü</a>
            </li>
            <li>
                <a href="" onClick={viewerTable}><i className="fas fa-table"></i> Tablo Görünümlü</a>
            </li>
            <li>
                <a href="" onClick={themeDark}><i className="far fa-moon"></i> Koyu Tema</a>
            </li>
            <li>
                <a href="" onClick={themeSun}><i className="fas fa-sun"></i> Açık Tema</a>
            </li>
        </ul>
    </div>
    )
}

export default Leftmenu