import * as React from 'react';
import { Button } from 'react-bootstrap';

export const SignInCard = () => {
    return(
        <>
        <div className='card text-center text-light' style={{backgroundColor: '#A900FF'}}>
            <div className='card-body box-shadow'>
                <p>
                    Want to view your recipe book? Sign in to view all of the 
                    recipes you have saved.
                </p>
            </div>
            <Button href='/signin' style={{backgroundColor: '#3A0066'}}>Sign In</Button>
        </div>
        </>
    )
};
