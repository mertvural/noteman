const githubReducer = (state, action) => {
    switch (action.type) {

        case "POST_NOTE":
     
            return {
                ...state,
                textEditor: {
                    pass : action.pass,
                    texthtml: action.payload
                }
            }
        case "GET_ALL_NOTE":

            return {
                ...state,
                posts: action.payload
            }
        case "REMOVE_TEXT":
            return {
                text: ""
            }
        case "CHANGE_LIST_VİEW":
            return {
                ...state,
                listViewer: action.payload
            }

        case "LOGIN_MODAL" : 
        return {
            ...state,
            isLoginModal : true,
            isMemberModal : false
        }

        case "HIDE_LOGIN_MODAL" : 
        return {
            ...state,
            isLoginModal : false,
            isMemberModal : false
        }

        case "MEMBER_MODAL" : 
        return {
            ...state,
            isLoginModal : false,
            isMemberModal : true
        }

        case "LOGIN" : 
        return {
            ...state,
            isLogginButton : false,
            isLoginModal : false,
            isMemberModal : false,
            isLoggin : true
        }

        default:
            return state
    }
}

export default githubReducer