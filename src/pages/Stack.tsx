import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 100%;
  background: #9ad0ec;
`;

const MiddleSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 33.4%;
  height: 100%;
  .mid {
    color: #9ad0ec;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  width: 100%;
  margin-top: 10px;
  height: 50px;
`;

const ImgCover = styled.div`
  border: 2px solid #1572a1;
  border-radius: 10px;
  display: flex;
  width: 85%;
  height: 25%;
  background: white;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 20%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 90%;
  gap: 5px;
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  height: 20%;
  color: #1572a1;
`;

const Content = styled.div`
  width: 100%;
  height: 80%;
  /* border: 1px solid blue; */
`;

const Stack: React.FunctionComponent = () => {
  return (
    <Container>
      <Section>
        <Title>Programming language</Title>
        <InnerBox>
          <ImgCover>
            <Img src="./JS.png" />
            <Box>
              <Name>JavaScript</Name>
              <Content>
                프로그래밍 언어로는 HTML, CSS와 함께 자바스크립트를 활용한
                코드를 작성할 수 있습니다.
              </Content>
            </Box>
          </ImgCover>
        </InnerBox>
      </Section>
      <MiddleSection>
        <Title className="mid">Framework & Library</Title>
        <InnerBox>
          <ImgCover>
            <Img src="./logo192.png" />
            <Box>
              <Name>React</Name>
              <Content>
                React를 이용하여 프로젝트를 진행하였습니다. React Hook을
                기반으로한 코드를 작성할 수 있습니다.
              </Content>
            </Box>
          </ImgCover>
          <ImgCover>
            <Img src="./redux.png" />
            <Box>
              <Name>Redux</Name>
              <Content>
                복잡한 상태관리가 필요한 경우 Redux의 store를 이용하여 props
                드릴링 문제를 해결할 수 있습니다.
              </Content>
            </Box>
          </ImgCover>
          <ImgCover>
            <Img src="./styled-component.png" />
            <Box>
              <Name>Styled-Component</Name>
              <Content>
                CSS-IN-JS인 스타일드 컴포넌트를 활용하여 컴포넌트 스타일링을
                진행하였습니다.
              </Content>
            </Box>
          </ImgCover>
        </InnerBox>
      </MiddleSection>
      <Section>
        <Title>Tools</Title>
        <InnerBox>
          <ImgCover>
            <Img src="./github.png" />
            <Box>
              <Name>Github</Name>
              <Content></Content>
            </Box>
          </ImgCover>
          <ImgCover>
            <Img src="./git.png" />
            <Box>
              <Name>Git</Name>
              <Content>
                부트캠프에서 진행한 프로젝트 모두 git을 활용한 협업을 통한
                버전관리를 진행하였습니다.
              </Content>
            </Box>
          </ImgCover>
        </InnerBox>
      </Section>
    </Container>
  );
};

export default Stack;
