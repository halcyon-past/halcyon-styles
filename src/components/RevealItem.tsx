// src/components/RevealItem.tsx
import React from 'react';

// RevealItem component (for images or cards)
const RevealItem: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default RevealItem;
