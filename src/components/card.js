import React from 'react'

const Card = function (props) {
  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <img src={props.image} className="db w-100 br2 br--top" alt={props.text} />
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">{props.title}</h1>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">
            {props.children}
          </p>
        </div>
      </article>
  )
}

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired
}

export default Card
