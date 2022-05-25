import React, { useState, useEffect } from 'react';
import { api_routes } from '../components/api'

export const useGetRecipes = () => {
    const [recipeData, setData] = useState({});

    async function handleDataFetch(){
        const result = await api_routes.get();
        setData(result)
        console.log(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])
        return {recipeData, getData:handleDataFetch}
}