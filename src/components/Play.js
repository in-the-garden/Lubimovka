import React from 'react';

export function Play(props) {
    return(
        <article className="play">
            <h2 className="play__title">{props.play.title}</h2>
            <p className="play__author">{`${props.play.author_lastName}`}<br/>{`${props.play.author_firstName}`}</p>
            <p className="play__info">{`${props.play.city}`}<br/>{`${props.play.year}`}</p>
        </article>
    )
}