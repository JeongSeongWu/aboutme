import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import About from './About';
import Stack from './Stack';
import Project from './Project';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 2000px;
  padding: 50px;
  height: 100vh;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 90%;
`;

const NavBar = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 10%;
`;

const Readme = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 1.25rem;
  color: white;
  left: 0;
  bottom: 0;
  width: 200px;
  height: 40px;
  background-color: ${({ page }: { page: string }) =>
    page === 'about' ? `#9AD0EC` : `#eeeeee`};
  border: ${({ page }: { page: string }) =>
    page === 'about' ? `5px solid #9AD0EC` : `5px solid #eeeeee`};
  cursor: pointer;
`;

const StackContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 1.25rem;
  color: white;
  left: 200px;
  bottom: 0;
  width: 200px;
  height: 40px;
  background-color: ${({ page }: { page: string }) =>
    page === 'stack' ? `#9AD0EC` : `#eeeeee`};
  border: ${({ page }: { page: string }) =>
    page === 'stack' ? `5px solid #9AD0EC` : `5px solid #eeeeee`};
  cursor: pointer;
`;

const ProjectContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 1.25rem;
  color: white;
  left: 400px;
  bottom: 0;
  width: 200px;
  height: 40px;
  background-color: ${({ page }: { page: string }) =>
    page === 'project' ? `#9AD0EC` : `#eeeeee`};
  border: ${({ page }: { page: string }) =>
    page === 'project' ? `5px solid #9AD0EC` : `5px solid #eeeeee`};
  cursor: pointer;
`;

const Disc = styled.div`
  width: 100%;
  height: 90%;
  border: 5px solid #9ad0ec;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Main = () => {
  const [page, setPage] = useState<string>('about');
  const turnOnAbout = () => {
    setPage('about');
  };
  const turnOnStack = () => {
    setPage('stack');
  };
  const turnOnProject = () => {
    setPage('project');
  };

  return (
    <Container>
      <Title></Title>
      <InnerContainer>
        <NavBar>
          <Readme page={page} onClick={turnOnAbout}>
            About
          </Readme>
          <StackContainer page={page} onClick={turnOnStack}>
            Stack
          </StackContainer>
          <ProjectContainer page={page} onClick={turnOnProject}>
            Project
          </ProjectContainer>
        </NavBar>
        <Disc>
          {page === 'about' && <About />}
          {page === 'stack' && <Stack />}
          {page === 'project' && <Project />}
        </Disc>
      </InnerContainer>
    </Container>
  );
};

export default Main;
