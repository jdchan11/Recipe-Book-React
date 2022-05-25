import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Input } from '../components/Input';
import { Button } from '@mui/material';

import { api_routes } from '../components/api/server';
import { chooseTitle, choosePrep, chooseCook, chooseIngredients, chooseRecipe } from '../components/Redux/RootSlices';

export const RecipeForm = (recipeFormProps= {id: '', data: {} }) => {
    const dispatch = useDispatch();
    const store = useStore();
    const recipe_title = useSelector((recipeState = {
        recipe_title: '',
        prep_time: '',
        cook_time: '',
        ingredients: '',
        recipe_instructions: ''
    }) => { return recipeState.recipe_title; });
    const {register, handleSubmit} = useForm({ })

    const onSubmit = (data, event) => {
        if (recipeFormProps.id) {
            api_routes.update(recipeFormProps.id, data);
            console.log(data);
            setTimeout( () => { window.location.reload(); }, 1000);
            event.target.reset();
        }
        else {
            dispatch(chooseTitle(data.recipe_title));
            dispatch(choosePrep(data.prep_time));
            dispatch(chooseCook(data.cook_time));
            dispatch(chooseIngredients(data.ingredients));
            dispatch(chooseRecipe(data.recipe_instructions));
            api_routes.create(store.getState());
            setTimeout(function () { window.location.reload(); }, 1000);
        }
    };
    return (<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="recipe_title">Title</label>
                    <Input {...register('recipe_title')} name="recipe_title" placeholder='Recipe Title'/>
                </div>
                <div>
                    <label htmlFor="prep_time">Prep Time</label>
                    <Input {...register('prep_time')} name="prep_time" placeholder='Prep Time'/>
                </div>
                <div>
                    <label htmlFor="cook_time">Cook Time</label>
                    <Input {...register('cook_time')} name="cook_time" placeholder='Cook Time'/>
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <Input {...register('ingredients')} name="ingredients" placeholder='Ingredients'/>
                </div>
                <div>
                    <label htmlFor="recipe_instructions">Recipe</label>
                    <Input {...register('recipe_instructions')} name="recipe_instructions" placeholder='Recipe Instructions'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>);
};

