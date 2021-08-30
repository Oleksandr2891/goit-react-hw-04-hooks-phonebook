import styled from "styled-components";


export const ContactItem = styled.li`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;

    .buttonDelete{
        text-decoration: none;
        display: inline-block;
        width: 100px;
        height: 20px;
        line-height: 16px;
        border-radius: 45px;
        margin: 10px 20px;
        font-size: 10px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 3px;
        font-weight: 600;
        color: #524f4e;
        background: white;
        box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
        transition: .3s;
    }
    .buttonDelete:hover {
        background: #e53a2e;
        box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
        color: white;
        transform: translateY(-7px);
    }
        
`;