import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const TestAdmin = () => {
    const { user } = useSelector((state) => state.user);
    // const [isAdmin,setIsAdmin] = useState(false);

    // const testAuth = async () => {
    //     // Grab token off of localstorage
    //     const token = window.localStorage.getItem('token');
    //     // Pass token over to the back-end
    //     const response = await axios.get("/api/admin", {
    //         headers: {
    //             Authorization: 'Bearer ' + token
    //         }
    //     });
    //     setIsAdmin(response.data);
    // };

    // useEffect(() => {
    //     testAuth();
    // }, []);

    if(!user.isAdmin){
        return(
        <>
            <p>Sorry. You not s'posed to be here.</p>
        </>
        )
    };
    return (
        <>
            <p>If you can read this, you must be an admin!</p>
        </>
    );
};

export default TestAdmin;