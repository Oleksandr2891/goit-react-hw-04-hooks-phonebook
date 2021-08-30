import styled from "styled-components";


export const FormWrapper = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    label {
        padding: 15px;
        display: flex;
        font-size: 20px;
        font-weight: 600;
        flex-direction: column;
        align-items: flex-start;
    }


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

    .buttonSubmit {
        text-decoration: none;
        display: inline-block;
        width: 175px;
        height: 45px;
        line-height: 45px;
        border-radius: 45px;
        margin: 10px 20px;
        font-family: 'Montserrat', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 3px;
        font-weight: 600;
        color: #524f4e;
        background: white;
        box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
        transition: .3s;
    }
    .buttonSubmit:hover {
        background: #2EE59D;
        box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
        color: white;
        transform: translateY(-7px);
    }
`;