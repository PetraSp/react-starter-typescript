import styled from 'styled-components';

export const StyledMenuBar = styled.ul`
    display: flex;
    list-style: none;
    padding: 10px;
    justify-content: flex-end;
    background-color: ${({ color }) => ( color ? color : 'lightgrey' )};
    width: 100%;
`;

export const StyledMenuItem = styled.li`
    margin-right: 10px;
`;

// export const StyledImage = styled.img`
//    padding: 10px;
// `;
