import React from 'react';
import { render, screen } from '@testing-library/react';
import PokerHand from './PokerHand';
import Player from '../../Models/Player';

test('render the table', () => {
    const player = new Player('Joe', 'AS KS QS JS 10S', '', '');
    render(<PokerHand player={player} playerIndex={0} playerName={'Joe'} onChange={() => {}}/>);
    const label = screen.getByText(/hand/i);
    expect(label).toBeInTheDocument();
});