import React, { useReducer, useEffect } from "react"
import NoteReducer from './noteReducer'
import NoteContext from './noteContext'
import axios from 'axios'


var myString   = "yourkey";


const NoteState = (props) => {

    const initialState = {
        textEditor: {
            pass: null,
            texthtml: ""
        },
        listViewer: "table-viewer", // or list
        thema : "thema-sun", // or dark
        isLoginModal: false,
        isMemberModal: false,
        isLogginButton: true,
        isLoggin: false,
        posts: []
    }


    const [state, dispatch] = useReducer(NoteReducer, initialState)

    useEffect(() => {
        var isLoggin = localStorage.getItem("isLoggin");
        var passJson = JSON.parse(isLoggin);
        if (!!isLoggin) {
            dispatch({
                type: "LOGIN"
            })
            getNotes(passJson.pass);
        } else {
            console.log("GİRİŞ YAPILMADI")
        }

    }, [])


    useEffect(() => {
        document.getElementsByTagName("body")[0].setAttribute("class", localStorage.getItem("listType"));
    }, [state.listViewer])

    useEffect(() => {
        document.getElementsByTagName("html")[0].setAttribute("class", localStorage.getItem("selectThema"));
    }, [state.thema])

    // useEffect(() => {
    //     getNotes()
    // }, [state.textEditor.texthtml])

    const postNote = (txt, pass) => {

        dispatch({
            type: "POST_NOTE",
            payload: txt,
            pass: pass
        })

        axios.post(""+myString+"/posts.json", state.textEditor).then(res => {
            getNotes(pass);
        })

    }

    const getNotes = (pass) => {
  
        axios.get(""+myString+"/posts.json").then(res => {

            let data = res.data;

            let postArray = [];

            for (let key in data) {
                if(data[key].pass == pass) {
                    postArray.push({
                        id: key,
                        ...data[key]
                    })
                }                
            }
        
            dispatch({
                type: "GET_ALL_NOTE",
                payload: postArray
            })
        })

    }

    const changeListViewer = (listType) => {

        state.listViewer = listType;
        localStorage.setItem("listType", listType);
        document.getElementsByTagName("body")[0].setAttribute("class", listType);

    }

    const changeThema = (selectThema) => {

        state.thema = selectThema;
        localStorage.setItem("selectThema", selectThema);
        document.getElementsByTagName("html")[0].setAttribute("class", selectThema);

    }

    const btnGirisYap = (e) => {

        dispatch({
            type: "LOGIN_MODAL"
        })
        e.preventDefault();
    }

    const btnCikisYap = (e) => {
        localStorage.removeItem("isLoggin");
        location.reload();
        e.preventDefault();
    }

    const btnHideModal = (e) => {

        dispatch({
            type: "HIDE_LOGIN_MODAL"
        })
        e.preventDefault();
    }

    const btnUyeOl = (e) => {

        dispatch({
            type: "MEMBER_MODAL"
        })
        e.preventDefault();
    }

    const uyeOl = (val, e) => {

        axios.get(""+myString+"/uyeler.json").then(res => {

            let data = res.data;
            let isTaken = false;
            let postArray3 = [];

            for (let key in data) {
                postArray3.push({
                    id: key,
                    pass: data[key]
                })
            }

            postArray3.map((el) => {
                if (val == el.pass) {
                    alert("ID daha önce alınmış. Başka giriniz.")
                    isTaken = true;
                }
            });

            if (!isTaken) {
                
                axios.post(""+myString+"/uyeler.json", JSON.stringify(val)).then(res => {
            
                    dispatch({
                        type: "LOGIN"
                    })
            
                    let logginInfo = {
                        isLoggin: true,
                        pass: val
                    }
                    localStorage.setItem("isLoggin", JSON.stringify(logginInfo));
                })
            }

        })

        e.preventDefault();
    }

    const uyeGiris = (val, e) => {

        axios.get(""+myString+"/uyeler.json").then(res => {

            let data = res.data;

            let postArray2 = [];

            for (let key in data) {
                postArray2.push({
                    id: key,
                    pass: data[key]
                })
            }

            postArray2.map((el) => {
                if (el.pass == val) {

                    dispatch({
                        type: "LOGIN"
                    })
                    let logginInfo = {
                        isLoggin: true,
                        pass: val
                    }
                    localStorage.setItem("isLoggin", JSON.stringify(logginInfo));
                    location.reload();
                } 
            })


        })


        e.preventDefault();
    }

    const deletePost = (id) => {
        
        axios.delete(`${myString}/posts/${id}.json`)
        .then(res => {
            location.reload();   
        })

    }

    return <NoteContext.Provider
        value={{
            postNote,
            changeListViewer,
            btnHideModal,
            btnGirisYap,
            btnUyeOl,
            uyeOl,
            btnCikisYap,
            changeThema,
            deletePost,
            uyeGiris,
            textEditor: state.textEditor,
            posts: state.posts,
            isLoginModal: state.isLoginModal,
            isMemberModal: state.isMemberModal,
            listViewer: state.listViewer,
            isLoggin: state.isLoggin,
            isLogginButton: state.isLogginButton

        }}>
        {props.children}
    </NoteContext.Provider>
}

export default NoteState