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
  position: relative;
  width: 50%;
  height: 100%;
  border-left: 5px solid #9ad0ec;
`;

const RightSidebar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  width: 20%;
  height: 100%;
  background: #9ad0ec;
  /* border: 1px solid red; */
`;

const SideButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: white;
  width: 80%;
  height: 30px;
  border-radius: 5px;
  list-style: none;
  cursor: pointer;
  :hover {
    background: #e5e5e5;
  }
`;

const RightTitle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 100px solid #9ad0ec;
  border-right: 100px solid transparent;
`;

const Triangle2 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 100px solid #9ad0ec;
  border-left: 100px solid transparent;
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
      <Right></Right>
    </Container>
  );
};

export default Project;
