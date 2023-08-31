import styled from "styled-components";

export const ItemButton = styled.button`

    max-width: 169px;
    padding: 5px 10px;
    font-family: inherit;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.04em;
    color: inherit;
    border: 1px solid gray;
    border-radius: 4px;
    background-color: white;

    &:hover, &:focus 
    {
    color: #dbcd0b;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);}


`;

export const Item = styled.li`
display: flex;
gap: 20px;
justify-content: space-between;
align-items: center;
`;