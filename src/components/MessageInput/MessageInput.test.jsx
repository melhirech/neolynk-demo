import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import MessageInput from './MessageInput';

const addMessageMock = jest.fn();

describe('MessageInput', () => {
  it('should be defined', () => {
    expect(MessageInput).toBeDefined();
  });

  it('should have an input, a switch and a button', () => {
    render(<MessageInput dispatchAddMessage={() => null} loading={false} />);

    const messageInput = screen.getByTestId('message-input');
    const visibilitySwitch = screen.getByTestId('visibility-switch');
    const button = screen.getByTestId('submit-button');

    expect(messageInput).toBeDefined();
    expect(visibilitySwitch).toBeDefined();
    expect(button).toBeDefined();
  });

  it('should not submit empty message', async () => {
    render(<MessageInput dispatchAddMessage={addMessageMock} loading={false} />);

    const messageInput = screen.getByTestId('message-input');
    const button = screen.getByTestId('submit-button');

    // fill message with empy spaces
    await fireEvent.change(messageInput, { target: { value: '   ' } });
    await fireEvent.click(button);

    expect(addMessageMock).toBeCalledTimes(0);
  });

  it('should submit valid message', async () => {
    render(<MessageInput dispatchAddMessage={addMessageMock} loading={false} />);

    const messageInput = screen.getByTestId('message-input');
    const button = screen.getByTestId('submit-button');

    // fill message with empy spaces
    await fireEvent.change(messageInput, { target: { value: 'This is a valid message.' } });
    await fireEvent.click(button);

    expect(addMessageMock).toBeCalledTimes(1);
  });
});
