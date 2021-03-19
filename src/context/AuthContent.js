import React, { createContext, useContext, useState, useEffect } from "react"
import firebase from "firebase"
import { auth } from "../config/firebaseConfig"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password)

  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

  const logout = () => auth.signOut()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
  }

  return (
    // render children only if it is not loading
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
