import styled from 'styled-components';
export const ListOfFilm = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Container = styled.section`
  padding: 20px;
  background-color: #fff;
`;

export const ErrorText = styled.p`
  margin-top: 20px;
  color: red;
`;
