import React from 'react';
import classes from './Item.module.css'

export default function Item({name,details,image,href}) {
    return (
        <div className={classes.item}>
            <h1 className={classes.name}>{name}</h1>
            <img src={image}className={classes.img}alt="anything"/>
            <p className={classes.details}>{details}</p>
            <button className={classes.btn}>Read more</button>
            
        </div>
    )
}
