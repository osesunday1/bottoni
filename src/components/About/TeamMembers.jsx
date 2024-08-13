import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width:100vw;
  height: 100%;
  background: var(--blue4);
  padding: 25px 0px;
  
`

const SliderWrapper = styled.div`
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${(props) => `translateX(-${props.translate}px)`};
  
 
`;

const Slide = styled.div`
  min-width: 300px;
  max-width: 300px;
  margin: 10px;
  height: auto;
  color: #fff;
  user-select: none;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const UserImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 40px;
  border: 3px solid #fff;
  padding: 4px;
  object-fit: cover;
`;

const UserName = styled.h2``;

const UserProfession = styled.p`
  font-size: 1.15rem;
  color: #e3e3e3;
  font-weight: 500;
  margin: 14px 0 40px;
`;

const MessageButton = styled.button`
  font-size: 1.25rem;
  padding: 10px 35px;
  color: #030728;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  background: #fff;
  border: 1px solid transparent;
  transition: 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #fff;
    color: #fff;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  ${(props) => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
`;

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 320; 

  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'Project Manager',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878731/bottani/what-makes-a-man-a-man-1_cyimv9.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson',
      },
    },
    {
      name: 'Bob Smith',
      role: 'Developer',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878766/bottani/360_F_242000451_i5W8qBEWBw5hthTWgPTogYYl8qxIX4f5_yo2bus.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/bobsmith',
        twitter: 'https://twitter.com/bobsmith',
      },
    },
    {
      name: 'Charlie Brown',
      role: 'Designer',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878950/bottani/EFINNY-Womens-Button-Down-Shirts-Long-Sleeve-Work-Dress-Shirts-Ladies-V-Neck-Collared-Business-Casual-Blouses-M_e68cc70c-966c-489b-9204-498393be61fd.70f9466746ac26e0d3ebbbe665e7cc8c_oolnrt.webp',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/charliebrown',
        twitter: 'https://twitter.com/charliebrown',
      },
    },
    {
      name: 'Diana Prince',
      role: 'Marketing Specialist',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878934/bottani/Womens-Corporate-wear-dress-shirt-artech-promotional-apparel-business-shirt-embroidery-toronto-kawartha-lakes-collingwood-midland-muskoka-innisfil-newmarket-barrie-orillia-model-clothing-work-uniforms_eqnm6r.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/dianaprince',
        twitter: 'https://twitter.com/dianaprince',
      },
    },
    {
      name: 'Ethan Hunt',
      role: 'Security Analyst',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878701/bottani/360_F_316726850_Kp5gHry52XIA0Cedl7b2K1remR1hJ8NU_glgszn.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/ethanhunt',
        twitter: 'https://twitter.com/ethanhunt',
      },
    },
    {
      name: 'Fiona Gallagher',
      role: 'HR Manager',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878549/bottani/360_F_142018449_yR0avsaJqbIx8NA47sINMoaxdtn1sPzh_m4vnbh.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/fionagallagher',
        twitter: 'https://twitter.com/fionagallagher',
      },
    },
    {
      name: 'George Clark',
      role: 'Data Scientist',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878384/bottani/10_xwxuja.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/georgeclark',
        twitter: 'https://twitter.com/georgeclark',
      },
    },
    {
      name: 'Hannah Wilson',
      role: 'Product Manager',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878934/bottani/Womens-Corporate-wear-dress-shirt-artech-promotional-apparel-business-shirt-embroidery-toronto-kawartha-lakes-collingwood-midland-muskoka-innisfil-newmarket-barrie-orillia-model-clothing-work-uniforms_eqnm6r.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/hannahwilson',
        twitter: 'https://twitter.com/hannahwilson',
      },
    },
    {
      name: 'Isaac Newton',
      role: 'Research Scientist',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878891/bottani/ai-generated-professional-woman-in-front-of-blurred-background-with-other-employees-best-candidate-concept-photo_yoyzkf.jpg',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/isaacnewton',
        twitter: 'https://twitter.com/isaacnewton',
      },
    },
    {
      name: 'Jessica Lee',
      role: 'Software Engineer',
      photo: 'https://res.cloudinary.com/dvh9j4utq/image/upload/v1722878811/bottani/corporate-lady-standing-her-arms-crossed-25159980_kvz5dn.webp',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/jessicalee',
        twitter: 'https://twitter.com/jessicalee',
      },
    },


  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : teamMembers.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < teamMembers.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Container>
      <h1 style={{color:"#fff", textAlign:"center", padding:"10px", fontSize:"30px", letterSpacing:"5px", fontFamily:"sans-serif"}}>TEAM MEMBERS</h1>
        <SliderWrapper>
          <ArrowButton direction="left" onClick={handlePrev}>
            &#9664;
          </ArrowButton>
          <SliderContainer translate={currentIndex * slideWidth}>
            {teamMembers.map((member, index) => (
              <Slide key={index}>
                <UserImage src={member.photo} alt="User Image" />
                <UserName>{member.name}</UserName>
                <UserProfession>{member.role}</UserProfession>
                <MessageButton>Message</MessageButton>
              </Slide>
            ))}
          </SliderContainer>
          <ArrowButton direction="right" onClick={handleNext}>
            &#9654;
          </ArrowButton>
        </SliderWrapper>
    </Container>
  );
};

export default TeamSlider;