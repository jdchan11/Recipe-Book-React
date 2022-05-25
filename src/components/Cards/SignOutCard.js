import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";

export const SignOutCard = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
        await logOut();
        navigate('/');
        } catch (error) {
        console.log(error.message)
        }
    }
    return(
        <>
        <div className='card text-center text-light' style={{backgroundColor: '#A900FF'}}>
            <div className='card-body box-shadow'>
                <p>
                    All done with your recipes? 
                </p>
            </div>
            <Button onClick={handleLogout} style={{backgroundColor: '#3A0066'}}>Sign Out</Button>
        </div>
        </>
    )
};