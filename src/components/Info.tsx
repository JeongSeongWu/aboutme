import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  #pos1:checked ~ ul {
    margin-left: 0;
  }
  #pos2:checked ~ ul {
    margin-left: -100%;
  }

  #pos1:checked ~ .bullet label:nth-child(1),
  #pos2:checked ~ .bullet label:nth-child(2) {
    background: #666;
  }
`;

const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  /* border: 2px solid #e5e5e5; */
  width: calc(100% * 2);
  list-style: none;
  transition: 1s;
`;

const ImgContainer = styled.li`
  list-style: none;
  width: calc(100% / 2);
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = styled.li`
  list-style: none;
  width: calc(100% / 2);
  height: 100%;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 20px;
  h2 {
    color: #1572a1;
    margin-bottom: 15px;
  }
  h3 {
    margin-bottom: 5px;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  display: none;
`;

const P = styled.p`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
  label {
    width: 15px;
    height: 15px;
    margin: 2px;
    border-radius: 10px;
    border: 2px solid #666;
    display: inline-block;
    background: #fff;
    font-size: 0;
    transition: 0.5s;
    cursor: pointer;
  }
`;

const Info: React.FunctionComponent = () => {
  return (
    <Container>
      <Input type="radio" name="pos" id="pos1" defaultChecked />
      <Input type="radio" name="pos" id="pos2" />
      <Ul>
        <ImgContainer>
          <Img src="./guide.png" />
        </ImgContainer>
        <Content>
          <h2>사육정보조회</h2>
          <h3>1. 기본정보</h3>
          <p>
            물고기를 구입하기 전에 필요한 용품부터 원활한 소통을 위한 용어정리,
            물고기를 키우는데 필요한 작은 팁 등을 보실 수 있습니다.
          </p>
          <h3>2. 용품정보</h3>
          <p>
            스키머, 여과재 등의 용품은 입문자에게 생소합니다. 처음보는 용품들에
            관한 정보를 확인하고 사용법을 익혀보세요.
          </p>
          <h3>3. 질병정보</h3>
          <p>
            해수어에게 자주 발병하는 어병들에 관한 원인과 치료방법을
            확인해보세요. 조기에 빠르게 발견하면 완치하는데 도움이 됩니다.
          </p>
        </Content>
      </Ul>
      <P className="bullet">
        <label htmlFor="pos1">1</label>
        <label htmlFor="pos2">2</label>
      </P>
    </Container>
  );
};

export default Info;
