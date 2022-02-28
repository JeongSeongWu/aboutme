import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin-top: 10%;
  border: 5px solid #9ad0ec;
  border-radius: 50%;
`;

const GuideCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 120px;
  height: 120px;
  background: white;
  /* background: #9ad0ec; */
  /* border: 5px solid #577bc1; */
  border: 5px solid #9ad0ec;
  border-radius: 50%;
`;

const ManageCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  left: -30%;
  bottom: -25%;
  width: 120px;
  height: 120px;
  background: white;
  border: 5px solid #9ad0ec;
  border-radius: 50%;
`;

const PostCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  right: -30%;
  bottom: -25%;
  width: 120px;
  height: 120px;
  background: white;
  border: 5px solid #9ad0ec;
  border-radius: 50%;
`;

const Intro: React.FunctionComponent = () => {
  return <Container></Container>;
};

export default Intro;
