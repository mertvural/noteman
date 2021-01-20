import React, { useState } from 'react'
import Leftmenu from './Leftmenu'
import Header from './Header'
import Note from './Note'
import Notelist from './Notelist'
import NoteState from '../context/noteState'
import Login from './Login'
import Logo from './Logo'
import Member from './Member'

const App = () => {

    return (

        <NoteState>
            <Login />
            <Member />
            <header>
                <Logo />
                <Header />
            </header>
            <main id="main">
                <div id="leftmenu">
                    <Leftmenu />
                </div>
                <div id="rightmenu">
                    <Note />
                    <Notelist />
                </div>
            </main>
        </NoteState>

    )
}

export default App
