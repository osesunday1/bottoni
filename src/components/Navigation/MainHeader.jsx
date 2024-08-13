import { useEffect, useState } from "react";
import styled from "styled-components";



const StyledMainHeader = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ scrolled }) => (scrolled ? 'var(--blue4)' : 'transparent')};
  transition: background 0.3s ease-in-out;
  padding: 10 1rem;
  z-index: 5;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const MainHeader = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <StyledMainHeader  scrolled={scrolled}>{children}</StyledMainHeader>;
};

export default MainHeader;