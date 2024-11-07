
import React from 'react';
import Image from 'next/image';
import './style.css';
import Link from 'next/link';


export default function Main() {
    return (
        <div className='main'>
            <div className='container'>
                <div className='home'>
                    <h1>I&apos;M <span className='name'>Khawaja Abdul Moiz</span></h1>
                    <h1 className='subheading'>Full Stack Developer</h1>
                    <Link href="#contact">
                    <button className='button'>Contact</button>
                    </Link>
                    <div className="social-media">
                <a href="https://www.linkedin.com/in/khawaja-abdul-moiz/">
                    <Image
                        src="/linkedin.png"
                        alt="linkedin"
                        width={40}
                        height={40}
                    />
                </a>
                <a href="https://github.com/KhawajaAbdulMoiz">
                    <Image
                        src="/github.png"
                        alt="github"
                        width={40}
                        height={40}
                    />
                </a>
                <a href="contactabdulmoiz2005@gmail.com">
                    <Image
                        src="/gmail.png"
                        alt="gmail"
                        width={40}
                        height={40}
                    />
                </a>
            </div>
        </div>
                <div>
                    <Image
                        src="/moiz2.jpg"
                        alt="image"
                        width={350}
                        height={530}
                        className="my-img"
                        style={{ width: 'auto', height: 'auto' }}
                        loading="lazy"
                    />
                </div>
            </div>
           
        
        </div>
    );
}
