import styled from "styled-components";


const Container = styled.div`
  height: 6em;
  width: 100vw;
  background: #cf0202;
  display: block;
  margin: 0 auto;
  position: relative;
  z-index: 1; /* Lower z-index */
`;

const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4); // Semi-transparent dark background
  z-index: 2; // Make sure the overlay is above the images
`;

// Styled component for each slider item
const HeaderImage = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  transition: 0.5s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

 
`;

const AboutHead = () => {
  return (
    <Container>
        <DarkOverlay/>
        <HeaderImage>
            <img src="ddd.jpg" alt="" />
        </HeaderImage>

    </Container>
  );
}

export default AboutHead;