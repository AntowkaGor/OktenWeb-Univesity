import React from 'react';
import styles from './Card.module.css'

const CardHeader =(props)=>{
    const { image } = props;
    let style = {
        backgroundImage: 'url(' + image + ')',
    };
    return(
        <header style={style} id={image} className={styles.cardHeader}>
            <h4 className="card-header--title">News</h4>
        </header>
    )
}

const CardBody=(props)=>{
    return(
        <div className={styles.cardBody}>
            <p className="date">{'March 23 2021'}</p>

            <h2>{props.title}</h2>

            <p className="body-content">{props.text}</p>
        </div>
    )
}


export function Card() {
    return (
        <article className={styles.card}>
            <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
            <CardBody title={'What happened in Thialand?'}
                      text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
        </article>
    )
}

