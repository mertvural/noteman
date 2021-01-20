import React, { useContext } from 'react'
import NoteContext from '../context/noteContext'

const Login = () => {

    const { isLoginModal, btnHideModal, btnUyeOl, uyeGiris } = useContext(NoteContext)

    const girisYapVal = (e) => {

        let val = document.getElementById("input-uyegiris").value;
        uyeGiris(val, e)
        e.preventDefault();

    }

    return (
        isLoginModal && (
            <div className="modal_wrapper">
                <div className="bgtrans" onClick={btnHideModal}></div>
                <div className="modal">
                    <div>
                        <label className="mb-10 d-block">Şifreniz </label>
                        <p className="mb-10"><input id="input-uyegiris" type="text" className="form-control" placeholder="Şifreniz..." required /></p>
                        <p className="btns">
                            <a href="" className="btn btn2" onClick={girisYapVal}>Giriş Yap</a>
                            <a href="" className="btn btn2" onClick={btnUyeOl}>Üye Ol</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    )
}

export default Login
