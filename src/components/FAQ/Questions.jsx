import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
      width: 90%;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const QuestionItem = styled.div`
  margin-bottom: 0 rem;
  border-bottom: 1px solid #ddd;
`;

const QuestionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  font-size: 1.2rem;
`;

const QuestionContent = styled.div`
  padding: 0 1rem 1rem 1rem;
  font-size: 1rem;
  color: #666;
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
`;

const Icon = styled.span`
  font-size: 1.5rem;
`;

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <Title>FAQ</Title>
      {faqData.map((faq, index) => (
        <QuestionItem key={index}>
          <QuestionTitle onClick={() => toggleQuestion(index)}>
            {faq.question}
            <Icon>{openIndex === index ? '−' : '+'}</Icon>
          </QuestionTitle>
          
          <QuestionContent isOpen={openIndex === index}>
            {faq.answer}
          </QuestionContent>
        </QuestionItem>
      ))}
    </Container>
  );
};

const faqData = [
  {
    question: 'What is male breast cancer?',
    answer: 'Male breast cancer is a rare form of cancer that develops in the small amount of breast tissue found in men. While its much more common in women, men can develop breast cancer as well.'
  },
  {
    question: 'What are the symptoms of male breast cancer?',
    answer: 'Common symptoms include a lump or thickening in the breast tissue, changes to the skin covering the breast (dimpling, puckering, or redness), changes to the nipple (such as redness, scaling, or an inward turn), and discharge from the nipple.'
  },
  {
    question: ' What are the risk factors for male breast cancer?',
    answer: 'Risk factors include age (most common in men over 60), family history of breast cancer, genetic mutations (such as BRCA1 or BRCA2), exposure to radiation, high levels of estrogen, and certain conditions like Klinefelter syndrome.'
  },
  {
    question: 'Can men reduce their risk of breast cancer?',
    answer: 'While you cant prevent male breast cancer entirely, maintaining a healthy weight, limiting alcohol intake, and being aware of family history can help lower the risk. Regular check-ups and early detection are crucial.'
  }
];

export default Questions;