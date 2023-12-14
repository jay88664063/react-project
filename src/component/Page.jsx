import React from "react";
import './style.css'
import { useState } from "react";

function Page() {

    const data = [
        {
            title: "Est labore ad",
            p: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",

            title: "Harum esse qui",
            p: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",

            title: "Aut occaecati",
            p: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",

            title: "Beatae veritatis",
            p: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",

            image: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg&ga=GA1.2.868841471.1694442281&semt=sph'
        }
    ]



    const [product, setProduct] = useState(data)



    return (
        <>
            <div className="container">

                <div className="row">
                    {
                        product.map((element) => {

                            return (
                                <>

                                    <div className="col-6 mt-5">
                                        <img src={element.image} className="mt-5" alt="" />
                                    </div>

                                    <div className="col-6">

                                       <h1 className="fs-5 mt-5"><i class="fa-solid fa-microchip fs-2 me-3 text-orange"></i>{element.title}</h1>
                                       <h1 className="fs-5">{element.p}</h1>
                                       <h1 className="fs-5 mt-4"><i class="fa-solid fa-network-wired fs-2 me-3 text-orange"></i>{element.title}</h1>
                                       <h1 className="fs-5">{element.p}</h1>
                                       <h1 className="fs-5 mt-4"><i class="fa-solid fa-shield-halved fs-2 me-3 text-orange"></i>{element.title}</h1>
                                       <h1 className="fs-5">{element.p}</h1>
                                       <h1 className="fs-5 mt-4"><i class="fa-solid fa-terminal fs-2 me-3 text-orange"></i>{element.title}</h1>
                                       <h1 className="fs-5">{element.p}</h1>

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


export default Page;














