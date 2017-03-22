import React from 'react'
import BasicButton from '../components/basic-button'
import Card from '../components/card'
import { connector } from '../store'

const Quote = function(props) {
  return (
    <div>
      <header className="ma0 pt2 bg-purple white bb b--black tc">
        <h1>{props.title}</h1>
      </header>
      <center className="mt4">
        <BasicButton color="dark-blue" backgroundColor="white" onClick={props.getQuote}>Get Quote</BasicButton>
      </center>
      {props.quote && <Card title="Quote" image="http://lorempixel.com/400/200/nature/" >
        {props.quote.quoteText + ' - ' + props.quote.quoteAuthor}
      </Card>}
    </div>
  )
}

export default connector(Quote)
