import React from 'react';
import { Author } from './Author';

export function Letter(props) {
    
    //const selectedAuthors = props.authorsInfo.filter(authorInfo => {
    //   return authorInfo.firstLetter = props.letter;
    //})
    //console.log(selectedAuthors);

    return(
        <article className="author">
            <h2 className="author__letter">{props.letter}</h2>
            <Author />
        </article>
    )
}