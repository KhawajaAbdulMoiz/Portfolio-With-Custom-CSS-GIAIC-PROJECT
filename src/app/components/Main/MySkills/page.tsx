
import React from 'react'
import Image from 'next/image';
import './style.css';

function Skills() {
    return (
        <div>
            <h1 className='skls'>My Skills</h1>
            <div className="section1">
                <div className="skill1">
                <h2 className='lang'>Python</h2>
                    <Image
                        src="/python.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                  
                </div>
                <div className="skill1">
                    <h2 className='lang'>Flask</h2>
                    <Image
                        src="/flask.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />


                </div>
                <div className="skill1">
                    <h2 className='lang'>React</h2>
                    <Image
                        src="/react.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />

                </div>
                <div className="skill1">
                    <h2 className='lang'>C++</h2>
                    <Image
                        src="/c++.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />

                </div>

            </div>
            <div className="section1">
                <div className="skill1">
                <h2 className='lang'>HTML</h2>
                    <Image
                        src="/html.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                  
                </div>
                <div className="skill1">
                    <h2 className='lang'>CSS</h2>
                    <Image
                        src="/css.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />


                </div>
                <div className="skill1">
                    <h2 className='lang'>Typescript</h2>
                    <Image
                        src="/TS.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />

                

                </div>

            </div>
            <div className="section1">
           
                <div className="skill1">
                    <h2 className='lang'>Next JS</h2>
                    <Image
                        src="/next.png"
                        alt="image"
                        width={70}
                        height={70}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />

                </div>
              
                <div className="skill1">
                    <h2 className='lang'>Javascript</h2>
                    <Image
                        src="/js.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />

                </div>
               

            </div>
            <div className="section1">
                
              
            <div className="skill1">
                <h2 className='lang'>My Sql</h2>
                    <Image
                        src="/mysql.png"
                        alt="image"
                        width={60}
                        height={60}
                        className="my-skills"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                  
                </div>
               

            </div>

        </div>
    )
}

export default Skills
