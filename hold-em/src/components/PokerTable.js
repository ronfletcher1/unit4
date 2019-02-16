import React, {Component} from 'react'
import Deck from '../utilityClasses/Deck';
import GameButtons from './GameButtons';
import PokerHand from './PokerHand'

class PokerTable extends Component{
    constructor(){
        super();
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        console.log(this.cards)
        this.state = {
            playersHand: [],
            dealersHand: []
        }
        this.prepDeck = this.prepDeck.bind(this);
    }
 
// this is a custom method. Not coming from "React"
// we can't put this in our Deck class, because it's 
// specific to our Hold em game

    prepDeck(){
        this.cards.deck.shift();
        const card2 = this.cards.deck.shift();
        const card3 = this.cards.deck.shift();
        const card4 = this.cards.deck.shift();
        const card5 = this.cards.deck.shift();
        // deck is now only 48, because we mutated this.deck a
        // when we ran shift
        this.setState({
            playersHand: [card2,card4],
            dealersHand: [card3,card5]
        })
    }


    render(){
        return(
            <div className="col-sm-12 the-table">
              <PokerHand cards={this.state.dealersHand} />
              <PokerHand cards={this.state.playersHand} />
              <GameButtons dealFunction={this.prepDeck} />
            </div>
        )
    }
}

export default PokerTable;