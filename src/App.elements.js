import styled from 'styled-components';

export const Calculator = styled.div`
  position: absolute;
  cursor: move;
  display: grid;
  color: #ededed;
  /* width: 100%; */
  grid-template-columns: 210px;
  grid-template-rows: 72px 220px;
  border-radius: 10px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: stretch;
  opacity: 98%;
`;

export const Display = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.15rem 0.8rem;
  background-color: #3f4040;
`;
export const NumberContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  font-size: 55px;
  font-family: 'Roboto_Thin';
  background-color: inherit;
`;

export const Buttons = styled.div`
  background-color: #3e4040;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;
export const Button = styled.button`
  color: #ededed;
  border: ${(props) => (props.selected ? '1px solid black' : 'none')};
  border-right: 0;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &.modifier {
    background-color: #505151;
    &:active {
      background-color: #7a7b7b;
    }
  }
  &.operation {
    background-color: #ff9e1c;
    font-size: 1.2em;
    &:active {
      opacity: 0.8;
    }
  }
  &.number {
    background-color: #7a7b7b;
    &:active {
      background-color: #afb0b0;
    }
  }
  &.zero {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
export const Img = styled.img`
  background-color: transparent;
  width: 28px;
  height: 28px;
`;

export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const SocialIconLink = styled.a`
  color: #333;
  height: auto;
  width: auto;
`;
