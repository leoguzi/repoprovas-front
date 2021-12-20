import styled from 'styled-components';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { PacmanLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { colors } from '../globalStyles';

export default function TestsList({ itens, loading }) {
  return (
    <StyledUl>
      {!loading && itens.length > 0 ? (
        itens?.map((item, index) => (
          <>
            <h2 key={index}>{item?.category}</h2>
            {item.tests?.map((test, index2) => (
              <li key={index2}>
                <span>{test?.name}</span>
                <span>{test.discipline?.name || test.professor.name}</span>
                <a href={test.link}>
                  <PdfIcon />
                </a>
              </li>
            ))}
          </>
        ))
      ) : (
        <>
          <PacmanLoader
            css={override}
            color={colors.themeSecondary}
            loading={loading}
          />
          {!loading && <NoneFound>No tests found :(</NoneFound>}
        </>
      )}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  width: 100%;
  position: relative;
  min-height: 350px;
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

const NoneFound = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PdfIcon = styled(AiOutlineFilePdf)`
  font-size: 24px;
  color: ${colors.pfdIcon};
`;

const override = css`
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
`;
