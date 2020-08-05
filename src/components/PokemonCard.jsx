import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

// flips all cards - probably has to do with all cards sharing same isFlipped bool
// push a boolean in the list?
class PokemonCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
    }

    render() {
        const { isFlipped, card } = this.props;
        return (
            <div>
                <div className="card">
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <div>
                            <BackCard />
                        </div>

                        <div>
                            <FrontCard card={card} />
                        </div>
                    </ReactCardFlip>
                </div>
            </div>
        )
    }
}

export default PokemonCard

