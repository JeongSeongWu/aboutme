import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  margin: 30px;
`;

const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
  background: #9ad0ec;
`;

const Text = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  margin-bottom: 15px;
  /* font-family: 'Bebas Neue', cursive; */
  color: white;
  width: 100%;
`;

const Contact = styled.div`
  display: flex;
  width: 90%;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  border-bottom: 2px solid #e5e5e5;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 30%;
  flex-direction: column;
  margin-top: 5px;
`;

const Cover = styled.div`
  display: flex;
  width: 90%;
`;

const Title = styled.div`
  width: 40%;
  color: white;
  font-size: 1.25rem;
`;

const Value = styled.div`
  width: 60%;
  color: white;
  font-size: 1.1rem;
`;

const A = styled.a`
  width: 60%;
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: 100%;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1572a1;
  width: 95%;
  height: 50px;
  margin-top: 20px;
  border-bottom: 2px solid #e5e5e5;
`;

const BottomCover = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

const SelfDesc = styled.div`
  width: 95%;
  height: 200px;
  margin-top: 10px;
  font-size: 1.1rem;
  line-height: 120%;
`;

const Career = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1572a1;
  width: 49%;
  height: 50px;
  border-bottom: 2px solid #e5e5e5;
`;

const Language = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1572a1;
  width: 49%;
  height: 50px;
  border-bottom: 2px solid #e5e5e5;
`;

const Left = styled.ul`
  width: 49%;
  height: 100%;
`;

const Right = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 49%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  height: 200px;
  margin-top: 10px;
`;

const Content = styled.li`
  font-size: 1.1rem;
  list-style-position: inside;
  p {
    font-size: 1rem;
    margin-top: 5px;
    padding-left: 20px;
  }
`;

const About: React.FunctionComponent = () => {
  return (
    <Container>
      <SideBar>
        <Img src="/me.png" />
        <Text>Front_End 정성우</Text>
        <Contact>Contact</Contact>
        <Info>
          <Cover>
            <Title>Mobile</Title>
            <Value>010 8946 4127</Value>
          </Cover>
          <Cover>
            <Title>E-mail</Title>
            <Value>aqualist2011@naver.com</Value>
          </Cover>
          <Cover>
            <Title>Blog</Title>
            <A
              href="https://bead-banon-6af.notion.site/Code-Aquarium-4a389278f4be40a58c2b07780328aaa0"
              target="_blank"
            >
              codeAquarium
            </A>
          </Cover>
          <Cover>
            <Title>Github</Title>
            <A href="https://github.com/JeongSeongWu" target="_blank">
              JeongSeongWu
            </A>
          </Cover>
        </Info>
      </SideBar>
      <Desc>
        <SubTitle>About me</SubTitle>
        <SelfDesc>
          동물원에서 근무하며 관상어 사육 및 전시 기획업무를 해왔습니다. 업무의
          특성상 방문객이나 관상어 사육을 원하는 사람들에게만 서비스를 제 공할
          수 있는 점이 항상 아쉬웠습니다. 일상생활에서 늘 사용하는 모바일이나
          웹서비스를 생각해보면 별다른 제약 없이 많은 사람이 서비스를 이용할 수
          있다는 점이 매력적이었고 웹개발 분야로의 전업을 결정하게 되었습니다.
          <br />
          <br />
          코드스테이츠 파이널 프로젝트에서는 기존의 경험을 살려 Javascript와
          React를 활용하여 관상어사육 입문자들을 위한 정보 제공과 관리 기 능이
          추가된 웹서비스를 만들었습니다. 관리기능을 제외하면 모두 비회원으로
          이용이 가능한 서비스로 만들었습니다. <br />
          <br />왜 서비스가 이용되고 무엇이 부족한지 알아가는 개발자가 되고자
          합니다. 사용하는 언어의 작동원리를 알고, 서비스의 취약점을 보완하려면
          어떤 방법이나 라이브러리가 필요한지 파악하여 지속적으로 문제해결력을
          키워나가는 개발자로 성장하겠습니다.
        </SelfDesc>
        <BottomCover>
          <Career>Career</Career>
          <Language>Education</Language>
        </BottomCover>
        <ContentContainer>
          <Left>
            <Content>
              <b>(주)히든스페이스</b> 2019.02 ~ 2021.05
              <p>- 전시생물(어류) 관리 및 전시 기획</p>
            </Content>
          </Left>
          <Right>
            <Content>
              <b>코드 스테이츠(Code States)</b> 2021.08 ~ 2022.01
              <p>- React 기반 SPA학습</p>
              <p>- Node.js 기반 서버기능구현 학습</p>
              <p>- 꾸준한 페어프로그래밍으로 협업능력 강화</p>
              <p>- 총 2회의 협업 프로젝트 진행</p>
              <p>- AWS를 사용한 배포실습 진행</p>
              <p>- 팀장으로 프로젝트를 진행하며 구성원간 문제 해결</p>
            </Content>
            <Content>
              <b>안양대학교</b>(해양생명공학과) 졸업 2012.03 ~ 2019.03
            </Content>
          </Right>
        </ContentContainer>
      </Desc>
    </Container>
  );
};

export default About;
