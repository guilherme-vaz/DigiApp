import styled from "styled-components";

export const Form = styled.form`
    // background-color: lightblue;
    margin: auto 0;
`;

export const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 1rem;
    text-align: center;
    margin-bottom: 36px;
    color: #383838;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const Label = styled.label`
    font-family: 'Source Code Pro', sans-serif;
    font-size: 12px;
    margin-bottom: 8px;
    color: #383838;
`;

export const Input = styled.input`
    border: 1px solid #d1d1d1;
    padding: 8px;
    border-radius: 3px;
`;

export const ForgetPassword = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    margin-top: 8px;
    display: flex;
    justify-content: start;
    width: 100%;
    color: lightblue;
    text-decoration: underline;
`;

export const Button = styled.button`
    padding: 12px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    background-color: #264653;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #089c7e;
        transition: all 0.5s ease;
    }
`;

export const Footer = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    text-align: center;
    margin-top: 12px;
    color: #383838;
    opacity: 0.6;
`