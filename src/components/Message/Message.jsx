import React from 'react';
import { shape, string } from 'prop-types'; import {
  ListItem, ListItemAvatar, Avatar, ListItemText, Chip,
} from '@material-ui/core';
import styled from 'styled-components';
import moment from 'moment';

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Time = styled.span`
  color: grey;
  font-size: 0.8em;
  margin-right: 8px;
`;

const Message = ({ message }) => {
  const {
    content, name, picture, timestamp, isPublic,
  } = message;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Avatar" src={picture} data-testid="avatar" />
      </ListItemAvatar>
      <ListItemText
        primary={(
          <Header>
            <p>{name}</p>
            <div>
              <Time>{moment(timestamp).fromNow()}</Time>
              <Chip
                color={isPublic ? 'default' : 'primary'}
                label={isPublic ? 'Public' : 'Private'}
                size="small"
              />
            </div>
          </Header>
        )}
        secondary={content}
      />
    </ListItem>
  );
};

Message.propTypes = {
  message: shape({
    content: string,
  }).isRequired,
};

export default Message;
