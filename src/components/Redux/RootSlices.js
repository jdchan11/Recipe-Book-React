import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        recipe_title: 'Title',
        prep_time: 'Prep Time',
        cook_time: 'Cook Time',
        ingredients: 'Ingredients',
        recipe_instructions: 'Recipe'
    },
    reducers: {
        chooseTitle: function (state, action) { state.recipe_title = action.payload; },
        choosePrep: function (state, action) { state.prep_time = action.payload; },
        chooseCook: function (state, action) { state.cook_time = action.payload; },
        chooseIngredients: function (state, action) { state.ingredients = action.payload; },
        chooseRecipe: function (state, action) { state.recipe_instructions = action.payload; }
    }
});

export const reducer = rootSlice.reducer;
export const { chooseTitle, choosePrep, chooseCook, chooseIngredients, chooseRecipe } = rootSlice.actions;