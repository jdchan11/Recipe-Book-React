import * as React from 'react';
import { Button } from 'react-bootstrap';

export const SignUpCard = () => {
    return(
        <>
        <div className='card text-center text-dark' style={{backgroundColor: '#00CCCC'}}>
            <div className='card-body box-shadow'>
                <p>
                    Want to save all of your written recipes in one, 
                    easy-to-find place? Sign up now to make your own 
                    digital recipe book.
                </p>
            </div>
            <Button href='/signup' className='text-light' style={{backgroundColor: '#045D5D'}}>Sign Up</Button>
        </div>
        </>
    )
};