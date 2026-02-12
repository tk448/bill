'use client'
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import Menu from "./ui/Menu";

export default function Hero() {
    const [tgl, setTgl] = useState(false);

    return (
        <div className="hero">
            <div className={`${!tgl ? 'hidden' : 'bg-surface text-txt absolute top-0 left-0 w-full min-h-full md:hidden'}`}>

                <div className="bg-bg text-txt-muted px-4 py-1 flex justify-between items-center">
                    <span>Navbar</span>
                    <FaRegWindowClose
                        onClick={() => setTgl(false)}
                        size={30}
                        className="hover:bg-hvr p-1 rounded"
                    />
                </div>
                <Menu />{/* MENU */}

            </div>
            <div className="flex justify-between items-center px-4 py-2">
                <div className="uppercase font-extrabold text-2xl">

                    <span className="text-primary">tk</span>
                    <span> bills</span>

                </div>
                <div className="hidden rounded-2xl fixed top-2 left-1/2 -translate-x-1/2 bg-txt text-bg md:block lg:top-4">
                    <Menu />{/* MENU */}
                </div>
                <div className="flex justify-center items-center gap-4">

                    <div className="hidden md:flex justify-center items-center gap-4">
                        <span className="underline capitalize text-surface hover:bg-txt-muted p-1 rounded">sign-up</span>
                        <button>sign-in</button>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-bg-surface md:hidden">

                        <CgProfile
                            size={35}
                            className="hover:bg-txt-muted p-1 rounded text-primary"
                        />
                        <IoMenu
                            onClick={() => setTgl(true)}
                            size={40}
                            className="hover:bg-txt-muted p-1 rounded"
                        />

                    </div>

                </div>
            </div>
        </div>
    )
}
