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

export const InputWrapper = styled.form`
  box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  padding: 10px;
  border-radius: 5px;
  background-color: #edf3fb;
  input {
    outline: none;
  }
  label {
    color: grey;
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
