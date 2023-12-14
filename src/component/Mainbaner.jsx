import React from "react";
import './style.css'
import { useState } from "react";

function Mainbaner() {

    const data = [
        {
            name: "Lorem Ipsum",
            icon:<i class="fs-2 text-yellow fa-solid fa-landmark"></i>
        },
        {
            name: "Dolor Sitema",
            icon:<i class="fs-2 text-yellow fa-solid fa-briefcase"></i>
        },
        {
            name: "Sedare Perspi",
            icon:<i class="fs-2 text-yellow fa-solid fa-chart-simple"></i>
        },
        {
            name: "Magni Dolores",
            icon:<i class="fs-2 text-yellow fa-solid fa-database"></i>

        },
        {
            name: "Nemos Enimade",
            icon:<i class="fs-2 text-yellow fa-solid fa-layer-group"></i>
        }
    ]

    const [product, setProduct] = useState(data);

    return (
        <>
            <div className="container1">
                
                <div className="text-center">
                    <h1 className="pt-4 fs-1 text-light">Powerful Digital <br /> Solutions With Gp.</h1>
                    <h1 className="fs-3 text-light">We are team of talented digital marketers</h1>
                </div>
                

                
               <div className="row p-top justify-content-center">
                    {
                        product.map((element) => {
                           
                            return (
                                <div className="col-1 mt-5 mx-4 br-w text-center">
                                
                                        <h1 class="text-light fs-3 mt-3">{element.name}</h1>
                                        <span class="">{element.icon}</span>
                                    
                                </div>
                            )
                        })
                    };
                     
                </div>

            </div>
        </>
    )
};

export default Mainbaner;
