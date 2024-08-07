import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 1.2rem;
    width: 100%;
    background-color: #264653;
`;

export const Title_Img = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: 8rem;
`

export const Img = styled.img`
    height: 60px;
    widht: 60px;
`;

export const Title = styled.div`
    font-family: 'Teko', sans-serif;
    font-size: 64px;
    font-weight: semibold;
    color: white;
`;

export const Button = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 12px;
    font-family: 'Source Code Pro', sans-serif;
    font-size: 12px;
    color: #264653;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        border: 0.5px solid #fefae0;
        border-radius: 5px;
        transition: all 0.5s ease;
        background-color: #2A9D8F;
        color: white;
    }
`;


export const ButtonGroup = styled.div`
    display: flex;
    gap: 24px;
    margin-right: 8rem;
`;
