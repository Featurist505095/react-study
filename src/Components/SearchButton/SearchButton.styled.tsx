import styled from 'styled-components';

const SearchButtonStyle = styled.button`
    float: right;
    border: none;
    border-radius: 3px;
    width: 250px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    background-color: palevioletred;
    outline: none;
    cursor: pointer;
    color: white;

    &:hover {
        opacity: 0.7;
    }
    
    &.small {
        width: 150px;
        height: 30px;
        color: tomato;
        background-color: white;
        font-size: 16px;

        &.to-main {
            width: 100%;
            height: 50px;
            color: white;
            background-color: palevioletred;
            font-size: 20px;
        }
    }
`;

export default SearchButtonStyle;