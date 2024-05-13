import styled from "styled-components";

type ModalContainer = {
    isOpen: boolean,
}

export const DarkBg = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: rgba(160, 160, 160, 0.8);
`;

export const Centered = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Modal = styled.div<ModalContainer>`
    display:  ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const CloseButton = styled.button`
    padding: 12px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
`;