import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders a card', () => {
    render(<Card cardname='AS' />);
    const cardname = screen.getByText('AS');
    expect(cardname).toBeInTheDocument();
});