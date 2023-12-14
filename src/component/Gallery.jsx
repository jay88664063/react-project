import Image from 'react-bootstrap/Image';
import React from 'react';

function FluidExample() {
    return <>
        <div className="container">
            <h1 className='fs-4 text-secondary mt-5'>PORTFOLIO</h1>
            <h1 className='fs-2 fw-bold'>CHECK OUR PORTFOLIO</h1>

            <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-1 button">
                    <button className='bg-warning text-dark fs-5 fw-bold'>ALL</button>
                </div>

                <div className="col-1 button">
                    <button className='fs-5 fw-bold'>APP</button>
                </div>
                <div className="col-1 button">
                    <button className='fs-5 fw-bold'>CARD</button>
                </div>
                <div className="col-1 button">
                    <button className='fs-5 fw-bold'>WEB</button>
                </div>
            </div>

            <div className="row">
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-1.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-2.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-5.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-9.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-6.jpg" width="400px" height="400px" />
                </div>
                <div className="col-4 my-3 mx-0">
                    <Image src="https://bootstrapmade.com/demo/templates/Gp/assets/img/portfolio/portfolio-3.jpg" width="400px" height="400px" />
                </div>
            </div>
        </div>
    </>
}

export default FluidExample;
