import React, { useState, useEffect } from 'react';
import logo from '../images/logo_recipes.png';
import { Button,
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogContentText, 
    DialogTitle,
} from '@mui/material';
import { DataTable } from '../DataTable';
import { RecipeForm } from '../RecipeForm';
import { useNavigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";

export const Recipe = () => {
    const { logOut, user } = useUserAuth();
    const location = useLocation();
    const [dialogOpen, setDialogOpen] = useState(false);
    const navigate=useNavigate();

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };
    
    const handleDialogClickClose = () => {
        setDialogOpen(false);
    };

    const onClickHome = async () => {
        navigate('/home')
    };

    const onClickSearch = async () => {
        navigate('/search')
    };

    const handleLogout = async () => {
        try {
        await logOut();
        navigate('/');
        } catch (error) {
        console.log(error.message)
        }
    };

    return (
        <>
            <div className='d-flex flex-column align-items-center'
                style={{backgroundColor: '#3A0066', position: 'fixed', left: '0px', height: '100vh', width: '250px'}}>
                <div id="mt-0 mb-0 w-100 color-light justify-content-center align-content-around">
                    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
                        <img src={logo} className='cover' alt="" />
                    </div>
                    <div className='d-flex flex-column mt-10 justify-content-around h-100 w-100'>
                        <button onClick={onClickHome} 
                                style={{backgroundColor: '#00CCCC', border: 'none'}}>Home</button>
                        <button onClick={onClickSearch} 
                                style={{backgroundColor: '#00CCCC', border: 'none'}}>Search</button>
                        <button onClick={handleLogout} 
                                style={{backgroundColor: '#00CCCC', border: 'none'}}>Logout</button>
                        <button onClick={handleDialogClickOpen} 
                                style={{backgroundColor: '#00CCCC', border: 'none'}}>Add New Recipe</button>
                        <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Add New Recipe</DialogTitle>
                            <DialogContent>
                                <DialogContentText></DialogContentText>
                                    <RecipeForm />
                                </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                                <Button onClick={handleDialogClickOpen} color="primary">Add Another</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{backgroundColor: '#066C6C', left: '250px', 
                                                                width: '100vw', height: '100vh'}}>
                <div className='w-75'>
                <DataTable />
                </div>
            </div>
            

        </>
    )
};