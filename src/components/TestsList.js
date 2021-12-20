import styled from 'styled-components';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { colors } from '../globalStyles';

export default function TestsList({ itens }) {
  return (
    <StyledUl>
      {itens.length > 0 ? (
        itens.map((item, index) => (
          <>
            <h2 key={index}>{item?.category}</h2>
            {item.tests.map((test, index2) => (
              <li key={index2}>
                <span>{test?.name}</span>
                <span>{test.discipline?.name}</span>
                <a href={test.link}>
                  <PdfIcon />
                </a>
              </li>
            ))}
          </>
        ))
      ) : (
        <span>No tests found</span>
      )}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: ${colors.listBackground};
  h2 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
  }
  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
    }
  }
`;
const PdfIcon = styled(AiOutlineFilePdf)`
  font-size: 24px;
  color: ${colors.pfdIcon};
`;
