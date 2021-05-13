import React from 'react';
import './PokerTable.css';
import Player from '../../Models/Player';
import PokerHand from '../PokerHand/PokerHand';
import { GetPokerHands } from '../../Data/GetData';

class PokerTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {pokerPlayers: [], playerOne: '', playerTwo: ''};
    }

    GetPlayerHands = () => {
        const players = [];
        players.push(new Player('Bazooka Joe', 'QD AC 7S JS 2S', '', ''));
        players.push(new Player('Tarzan', '10S QS 6D 7C 5C', '', ''));
        return players;
    };

    onClick = async () => {
        const players = await GetPokerHands(this.state.playerOne, this.state.playerTwo);
        console.log(JSON.stringify(players));
        this.setState({pokerPlayers: players});
    }

    onChange = (event, player) => {
        if (player === 0) {
            this.setState({playerOne: event.target.value})
        } else {
            this.setState({playerTwo: event.target.value});
        }
    }

    render() {
        const { playerOne, playerTwo } = this.state;
        const players = this.GetPlayerHands();
        return (
            <div className='pokertable'>
                <h1>Draw Poker Table</h1>
                <div>
                    {players.map((player, index) => {
                        return <PokerHand 
                            key={index}  
                            player={player} 
                            playerIndex={index} 
                            playerName={index === 0 ? playerOne : playerTwo} 
                            onChange={this.onChange} 
                        />;
                    })}
                </div>
                <div>
                    <button onClick={this.onClick}>Deal</button>
                    <button onClick={() => {}}>Who Won</button>
                </div>
            </div>
        );
    }
}

export default PokerTable;