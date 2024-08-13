import { useState, useEffect } from 'react'; // Import useState and useEffect hooks from React
import styled from 'styled-components'; // Import styled-components for styling

// Import images
import car1 from '../../public/a.jpg';
import car2 from '../../public/ab.jpg';
import car3 from '../../public/ac.jpg';
import car4 from '../../public/ad.jpg';

// Array of imported images
const IMAGES = [car1, car2, car3, car4];
const CAPTIONS = [
    {
        topic: "The Bottoni Project",
        message: "No more shame. No more stigma. No more silence!"
    },
    {
        topic: "Early Detection",
        message: "Regular self-exams can save lives. Know the signs, act early."
    },
    {
        topic: "Support and Resources",
        message: "You are not alone. Join our community and find the support you need."
    },
    {
        topic: "Awareness Campaigns",
        message: "Spread the word and help us raise awareness about male breast cancer."
    }
];





// Styled component for the slider container
const SliderContainer = styled.div`
  height: 100vh;
  width: 100vw;
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
const SliderItem = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: 0.5s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(to top, #000 10%, transparent);
  }
`;

// Styled component for the content within each slider item
const Content = styled.div`
  position: absolute;
  color: #fff;
  left: 10%;
  top: 40%;
  width: 500px;
  max-width: 80%;
  z-index: 3;
  


  h2 {
    text-transform: uppercase;
    font-size: 40px;
    margin: 0;
    color: var(--blueText)
  }
  p{
    font-size: 20px;
  }
`;

// Styled component for the arrows
const Arrows = styled.div`
  position: absolute;
  top: 40%;
  right: 50px;
  z-index: 100;

  button {
    background-color: #eee5;
    border: none;
    font-family: monospace;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: x-large;
    color: #eee;
    transition: 0.5s;

    &:hover {
      background-color: #eee;
      color: black;
    }
  }
`;

// Styled component for the thumbnails
const Thumbnail = styled.div`
  position: absolute;
  bottom: 50px;
  z-index: 11;
  display: flex;
  gap: 10px;
  width: 100%;
  height: 250px;
  padding: 0 50px;
  box-sizing: border-box;
  overflow: auto;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 0;
  }

  &:hover{
    cursor: pointer;
  }
`;

// Styled component for each thumbnail item
const ThumbnailItem = styled.div`
  width: 150px;
  height: 220px;
  filter: brightness(${(props) => (props.active ? 1.5 : 0.5)});
  transition: 0.5s;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to keep track of the active index

  // useEffect to set up an interval for auto-sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to manually set the active slider item
  const showSlider = (index) => {
    setActiveIndex(index);
  };

  return (
    <SliderContainer>
      <DarkOverlay />
      {/* Loop through the IMAGES array and create a SliderItem for each image */}
      {IMAGES.map((image, index) => (
        <SliderItem key={index} active={index === activeIndex}>
          {/* Display the image */}
          <img src={image} alt={`Slider ${index + 1}`} />
          {/* Display the content (captions) for the active slider item */}
          <Content active={index === activeIndex}>
            <h2>{CAPTIONS[index].topic}</h2>
            <p>{CAPTIONS[index].message}</p>
          </Content>
        </SliderItem>
      ))}
      {/* Arrows for navigating the slider */}
      <Arrows>
        {/* Button to show the previous slider item */}
        <button onClick={() => showSlider((activeIndex - 1 + IMAGES.length) % IMAGES.length)}>{'<'}</button>
        {/* Button to show the next slider item */}
        <button onClick={() => showSlider((activeIndex + 1) % IMAGES.length)}>{'>'}</button>
      </Arrows>
      {/* Thumbnails for each slider item */}
      <Thumbnail>
        {IMAGES.map((image, index) => (
          <ThumbnailItem key={index} active={index === activeIndex} onClick={() => showSlider(index)}>
            {/* Display the thumbnail image */}
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </ThumbnailItem>
        ))}
      </Thumbnail>
    </SliderContainer>
  );
};

export default Slider;