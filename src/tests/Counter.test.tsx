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

        const incrementButton = screen.getByRole('button', { name: '+' });
        const decrementButton = screen.getByRole('button', { name: '-' });

        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);

        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('renders all required elements', () => {
        render(<Counter />);

        /* expect(container.querySelector('h3')).toBeInTheDocument();
        expect(container.querySelector('p')).toBeInTheDocument(); */
        expect(screen.getAllByRole('button')).toHaveLength(2);
    });
});
/*  test('decrements counter when - button is clicked', () => {
     const user = userEvent.setup();
     render(<Counter />);
 
     const decrementButton = screen.getByRole('button', { name: '-' });
     user.click(decrementButton);
 
     expect(screen.getByText('-1')).toBeInTheDocument();
 });
 
 test('multiple clicks work correctly', () => {
     const user = userEvent.setup();
     render(<Counter />);
 
     const incrementButton = screen.getByRole('button', { name: '+' });
     const decrementButton = screen.getByRole('button', { name: '-' });
 
     user.click(incrementButton);
     user.click(incrementButton);
     user.click(decrementButton);
 
     expect(screen.getByText('1')).toBeInTheDocument();
 }); */



/* describe('Button component', () => {
  const onClickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with text', () => {
    render(<Button text="Click Me" onClick={onClickMock} />);

    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  it('renders with an icon', () => {
    render(<Button icon="icon-url.png" onClick={onClickMock} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', 'icon-url.png');
  });

  it('calls onClick function when clicked', () => {
    render(<Button text="Click Me" onClick={onClickMock} />);

    const buttonElement = screen.getByText(`Click Me`);
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders without crashing when no props are passed', () => {
    const { container } = render(<Button onClick={onClickMock} />);

    expect(container).toBeInTheDocument();
  });

  it('renders with both text and an icon', () => {
    render(
      <Button text="Click Me" icon="icon-url.png" onClick={onClickMock} />,
    );

    const imgElement = screen.getByRole('img');
    const buttonElement = imgElement.parentElement;

    expect(buttonElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'icon-url.png');
  });
}); */