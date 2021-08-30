import styled from "styled-components";


export const FilterWrapper = styled.label`

    padding: 15px;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    

    .input {
        display:block;
        font-size: 20px;
        width: 200px;
        width:450;
        margin:10px 0;
        background-color: #fafafa;
        border:0;
        border-radius: 5px;
        box-shadow:0 0 4px rgba(0,0,0,0.3);
        transition: .3s box-shadow;
    }

    .input:hover {
        box-shadow:0 0 4px rgba(0,0,0,0.5);
    }
`;