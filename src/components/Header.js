import React, { useContext } from 'react'
import NoteContext from '../context/noteContext'

const Header = () => {

    const { btnGirisYap, isLogginButton, btnCikisYap } = useContext(NoteContext)

    return (

        isLogginButton ? (
            <a href="" id="btn-login" className="btn2" onClick={btnGirisYap}>Giriş Yap</a>
        ) : (
            <a href="" id="btn-exit" className="btn2" onClick={btnCikisYap}>Çıkış Yap</a>
        )

    )
}

export default Header