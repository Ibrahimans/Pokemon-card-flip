import React, { Component } from 'react'

const cardJSONs = require("./Cards.json");
console.log(cardJSONs[0]);

// const url = cardJSONs[0].image;
// console.log(url);

// const cardStyle = {
//     height: '8.8cm',
//     width: '6.6cm'

//   }

export class FrontCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const url = this.props.card.image;

        return (
            <div className='frontDiv'>
                {/* <button style={{ height: '2vw', width: '8vw', position: 'absolute', right: '2vw' }} >Redeem</button> */}
                <div className="overlay"></div>
                <button className="btn">Redeem</button>
                <img src={url} className= 'frontImg' alt=""></img>
            </div>
        )
    }
}

export default FrontCard
