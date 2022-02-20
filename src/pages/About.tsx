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

const SelfDesc = styled.div`
  width: 95%;
  height: 200px;
  margin-top: 10px;
  border: 1px dashed red;
`;

const Something = styled.div`
  width: 95%;
  height: 200px;
  margin-top: 10px;
  border: 1px dashed red;
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
        <SelfDesc></SelfDesc>
        <Something></Something>
      </Desc>
    </Container>
  );
};

export default About;
