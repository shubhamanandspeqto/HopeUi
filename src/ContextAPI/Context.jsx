import React, { createContext, useState } from "react";
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(undefined);

function Context({ children }) {

    const [userInfo, setUserInfo] = useState("")
    const [torus, setTorus] = useState()

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault()
        try {
            let torus = new Torus();
            setTorus(torus)
            let init = await torus.init();
            let login = await torus.login(); // await torus.ethereum.enable()
            const web3 = new Web3(torus.provider);
            const userInfo = await torus.getUserInfo();
            setUserInfo(userInfo)
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            console.log(init, "init", login, "login", web3, "web3", userInfo, "userInfo", torus.provider);
            navigate('/dashboard/bedrock')
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        localStorage.removeItem('userInfo')
        navigate('/')
        torus.logout();
        torus.cleanUp();
    }

    return (
        <UserContext.Provider value={{
            loginFunction: login,
            logoutFunction: logout,
            userInfo: userInfo
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, Context }