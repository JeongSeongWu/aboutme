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
  #pos3:checked ~ ul {
    margin-left: -200%;
  }
  #pos4:checked ~ ul {
    margin-left: -300%;
  }

  #pos1:checked ~ .bullet label:nth-child(1),
  #pos2:checked ~ .bullet label:nth-child(2),
  #pos3:checked ~ .bullet label:nth-child(3),
  #pos4:checked ~ .bullet label:nth-child(4) {
    background: #666;
  }
`;

const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  /* border: 2px solid #e5e5e5; */
  width: calc(100% * 4);
  list-style: none;
  transition: 1s;
`;

const ImgContainer = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  width: calc(100% / 4);
  height: 100%;
`;

const Img = styled.img`
  width: 93%;
  height: 100%;
`;

const Content = styled.li`
  list-style: none;
  width: calc(100% / 4);
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

const Manage: React.FunctionComponent = () => {
  return (
    <Container>
      <Input type="radio" name="pos" id="pos1" defaultChecked />
      <Input type="radio" name="pos" id="pos2" />
      <Input type="radio" name="pos" id="pos3" />
      <Input type="radio" name="pos" id="pos4" />
      <Ul>
        <ImgContainer>
          <Img src="./aquarium.png" />
        </ImgContainer>
        <ImgContainer>
          <Img src="./calendar.png" />
        </ImgContainer>
        <ImgContainer>
          <Img src="./record.png" />
        </ImgContainer>

        <Content>
          <h2>수조관리</h2>
          <h3>1. 수조등록하기</h3>
          <p>
            자신이 관리하는 수조들을 등록해주세요. 수조의 가로, 세로,
            높이(수위)를 입력하면 부피를 계산하여 표기합니다. 수조의 별명과
            테마로 함께 설정해보세요!
          </p>
          <h3>2. 피딩, 환수기록하기</h3>
          <p>
            오늘 피딩한 먹이의 종류와 횟수를 입력하고 몇L를 환수했는지
            기록해두고 수조관리를 효율적으로 해보세요!
          </p>
          <h3>3. 키우는 물고기추가하기</h3>
          <p>
            수조에서 사육중인 물고기를 기록하여 어떤 어종이 몇마리 있는지
            기록해주세요!
          </p>
          <h3>4. 주간 수족관 레벨업</h3>
          <p>
            일일 피딩 2회, 주간환수 1회를 만족하면 수족관의 레벨이 올라가고
            이미지속 물고기들이 늘어납니다!
          </p>
        </Content>
      </Ul>
      <P className="bullet">
        <label htmlFor="pos1">1</label>
        <label htmlFor="pos2">2</label>
        <label htmlFor="pos3">3</label>
        <label htmlFor="pos4">4</label>
      </P>
    </Container>
  );
};

export default Manage;
