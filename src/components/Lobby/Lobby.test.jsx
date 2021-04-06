import React from 'react';
import { render, screen } from '@testing-library/react';

import data from 'mocks/data.json';
import Lobby from './Lobby';

describe('Lobby', () => {
  it('should be defined', () => {
    expect(Lobby).toBeDefined();
  });

  it('should have a header with caption && filter button', () => {
    render(<Lobby messages={data} dispatchFetchMessages={() => null} loading={false} />);

    const caption = screen.getByText(/messages/i);
    const button = screen.getByTestId('filter-button');

    expect(caption).toBeDefined();
    expect(button).toBeDefined();
  });

  it('should show a loader when messages are loading', () => {
    render(<Lobby messages={data} dispatchFetchMessages={() => null} loading />);

    const loader = screen.getByTestId('loader');

    expect(loader).toBeDefined();
  });

  it('should show messages when done loading', () => {
    render(<Lobby messages={data} dispatchFetchMessages={() => null} loading={false} />);

    const messagesList = screen.getByTestId('messages-list');

    expect(messagesList).toBeDefined();
  });
});
