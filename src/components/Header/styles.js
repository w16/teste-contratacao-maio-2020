import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 10px;
  background: #17b5ff;

  img {
  max-height: 70px;
  margin-left: 20px;

  &:hover {
        opacity: 0.8;
    }
  }
`