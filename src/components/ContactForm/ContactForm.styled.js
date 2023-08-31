import styled from "styled-components";

export const FormContacts = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
min-width: 260px;
margin-bottom: 20px;
`;

export const LabelContacts = styled.label`
display: flex;
flex-direction: column;
gap: 5px;
margin-bottom: 10px;
`;

export const FormButton = styled.button`

    display: block;
    max-width: 169px;
    align-self: center;
    padding: 5px 10px;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.04em;
    color: inherit;
    border: 1px solid gray;
    border-radius: 4px;
    background-color: white;

    &:hover, &:focus 
    {
    color: #4d5ae5;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);}


`;