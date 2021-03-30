import React from 'react';

function Cards (props) {
    return (
        <div>
            <ul>
                <li>
                    <h2>{props.title}</h2>
                    <div>
                        <div>
                            <button><svg height={10px} width={10px}</button>
                        </div>
                        <img src="#" alt="{props.title}"/>
                    </div>
                    <p>{props.text}</p>
                </li>
                <li>
                    <h2>{props.title}</h2>
                    <div>
                        <div>
                            <button><svg height={10px} width={10px}</button>
                        </div>
                        <img src="#" alt="{props.title}"/>
                    </div>
                    <p>{props.text}</p>
                </li>
                <li>
                    <h2>{props.title}</h2>
                    <div>
                        <div>
                            <button><svg height={10px} width={10px}></button>
                        </div>
                        <img src="#" alt="{props.title}"/>
                    </div>
                    <p>{props.text}</p>
                </li>
            </ul>
        </div>
    );
}

