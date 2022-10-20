import React, { createContext, useState } from "react";
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserContext = createContext(undefined);

function Context({ children }) {

    const [userInfo, setUserInfo] = useState("");
    const [torus, setTorus] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    const login = async () => {
        try {
            let torus = new Torus();
            setTorus(torus)
            let init = await torus.init();
            let login = await torus.login(); // await torus.ethereum.enable()
            const web3 = new Web3(torus.provider);
            const fetchedUserInfo = await torus.getUserInfo();
            setUserInfo(fetchedUserInfo);
            setAddress(login[0])
            // localStorage.setItem("userInfo", JSON.stringify(fetchedUserInfo));
            sessionStorage.setItem("userInfo", JSON.stringify(fetchedUserInfo));
            // console.log(init, "init", login, "login", web3, "web3", fetchedUserInfo, "userInfo", torus.provider);

            // navigate('/dashboard/bedrock');

            return {
                loading: false,
                torus: torus,
                publicAddress: login[0],
            }

        } catch (error) {
            // console.log(error);

            return {
                loading: false,
                error: error
            }
        }
    }

    const logout = async (torus) => {
        try {
            // localStorage.removeItem('userInfo')
            sessionStorage.removeItem('userInfo')
            await torus.logout();
            // await torus.cleanUp();
            navigate('/')
            // window.location.reload(false)
        } catch (error) {
            // console.log(error);
        }
    }

    useEffect(() => {
        let userInfo = sessionStorage.getItem('userInfo');

        if (userInfo) {
            login()
            // console.log("Working Inside");
        }

        // console.log("Working");
    }, [])


    return (
        <UserContext.Provider value={{
            loginFunction: login,
            logoutFunction: logout,
            userInfo: userInfo,
            torus: torus,
            address: address
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, Context }