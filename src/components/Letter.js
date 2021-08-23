import React from 'react';
import { Author } from './Author';

export function Letter(props) {
    const sortedAuthors =
      props.authors.filter(arr => {
        if(arr[0] === props.letter) {
          return arr
        }
      })

    return(
        <article className="author">
            <h2 className="author__letter">{props.letter}</h2>
            {sortedAuthors.map((author, index) => <Author author={author} key={index}/>) }
        </article>
    )
}