import React, { useState } from 'react';
import {
  arrayOf, shape, bool, func,
} from 'prop-types';
import styled from 'styled-components';
import {
  IconButton, List, Divider, CircularProgress,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

import Message from 'components/Message';
import Preferences from 'components/Preferences';

const LobbyWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 32px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Messages = styled(List)`
  width: 100%;
`;

const FilterCaption = styled.span`
  padding: 0px 8px;
`;

const Lobby = ({ messages, loading, dispatchFetchMessages }) => {
  const [isOpen, openPreferences] = useState(false);

  const filterMessages = (filter) => {
    // call messages api woth filter
    dispatchFetchMessages(filter);

    // close modal
    openPreferences(false);
  };

  return (
    <LobbyWrapper>
      <Header>
        <Title>Messages:</Title>
        <IconButton
          color="primary"
          component="span"
          onClick={() => openPreferences(true)}
          data-testid="filter-button"
        >
          <FilterCaption>Filter</FilterCaption>
          <FilterListIcon />
        </IconButton>
      </Header>
      <Preferences open={isOpen} handleClose={filterMessages} />
      <MessagesWrapper>
        {loading && <CircularProgress data-testid="loader" />}
        {!loading && (
        <Messages data-testid="messages-list">
          {messages.map((messageData) => (
            <div key={messageData.id}>
              <Message message={messageData} />
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </Messages>
        )}
      </MessagesWrapper>
    </LobbyWrapper>
  );
};

Lobby.propTypes = {
  messages: arrayOf(shape({})).isRequired,
  loading: bool.isRequired,
  dispatchFetchMessages: func.isRequired,
};

export default Lobby;
