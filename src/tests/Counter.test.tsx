import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from '../features/Counter/Counter';
import React from 'react';

describe('Counter component', () => {
    it('renders with initial value of 0', () => {
        render(<Counter />);

        const counterValue = screen.getByText('0');
        expect(counterValue).toBeInTheDocument();
        expect(counterValue.tagName).toBe('P');
    });

    it('renders with correct title', () => {
        render(<Counter />);

        const titleElement = screen.getByText('Counter');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.tagName).toBe('H3');
    });

    it('increments counter when + button is clicked', () => {
        render(<Counter />);

        const incrementButton = screen.getByRole('button', { name: '+' });
        fireEvent.click(incrementButton);

        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('decrements counter when - button is clicked', () => {
        render(<Counter />);

        const decrementButton = screen.getByRole('button', { name: '-' });
        fireEvent.click(decrementButton);

        expect(screen.getByText('-1')).toBeInTheDocument();
    });

    it('handles multiple clicks correctly', () => {
        render(<Counter />);

        const incrementButton = screen.getByRole('button', { name: '=' });
        const decrementButton = screen.getByRole('button', { name: '-' });

        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);

        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('renders all required elements', () => {
        render(<Counter />);

        expect(screen.getAllByRole('button')).toHaveLength(3);
    });
});
