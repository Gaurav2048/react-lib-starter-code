import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from "./MyComponent";

test('renders a button with the given label', () => {
  render(<MyComponent text="Click Me" />); // Render the component
});
