import React from 'react'

function books(props) {
  return (
    <div>
      <h1>This books are from the API</h1>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default books
