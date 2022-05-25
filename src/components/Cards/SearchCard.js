import * as React from 'react';
import { Button } from 'react-bootstrap';

export const SearchCard = () => {
    return(
        <>
        <div className='card text-center text-light' style={{backgroundColor: '#A900FF'}}>
            <div className='card-body box-shadow'>
                <p className=''>
                    Want to find something new to cook? Use our "Search"
                    feature to find new recipes.
                </p>
            </div>
            <Button href='/search' style={{backgroundColor: '#3A0066'}}>Search</Button>
        </div>
        </>
    )
}