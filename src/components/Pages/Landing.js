import * as React from 'react';
import { Navbar } from '../Navbar';
import { SignInCard, SignUpCard } from '../Cards';
import ingredients2 from '../images/ingredients2.jpg'


export const Landing = () => {
    return (
        <div className='main-container ml-0 mt-0' style={{backgroundColor: '#3A0066', position: 'absolute', height: '100%', width: '100%'}}>
            <Navbar />
            <section className="text-light text-center p-10 p-lg-0 p-md-10" style={{backgroundColor: '#045D5D'}}>
                <div className="container p-5">
                    <div className="row-md col-sm">
                        <div className="d-md-flex align-items-center justify-content-evenly">
                            <div className='col-lg-5 col-md-8 p-5'>    
                                <h1>Ultimate Recipe Book</h1>
                                <p className="lead">
                                Welcome to your Ultimate Recipe Book! A place where you can save your 
                                written recipes in digital format so they can never get lost or spilled 
                                on again. You can also search for new recipes for inspiration when wanting
                                to try new things.
                                </p>
                            </div>
                            <img src={ingredients2} className='img-fluid col-md-4 col-sm-10'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-md-5' style={{backgroundColor: '#3A0066'}}>
                <div className='container'>
                    <div className='row g-4 p-4 justify-content-center align-items-center'>
                        <div className='col-lg-3 col-md-12'><SignInCard /></div>
                        <div className='col-lg-4 col-md-12'><SignUpCard /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
