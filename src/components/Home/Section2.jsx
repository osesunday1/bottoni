import styled from 'styled-components';
import {FaDiagnoses , FaBookMedical} from 'react-icons/fa';
import { FaFileMedicalAlt } from "react-icons/fa";

const SectionContainer = styled.div`
  background-color: var(--blueText2);
  padding: 50px 0;
`;

const ServiceWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const ServiceItem = styled.div`
  display: grid;
  grid-template-columns: 26% 1fr;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
 
`;

const IconWrapper = styled.div`
  background-color: var(--blueText3);
  border-radius: 50%;
  padding: 10px;
  display: inline-block;
  width: 40px;
  height: 40px;
`;

const ServiceTitle = styled.h3`
  color: #273036;
  font-size: 20px;
  margin: 15px 0 10px;
  text-align: left;
`;

const ServiceDescription = styled.p`
  color: var(--darkColor);
  font-size: 14px;
  text-align: left;
`;

const ReadMore = styled.a`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

const Section2 = () => {
  return (
    <SectionContainer>
      <ServiceWrapper>
        <ServiceItem>
          <IconWrapper>
            <FaFileMedicalAlt  size={32} color="#125f5a" />
          </IconWrapper>
          <div>
          <ServiceTitle>Risk Factors</ServiceTitle>
          <ServiceDescription>
          5-year net survival rate for women is 89%, whereas the rate for men is only 76%...
          </ServiceDescription>
          <ReadMore href="#">Read More →</ReadMore>
          </div>
        </ServiceItem>
        <ServiceItem>
          <IconWrapper>
            <FaBookMedical   size={32} color="#125f5a" />
          </IconWrapper>
          <div>
          <ServiceTitle>Educational Resources</ServiceTitle>
          <ServiceDescription>
          Researchers estimate that approximately 260 men will be diagnosed with male breast cancer in Canada this year, and 55 of them will die...
          </ServiceDescription>
          <ReadMore href="#">Read More →</ReadMore>
          </div>
        </ServiceItem>
        <ServiceItem>
          <IconWrapper>
            <FaDiagnoses  size={32} color="#125f5a" />
          </IconWrapper>
          <div>
          <ServiceTitle>Survivor Stories</ServiceTitle>
          <ServiceDescription>
          Hearing from those who have survived male breast cancer can be inspiring and encouraging. Survivor stories highlight the importance of early detection...
          </ServiceDescription>
          <ReadMore href="#">Read More →</ReadMore>
          </div>
        </ServiceItem>
      </ServiceWrapper>
    </SectionContainer>
  );
};

export default Section2;