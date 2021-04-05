import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Message from './Message';

const mockMessage = {
  name: 'John Doe',
  picture: 'https://i.pravatar.cc/150',
  timestamp: Date.now(),
  content: 'This is a short message.',
  isPublic: true,
};

describe('Message', () => {
  it('should be defined', () => {
    expect(Message).toBeDefined();
  });

  it('should have a name, avatar and a content', () => {
    render(<Message message={mockMessage} />);

    const name = screen.getByText(/john doe/i);
    const content = screen.getByText(/short message/i);
    const avatar = screen.getByTestId('avatar');

    expect(name).toBeDefined();
    expect(content).toBeDefined();
    expect(avatar).toBeDefined();
  });
});
