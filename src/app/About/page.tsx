import React from 'react'
import './style.css';
import Link from 'next/link';


function About() {
    return (
        <div className='container2' id='about'>
           <h2 className="about2">About Me</h2>
            <h2 className="about">
                I&apos;m currently pursuing a BSCS degree at Muhammad Ali Jinnah University. My journey in technology and software development <br /> is driven by a deep passion for learning and exploring new tools and frameworks. Over the past several months, I&apos;ve expanded my <br />skill set and practical experience across a broad spectrum of programming languages and frameworks.
            </h2 >
            <Link href={"/Khawaja-Abdul-Moiz(Resume).pdf"}>
            <button className='button' id='res'>Resume</button>
            </Link>
        </div>
    )
}

export default About
