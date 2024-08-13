import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: var(--blue4);
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content2 = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 50%;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--blueText)
`;

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 10px;
  color: var(--blueText);
`;

const Description = styled.p`
  font-size: 16px;
  color: var(--whiteColor);
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 5px;
  text-align: justify;
`;



const ImageWrapper = styled.div`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Section3 = () => {
  return (
    <Section>
      <Content2>
          <Content>
            <Subtitle>The Bottoni Project</Subtitle>
            <Title>For Male Breast Cancer  in Canada</Title>
            <Description>
            Hi, my name is Brian Lynch and I am a very fortunate male breast cancer survivor! In 2021, I created the Bottoni Project to help Canadian men understand that we have breasts too and are therefore at risk for this very rare form of breast cancer found in men. The Bottoni Project is intended to help derail the shame, stigma, and the silence that prevents men from a healthy social and emotional recovery from male breast cancer.
            </Description>
            <Description>
            This failing is often rooted in the lack of awareness, attention and understanding of this disease within our healthcare system, the corporate sector, and in communities across our country. Our introduction of the blue and pink male breast cancer ribbon will help give this disease its own identity and can be used to promote the awareness of male breast cancer for men everywhere.
            </Description>
            
          </Content>
          <ImageWrapper>
            <Image src="/ccc.jpeg" alt="s" />
          </ImageWrapper>
      </Content2>
    </Section>
  );
};

export default Section3;