import  { useState } from 'react';
import styled from 'styled-components';

// Styled-components
const Container = styled.section`
  height: 50%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: var(--whiteColor); 
  background-image: radial-gradient(circle, var(--greyColor2) 1px, transparent 1px);
  background-size: 70px 70px;
`;

const Testimonial = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  padding: 50px 0;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 30px;
`;

const Image = styled.img`
  height: 170px;
  width: 170px;
  object-fit: cover;
  border-radius: 50%;
`;

const Text = styled.p`
  text-align: center;
  padding: 0 160px;
  font-size: 14px;
  font-weight: 400;
  color: #333;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const QuoteIcon = styled.i`
  font-size: 30px;
  color: #4070f4;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Job = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #333;
`;

const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  ${({ prev }) => (prev ? 'left: 10px;' : 'right: 10px;')}
  transform: translateY(-50%);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: ${({ prev }) => (prev ? "'←'" : "'→'")};
    font-size: 20px;
    color: var(--blue4);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationBullet = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'var(--greyColor)' : 'var(--blue4)')};
  margin: 0 5px;
  cursor: pointer;
`;

const Comments = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.',
      name: 'Dr. Panuganty',
      job: 'Manager',
      imgSrc: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878731/bottani/what-makes-a-man-a-man-1_cyimv9.jpg',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.',
      name: 'Marnie Lotter',
      job: 'Human Resource',
      imgSrc: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878766/bottani/360_F_242000451_i5W8qBEWBw5hthTWgPTogYYl8qxIX4f5_yo2bus.jpg',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.',
      name: 'Dave Bottoni',
      job: 'Counsellor',
      imgSrc: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878891/bottani/ai-generated-professional-woman-in-front-of-blurred-background-with-other-employees-best-candidate-concept-photo_yoyzkf.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Container>
        <h1 style={{color:"var(--blue4)", textAlign:"center", padding:"10px", fontSize:"30px", letterSpacing:"5px", fontFamily:"sans-serif", marginTop:"10px"}}>PATRONS</h1>
      <Testimonial>
        <SliderContainer currentSlide={currentSlide}>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <Image src={slide.imgSrc} alt="" />
              <Text>{slide.text}</Text>
              <QuoteIcon className="bx bxs-quote-alt-left" />
              <Details>
                <Name>{slide.name}</Name>
                <Job>{slide.job}</Job>
              </Details>
            </Slide>
          ))}
        </SliderContainer>
        <NavBtn prev onClick={prevSlide}></NavBtn>
        <NavBtn onClick={nextSlide}></NavBtn>
        <Pagination>
          {slides.map((_, index) => (
            <PaginationBullet
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Pagination>
      </Testimonial>
    </Container>
  );
};

export default Comments;