import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const Container = styled.section`
  width:100vw;
  height: 100%;
  background: var(--blueText3);
  padding: 25px 0px;
  
`

const RezLifeContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;


const RezLifeSection = styled.section`
  margin-bottom: 30px;
  border-bottom: 1px solid var(--blue4);
  padding-bottom: 20px;

  h2 {
    font-size: 2em;
    color: #34495e;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5em;
    color: #16a085;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    line-height: 1.6;
  }

  ul,
  ol {
    margin: 15px 0;
    padding-left: 20px;
  }

  li {
    font-size: 1.2em;
    line-height: 1.6;
    color: #7f8c8d;
    margin-bottom: 10px;
  }

  strong {
    color: #2c3e50;
  }
`;

const RezLifeGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  max-height: 1000px;
  max-width: 1200px;
  margin: auto;
  justify-content: center;
`;



const ShowMission = styled(motion.div)`
  text-align: justify;
  margin: 0 auto;
  max-width: 1100px;
`;

const Tabs = styled.div`
  margin-bottom: 0px;

  ul {
    display: flex;
    list-style: none;
    padding: 5px;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }

  li {
  text-decoration: none;
  color: var(--greyColor2);
  height: 100%;
  transition: color ease-in 0.1s;
  font-size: 20px;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    color: var(--blue4);
  }

  &:active {
    cursor: pointer;
    color: var(--blue4);
  }
}

  .lineUnder {
    border-bottom: 1px solid var(--red-color);
    color: var(--red-color) !important;
    transition: ease-in 0.1s;
  }
`;

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-20px',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};


const Goals = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (

<Container>
    <RezLifeContainer>
      

      <RezLifeSection>
        <br />
        <h1 style={{color:"var(--blue4)", textAlign:"center", padding:"10px", fontSize:"30px", letterSpacing:"5px", fontFamily:"sans-serif"}}>OUR CORE GOALS</h1>
      </RezLifeSection>

      <RezLifeGrid>
        <RezLifeSection>
          <Tabs>
            <ul>
              <li
                onClick={() => updateToggle(1)}
                className={toggle === 1 ? 'lineUnder' : ''}
              >
                Support and Resources
              </li>
              <li
                onClick={() => updateToggle(2)}
                className={toggle === 2 ? 'lineUnder' : ''}
              >
                Counseling Services
              </li>
              <li
                onClick={() => updateToggle(3)}
                className={toggle === 3 ? 'lineUnder' : ''}
              >
                Research and Advocacy
              </li>
              <li
                onClick={() => updateToggle(4)}
                className={toggle === 4 ? 'lineUnder' : ''}
              >
                Awareness and Education
              </li>
            </ul>
          </Tabs>
          {toggle === 1 && (
            <ShowMission
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <p>
              To offer emotional and practical support to men diagnosed with breast cancer, including counseling services, support groups, and informational resources.
              </p>
              <p>
              To provide a platform for sharing personal stories and experiences, fostering a sense of community and solidarity among affected individuals and their families.
              </p>
            </ShowMission>
          )}

          {toggle === 2 && (
            <ShowMission
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <p>
                Our professional counseling team is here to support you through
                any challenges you may face. Whether you are dealing with
                academic stress, personal issues, or just need someone to talk
                to, our counselors are available to provide confidential and
                compassionate support.
              </p>
            </ShowMission>
          )}

          {toggle === 3 && (
            <ShowMission
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <p>
              To fund and support research initiatives focused on understanding the causes, prevention, and treatment of male breast cancer.
              </p>
              <p>
              To advocate for increased research funding and policy changes that prioritize male breast cancer as a significant health issue
              </p>
            </ShowMission>
          )}

          {toggle === 4 && (
            <ShowMission
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <p>
              To increase awareness about male breast cancer by providing comprehensive information on symptoms, diagnosis, and treatment options.
              </p> 
              <p>
              To educate the public, healthcare professionals, and policymakers about the importance of early detection and regular screenings for men.
              </p>
            </ShowMission>
          )}
        </RezLifeSection>
      </RezLifeGrid>
    </RezLifeContainer>
    </Container>
  );
};

export default Goals;