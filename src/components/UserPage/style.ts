import styled from "styled-components";

export const Container = styled.div`
    margin: 5rem auto;
    width: 800px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: tomato;
`;

export const ProfileCard = styled.div`
    display: flex;
    gap: 20px;
    padding: 2rem;
    background-color: tomato;
`;

export const Image = styled.img`
    height: 100px;
    width: 100px;
    border: none;
    border-radius: 50%;
`;

export const ProfileInfo = styled.div`
    background-color: pink;
    line-height: 2rem;
`
