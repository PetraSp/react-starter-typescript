import * as React from 'react';

import {StyledMenuBar, StyledMenuItem} from './styles';

const Menu = () => (
    <StyledMenuBar>
        <StyledMenuItem>Home</StyledMenuItem>
        <StyledMenuItem>Contracts</StyledMenuItem>
        <StyledMenuItem>User detail</StyledMenuItem>
    </StyledMenuBar>
);

export default Menu;
