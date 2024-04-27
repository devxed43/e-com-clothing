import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin: auto;
    width: 100%;
    height: 15%;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid black;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

}
`;
