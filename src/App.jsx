/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
    const animeRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from("#intro-bg", {
            xPercent: -100,
            delay: 0.5,
            duration: 1,
        })
            .from(["#intro-text-1", "#intro-text-2", "#intro-text-3"], {
                y: 70,
                opacity: 0,
                duration: 1.5,
                stagger: 0.5,
            })
            .to(["#intro-text-1", "#intro-text-2", "#intro-text-3"], {
                y: -70,
                opacity: 0,
                duration: 1.5,
                stagger: 0.5,
            })
            .to("#intro-bg", {
                xPercent: -100,
                duration: 1,
            })
            .from("#welcome-txt", {
                scale: 0,
                duration: 1,
                delay: 0.3,
                ease: "back.out(1.7)",
            });
    });

    return (
        <div className="relative" ref={animeRef}>
            <div
                id="intro-bg"
                className="absolute p-10 top-0 left-0 w-full h-screen bg-gray-100 text-black z-10 font-mulish space-y-4"
            >
                <h1
                    id="intro-text-1"
                    className="text-6xl font-bold overflow-hidden p-1"
                >
                    MERN-Stack Developer
                </h1>
                <h1
                    id="intro-text-2"
                    className="text-6xl font-bold overflow-hidden p-1"
                >
                    Frontend Developer
                </h1>
                <h1
                    id="intro-text-3"
                    className="text-6xl font-bold overflow-hidden p-1"
                >
                    Freelancer
                </h1>
            </div>
            <div className="h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
                <h1 id="welcome-txt" className="text-9xl font-bold font-mulish">
                    Welcome
                </h1>
            </div>
        </div>
    );
};

export default App;
