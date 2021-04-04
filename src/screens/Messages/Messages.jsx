import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Lobby from 'components/Lobby';
import MessageInput from 'components/MessageInput';
import styled from 'styled-components';

import data from 'mocks/data.json';
import axiosInstance from 'shared/axios';
import { fetchMessages } from 'store/actions/messages';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const InnerWrapper = styled.div`
    width: 664px;
    // height: 100vh;
    // overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const Messages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMessages()(dispatch);
  }, []);

  const addMessage = async (message) => {
    try {
      const response = await axiosInstance.post('/messages', message);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <Lobby messages={data} />
        <MessageInput dispatchAddMessage={addMessage} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Messages;
