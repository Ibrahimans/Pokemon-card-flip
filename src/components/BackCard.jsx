import React, { Component } from 'react'

const backCard ='https://i.pinimg.com/originals/38/63/b3/3863b3b0eef1d377a59adfbf3918346e.png'
console.log(backCard);

// const cardStyle = {
//     height: '8.8cm',
//     width: '6.6cm'
//   }
export class BackCard extends Component {
    render() {
        return (
            <div>
                <img src={backCard} className= "back" alt=""></img>
            </div>
        )
    }
}

export default BackCard
