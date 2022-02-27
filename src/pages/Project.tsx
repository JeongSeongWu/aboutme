import styled, { keyframes } from 'styled-components';

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
  display: flex;
  justify-content: flex-end;
  justify-content: center;
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
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const CenterEmptyBox = styled.div`
  width: 40%;
  height: 50px;
  background: white;
`;

const LeftEmptyBox = styled.div`
  width: 30%;
  height: 50px;
  border-top-right-radius: 25px;
  background: white;
`;

const RightEmptyBox = styled.div`
  width: 30%;
  height: 50px;
  border-top-left-radius: 25px;
  background: white;
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
            <RightTitle></RightTitle>
          </CenterEmptyBox>

          <RightEmptyBox />
        </RightCover>
      </Right>
    </Container>
  );
};

export default Project;
