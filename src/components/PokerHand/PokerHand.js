import React from 'react';
import Card from '../Card/Card';
import './PokerHand.css';

class PokerHand extends React.Component {
    render() {
        const { player, playerIndex, playerName, onChange } = this.props;
        const cards = player.hand.split(' ');
        const playerNumber = playerIndex + 1;
        return (
            <>
            <div>
                player {playerNumber}: <input value={playerName} onChange={(event) => onChange(event, playerIndex)} type='text' />
            </div>
            <div className='pokerhand'>
                <div className='playername'>hand: </div>
                <div className='pokerhand'>
                    {cards.map((card, index) => <Card key={index} cardname={card} />)}
                </div>
            </div>
            </>
        )
    }
}

export default PokerHand;