import * as React from 'react';
import { Button } from 'react-bootstrap';

export const RecipeCard = () => {
    return(
        <>
        <div className='card text-center text-light' style={{backgroundColor: '#A900FF'}}>
            <div className='card-body box-shadow'>
                <p>
                    Want to view your recipe book?
                </p>
            </div>
            <Button href='/recipes' style={{backgroundColor: '#3A0066'}}>View Recipes</Button>
        </div>
        </>
    )
}
