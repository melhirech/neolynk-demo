import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lobby from 'components/Lobby';
import MessageInput from 'components/MessageInput';
import styled from 'styled-components';

import { fetchMessages, addMessage } from 'store/actions/messages';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const InnerWrapper = styled.div`
    width: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 32px;
    @media (max-width: 680px) {
      width: 100%;
      padding: 16px;
    }
`;

const Messages = () => {
  const dispatch = useDispatch();
  const messagesStore = useSelector(({ messages }) => messages);

  useEffect(() => {
    fetchMessages()(dispatch);
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <Lobby
          messages={messagesStore.data}
          loading={messagesStore.fetchingMessages}
          dispatchFetchMessages={(filter) => fetchMessages(filter)(dispatch)}
        />
        <MessageInput
          dispatchAddMessage={(msg) => addMessage(msg)(dispatch)}
          loading={messagesStore.addingMessage}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Messages;
