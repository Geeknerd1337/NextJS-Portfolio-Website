import styled from '@emotion/styled';

const ResumeHolder = styled.div`
  width: 80%;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
`;

export default function Resume() {
  return (
    <ResumeHolder>
      <iframe src="resume.pdf" width="100%" height="100%" />
    </ResumeHolder>
  );
}
