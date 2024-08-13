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
    question: 'What is SEO and why is it important?',
    answer: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.'
  },
  {
    question: 'What are the main components of SEO?',
    answer: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur sdsadadasdd as asdas dasddasd asdasdasda sdsd s das daasdasdasdas sdasdasdasdasdasdasdsd asd as dadasdasd asd asd asasasd aadada . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'What is the role of content in SEO?',
    answer: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.'
  },
  {
    question: 'What factors influence website ranking?',
    answer: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.'
  }
];

export default Questions;