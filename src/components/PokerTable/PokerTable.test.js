import React from 'react';
import { render, screen } from '@testing-library/react';
import PokerTable from './PokerTable';

test('render the table', () => {
    render(<PokerTable />);
    const label = screen.getByText('Draw Poker Table');
    expect(label).toBeInTheDocument();
});