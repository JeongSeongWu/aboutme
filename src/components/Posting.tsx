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
    font-size: 1.15rem;
    line-height: 130%;
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

const Posting: React.FunctionComponent = () => {
  return (
    <Container>
      <Input type="radio" name="pos" id="pos1" defaultChecked />
      <Input type="radio" name="pos" id="pos2" />
      <Ul>
        <ImgContainer>
          <Img src="./게시판.png" />
        </ImgContainer>
        <Content>
          <h2>정보공유</h2>
          <p>
            회원가입을 하지 않은 유저도 게시물조회가 가능합니다. 회원으로 등록한
            유저는 게시물을 작성할 수 있고 다양한 경험과 의견을 공유할 수
            있습니다. 댓글을 작성할 수 있으며, 마이페이지로 이동하여 내가 작성한
            게시물과 댓글, 등록된 수조를 확인할 수 있습니다.
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

export default Posting;
