import React, { useContext } from 'react'
import NoteContext from '../context/noteContext'

const Login = () => {

    const {isMemberModal, btnGirisYap,btnHideModal, uyeOl} = useContext(NoteContext)


    const uyeOlVal = (e) => {
        
        let val = document.getElementById("input-uyeol").value;
        uyeOl(val, e)
        e.preventDefault();
    }

    return (
        isMemberModal && (

            <div className="modal_wrapper">
                <div className="bgtrans" onClick={btnHideModal}></div>
                <div className="modal">
                    <div>
                        <label className="mb-10 d-block">Üye olmak için Şifre Belirleyin</label>
                        <p className="mb-10"><input id="input-uyeol" type="text" className="form-control" placeholder="ID Belirleyin..." required /></p>
                        <p className="btns">
                            <a href="" className="btn2" onClick={uyeOlVal}>Üye Ol</a>
                            <a href="" className="btn2" onClick={btnGirisYap}>Giriş Yap</a>
                        </p>
                    </div>
                </div>
            </div>

        )
    )
}

export default Login
