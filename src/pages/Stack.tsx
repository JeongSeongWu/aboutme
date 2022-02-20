import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px dashed red;
`;

const Stack: React.FunctionComponent = () => {
  return <Container></Container>;
};

export default Stack;
