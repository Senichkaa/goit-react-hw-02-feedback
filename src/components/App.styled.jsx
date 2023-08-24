import styled from '@emotion/styled';

export const ButtonsDiv = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;

  gap: 15px;
`;

export const Button = styled.button`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

  :hover {
    border: 2px solid #272626;
    background-color: #707070;
    color: #fff;
  }
`;

export const Sections = styled.section`
  text-align: center;
  margin-bottom: 20px;
`;

export const Header = styled.h2`
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
