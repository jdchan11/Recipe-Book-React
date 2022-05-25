import React, { useState  } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useGetRecipes } from './FetchAllRecipes';
import { api_routes } from '../components/api/server';
import { Button, Dialog, Typography, 
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@mui/material';
import { RecipeForm } from '../components/RecipeForm';

const columns = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'recipe_title', headerName: 'Title', flex: 1 },
    { field: 'prep_time', headerName: 'Prep Time', flex: 0.5 },
    { field: 'cook_time', headerName: 'Cook Time', flex: 0.5 },
    { field: 'ingredients', headerName: 'Ingredients', hide: true },
    { field: 'recipe_instructions', headerName: 'Recipe', hide: true }
];

export const DataTable = () => {
    const initialGridState = {
        data: {
            id: ''
        }
    }

    const { recipeData, getData } = useGetRecipes();
    const [open, setOpen] = useState(false);
    const [gridData, setData] = useState(initialGridState);
    const [selectionModel, setSelectionModel] = useState([]);
    

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        api_routes.delete(selectionModel);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>My Recipes</h2>

        <DataGrid rows={ recipeData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
        }}/>

        <Button variant='contained' color='primary' onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Recipe {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Recipe</DialogContentText>
                    <RecipeForm id={selectionModel}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
            
        </div>
    )
}