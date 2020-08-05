import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import UIfx from 'uifx';
// import FlipSound from './Car';
const cardJSONs = require("./Cards.json");

// const flipSound = new UIfx({asset: FlipSound});


async function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), timeout)
    })
}

const cardsPerPack = 8;

const randGenerator = () => {
    console.log("randGenerator")
    let nums = [];

    for (let i = 0; i < cardsPerPack; i++) {
        nums.push(Math.floor(Math.random() * cardJSONs.length))
    }
    return nums;
}

const randList = randGenerator();

export class CardPack extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: []
        };
    }

    createCards = () => {
        let { isFlipped } = this.state;
        let cards = [];

        for (let i = 0 ; i < cardsPerPack ; i++) {
            // console.log(cardJSONs.length)
            // if (i == cardsPerPack) {
            //     break;
            // }
            // console.log('this.randList');
            // console.log(this.randList);
            let card = cardJSONs[randList[i]];
            console.log('isFlipped');
            console.log(isFlipped);
            cards.push(
                <PokemonCard card={card} isFlipped={isFlipped[i]} index={i} />
            )
        }
        return cards;
    }


    flipCard = (i) => {
        let { isFlipped } = this.state;
        isFlipped[i] = !isFlipped[i];
        // flipSound.play();
        this.setState({ isFlipped });
    }

    flipCards = async () => {
        for (let i in cardJSONs) {
            this.flipCard(i);
            await delay(100);
        }
    }

    render() {
        const { isFlipped } = this.state;

        return (
            <div style={{ verticalAlign: 'middle' }}>
                <div className="cardPack">
                    {this.createCards()}
                </div>
                <div style = {{padding:'10vh 10vh'}}>
                    <button onClick={this.flipCards} style= {{height:'4vh', width:'10vw', fontSize:'3vh'}}>Flip Cards</button>
                </div>
            </div>
        
        )
    }
}

export default CardPack
