import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  /* border: 2px solid #e5e5e5; */
  @media screen and (min-width: 1450px) {
    margin-top: 7%;
  }
`;

const Left = styled.section`
  width: 50%;
  height: 80%;
  display: flex;
  position: relative;
  /* border: 1px solid red; */
  /* border: 2px solid #e5e5e5; */
  /* background: #eeeeee; */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* box-shadow: -5px 7px 5px rgba(0, 0, 0, 0.1); */
  /* border-radius: 5px; */
  align-items: center;
  flex-direction: column;
  :before {
    content: '';
    position: absolute;
    bottom: 0%;
    right: 0%;
    width: 0px;
    height: 0px;
    border-top: 50px solid #eeeeee;
    border-right: 50px solid transparent;
    /* -webkit-box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3); */
    /* -moz-box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3); */
    box-shadow: -3px -3px 3px rgba(0, 0, 0, 0.1);
  }
  :after {
    content: '';
    position: absolute;
    bottom: 0%;
    right: 0%;
    width: 0px;
    height: 0px;
    border-bottom: 49px solid white;
    border-left: 49px solid transparent;
    /* box-shadow: 3px 3px 3px white; */
  }
  @media screen and (min-width: 1450px) {
    height: 70%;
  }
`;

const LeftTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  height: 40px;
  color: #1572a1;
  font-size: 1.25rem;
  font-weight: bold;
  font-style: italic;
  /* border-bottom: 1px solid red; */
`;

const LeftContent = styled.div`
  padding: 0 10px;
  width: 100%;
  font-size: 1rem;
  line-height: 135%;
  /* border: 1px solid red; */
`;

const Triangle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 50px solid #eeeeee;
  border-right: 50px solid transparent;
`;

const Right = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  /* border: 1px solid red; */
  align-items: center;
  flex-direction: column;
`;

const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin-top: 35%;
  /* transform: translate(0, -50%); */
  border: 5px solid #9ad0ec;
  /* background: #9ad0ec; */
  border-radius: 50%;
`;

const GuideCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  font-weight: bold;
  top: -25%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 120px;
  height: 120px;
  color: white;
  /* background: white; */
  /* background: #9ad0ec; */
  background: #577bc1;
  /* border: 5px solid #577bc1; */
  /* border: 5px solid #9ad0ec; */
  border: 5px solid white;
  border-radius: 50%;
  letter-spacing: 1px;
`;

const ManageCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  font-weight: bold;
  left: -30%;
  bottom: -10%;
  width: 120px;
  height: 120px;
  color: white;
  /* background: white; */
  /* background: #9ad0ec; */
  background: #577bc1;
  /* border: 5px solid #577bc1; */
  /* border: 5px solid #9ad0ec; */
  border: 5px solid white;
  border-radius: 50%;
  letter-spacing: 1px;
`;

const PostCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  font-weight: bold;
  right: -30%;
  bottom: -10%;
  width: 120px;
  height: 120px;
  color: white;
  /* background: white; */
  /* background: #9ad0ec; */
  background: #577bc1;
  /* border: 5px solid #577bc1; */
  /* border: 5px solid #9ad0ec; */
  border: 5px solid white;
  border-radius: 50%;
  letter-spacing: 1px;
`;

const Intro: React.FunctionComponent = () => {
  return (
    <Container>
      <Left>
        <LeftTitle>Under The Sea</LeftTitle>
        <LeftContent>
          Under The Sea는 물고기를 키우는 것이 처음인 사람들이 사육정보부터
          수조관리까지 도와주는 서비스 입니다. 가이드페이지에서는 사육에 필요한
          용품부터 질병정보 등을 확인할 수 있고, 게시판으로 이동하여 다른
          회원들이 작성한 게시글을 볼 수 있습니다.
          <br />
          <br />
          자신의 수조를 등록하고 오늘 피딩한 먹이의 종류와 횟수, 환수량을
          기록하여 피딩 및 환수 스케쥴을 관리해보세요! 주간 관리 목표를
          달성하시면 수조의 레벨이 상승합니다!
          {/* <Triangle /> */}
        </LeftContent>
      </Left>
      <Right>
        <CircleContainer>
          <GuideCircle>사육정보</GuideCircle>
          <ManageCircle>수조관리</ManageCircle>
          <PostCircle>정보공유</PostCircle>
        </CircleContainer>
      </Right>
    </Container>
  );
};

export default Intro;
