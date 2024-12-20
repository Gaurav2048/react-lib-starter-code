// src/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return <div>{`Text is ${text}`}</div>;
};

export default MyComponent;
