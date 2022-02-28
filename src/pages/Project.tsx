import styled, { keyframes } from 'styled-components';
import Intro from '../components/Intro';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Left = styled.section`
  position: relative;
  width: 50%;
  height: 100%;
`;

const WaveBase = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #00b4d8;
  border-bottom-left-radius: 5px;
`;

const Drift = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
`;

const Circle = styled.div`
  position: absolute;
  top: -170%;
  left: -50%;
  width: 1400px;
  height: 1400px;
  border-radius: 48%;
  background: #9ad0ec;
  transform-origin: 50% 48%;
  z-index: 3;
  animation: ${Drift} 11000ms infinite linear;
`;

const Circle2 = styled.div`
  position: absolute;
  top: -170%;
  left: -50%;
  width: 1400px;
  height: 1400px;
  border-radius: 48%;
  background: #90e0ef;
  transform-origin: 50% 48%;
  z-index: 2;
  animation: ${Drift} 7000ms infinite linear;
`;

const Circle3 = styled.div`
  position: absolute;
  top: -170%;
  left: -50%;
  width: 1400px;
  height: 1400px;
  border-radius: 48%;
  background: #caf0f8;
  transform-origin: 50% 48%;
  z-index: 1;
  animation: ${Drift} 9000ms infinite linear;
`;

const Title = styled.div`
  position: absolute;
  top: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 9;
`;

const Img = styled.img`
  width: 55%;
`;

const Right = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 50%;
  height: 100%;
  border-left: 5px solid #9ad0ec;
`;

const RightCover = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: #9ad0ec;
`;

const RightTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 1.25rem;
  background: #9ad0ec;
  color: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const CenterEmptyBox = styled.div`
  width: 30%;
  height: 50px;
  background: white;
`;

const LeftEmptyBox = styled.div`
  width: 35%;
  height: 50px;
  border-top-right-radius: 25px;
  background: white;
`;

const RightEmptyBox = styled.div`
  width: 35%;
  height: 50px;
  border-top-left-radius: 25px;
  background: white;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 70px;
  flex-direction: column;
  width: 95%;
  height: 75%;
  border: 1px solid blue;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const IntroTag = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  font-size: 1.1rem;
  font-weight: 550;
  color: #9ad0ec;
  letter-spacing: 1px;
  cursor: pointer;
  :after {
    content: '';
    position: absolute;
    right: 50%;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: #00b4d8;
    transition: all 0.5s;
  }

  :before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: #00b4d8;
    transition: all 0.5s;
  }

  :hover:after {
    width: 50%;
  }

  :hover:before {
    width: 50%;
  }
`;

const Project: React.FunctionComponent = () => {
  return (
    <Container>
      <Left>
        <Title>
          <Img src="./underthesea.png" />
        </Title>
        <WaveBase>
          <Circle></Circle>
          <Circle2></Circle2>
          <Circle3></Circle3>
        </WaveBase>
      </Left>
      <Right>
        <RightCover>
          <LeftEmptyBox />
          <CenterEmptyBox>
            <RightTitle>서비스소개</RightTitle>
          </CenterEmptyBox>
          <RightEmptyBox />
        </RightCover>
        <Content>
          <Intro />
        </Content>
        <BottomContainer>
          <IntroTag>서비스소개</IntroTag>
          <IntroTag>사육정보</IntroTag>
          <IntroTag>수조관리</IntroTag>
          <IntroTag>정보공유</IntroTag>
        </BottomContainer>
      </Right>
    </Container>
  );
};

export default Project;
