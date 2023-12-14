import React from "react";
import './style.css'
import { useState } from "react";

function Footer() {


    return (
        <>
            <div className="container-fluid bg-dark mt-5">
                <div className="container">
                    <div className="row">
                        < div className="col-3 my-5">
                        <h1 className="text-yellow  fs-4">GP</h1>
                        <h2 className="text-light fs-4">A108 Adam Street
                            NY 535022, USA</h2>
                        <h2 className="text-light fs-4">
                            Phone: +1 5589 55488 55
                            Email: info@example.com</h2>
                        <div class="btn1">
                            <div class="btn">
                             <i class="fa-brands fa-twitter fs-3 text-yellow"></i>
                            </div>
                            <div class="btn">
                            <i class="fa-brands fa-facebook fs-3 text-yellow"></i>
                            </div>
                            <div class="btn">
                            <i class="fa-brands fa-instagram fs-3 text-yellow"></i>
                            </div>
                            <div class="btn">
                            <i class="fa-brands fa-skype fs-3 text-yellow"></i>
                            </div>
                           
                            <div class="btn">
                             <i class="fa-brands fa-linkedin fs-3 text-yellow"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 my-5">
                        <h1 className="text-yellow ms-4 fs-4">Useful Links</h1>
                        <ul class="jay">
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>HOME</li>
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>ABOUT US</li>
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>SERVICE</li>
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>TERF OF SERVICE</li>
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>PRIVECY POLICY</li>
                        </ul>
                    </div>

                    <div className="col-3 my-5">
                        <h1 className="text-yellow ms-4 fs-4">Useful Links</h1>
                        <ul class="jay">
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>WEB DESIGN</li>
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>WEB DEVLOPMENT</li>
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>MANAGMENT</li>
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>MARKETING</li>
                            <li className="text-light fs-4"><i class="fa-solid fa-greater-than text-yellow me-2 fs-5"></i>GRAPHIC DESIGN</li>
                        </ul>
                    </div>

                    <div className="col-3 my-5">
                        <h1 className="text-yellow ms-4 fs-4">Our Newsletter</h1>
                        <h2 className="text-light fs-4">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</h2>
                        <input type="email"className="pt-1"/><button className="bg-warning text-dark fs-5 fw-bold">SUBSCRIBE</button>
                    </div>
                </div>
            </div>

        </div >
        </>
    )
};


export default Footer;