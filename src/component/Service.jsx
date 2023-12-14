import React from "react";
import './style.css'
import { useState } from "react";

function Service() {

    const data = [
        {
            icon: <i class="fa-regular fa-futbol"></i>,
            title: "Lorem Ipsum",
            p: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
        },
        {
            icon: <i class="fa-solid fa-file"></i>,
            title: "Sed ut perspiciatis",
            p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
        {
            icon: <i class="fa-solid fa-gauge-simple-high"></i>,
            title: "Magni Dolores",
            p: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
        },
        {
            icon: <i class="fa-solid fa-earth-americas"></i>,
            title: "Nemo Enim",
            p: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        },
        {
            icon: <i class="fa-brands fa-youtube"></i>,
            title: "Dele cardo",
            p: "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur",
        },
        {
            icon: <i class="fa-solid fa-receipt"></i>,
            title: "Divera don",
            p: "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
        }
    ]



    const [product, setProduct] = useState(data)



    return (
        <>
            <div className="container mt-5">

                <h1 className="text-secondary">SERVICES</h1>
                <h1>CHECK OUR SERVICES</h1>

                <div className="row">
                    {
                        product.map((element) => {

                            return (
                                <>

                                    <div className="card1 col-3 text-center mt-5 mb-3 pb-5 br-G mx-5">
                                        <h1 className="fs-3 text-orange mt-5">{element.icon}</h1>
                                        <h1 className="fs-3">{element.title}</h1>
                                        <h1 className="fs-3 mt-4">{element.p}</h1>
                                    </div>

                                </>


                            )
                        })
                    }



                </div>

            </div>
        </>
    )
};


export default Service;