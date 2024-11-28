import styled from "styled-components";

const About = styled.section`
  display: flex;
  flex-direction: row;
  padding: 2em;
  gap: 1em;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default About;