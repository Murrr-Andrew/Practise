import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false
};

function reducer(state, action) {
    switch(action.type) {
        case "login":
            return { ...state, user: action.payload, isAuthenticated: true }
        case "logout":
            return { ...state, user: null, isAuthenticated: false }
        default:
            throw new Error("Unknown action type");
    }
}

// eslint-disable-next-line
function AuthProvider({ children }) {
    const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState);

    function login(email, password) {

    }

    function logout() {

    }

    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
}

// eslint-disable-next-line
function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) throw new Error("AuthContext was used outside AuthProvider");

    return context;
}