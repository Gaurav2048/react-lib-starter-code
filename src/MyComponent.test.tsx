import React from "react";
import { render } from '@testing-library/react';
import MyComponent from "./MyComponent";

test('renders a button with the given label', () => {
  render(<MyComponent text="Dummy Text" />); // Render the component
});
