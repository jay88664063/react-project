import React from "react";
import './style.css'
import { useState } from "react";

function Expert() {

    const data = [
        {
            image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-1.jpg",
            title: "Walter White",
            p: "Chief Executive Officer",
        },
        {
            image: "https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-2.jpg",
            title: "Sarah Jhonson",
            p: "Product Manager",
        },
        {
            image:"https://bootstrapmade.com/demo/templates/Gp/assets/img/team/team-3.jpg",
            title: "William Anderson",
            p: "CTO",
        },
        {
           image:"https://media.istockphoto.com/id/179284215/photo/manager-in-warehouse-checking-boxes.jpg?s=612x612&w=0&k=20&c=CfOfXahSCeua4s986qM1GNpWz5gBOKVMUBHffHvpeiI=",
            title: "Alex hales",
            p: "Designer",
        },
        {
            image:"https://media.istockphoto.com/id/665481590/photo/logistics-manager-warehouse-portrait.jpg?s=612x612&w=0&k=20&c=D-fZ8d-q64HFNUYI1YBgt5f8Lazo_I4dv7hwYf5YReY=",
             title: "David warner",
             p: "senior engineer",
         },
         {
            image:"https://media.istockphoto.com/id/536051931/photo/happy-young-businessman-with-digital-tablet-in-warehouse.jpg?s=612x612&w=0&k=20&c=tTVP-NfN4vWWxfU0uub1BLjaWhGJUcyB4YvUvM3zEZw=",
             title: "Joss butller",
             p: "MD",
         },
    ]



    const [product, setProduct] = useState(data)



    return (
        <>
            <div className="container mt-5">

                <h1 className="text-secondary">TEAM</h1>
                <h1>CHECK OUR TEAM</h1>

                <div className="row mt-4">
                    {
                        product.map((element) => {

                            return (
                                <>

                                    <div className="card1 col-3 text-start br-G mx-5 mt-4">
                                        <img src={element.image} width="100%" alt="" />
                                        <h1 className="fs-3 mt-2 fs-4">{element.title}</h1>
                                        <h1 className="fs-3 mb-2 fs-4 text-secondary">{element.p}</h1>
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


export default Expert;