import React from 'react';

import {StyledMenuBar, StyledMenuItem} from './styles';

export interface MenuProps {
    name?: string;
}

const Menu = (props: MenuProps) => (
    <StyledMenuBar>
        <StyledMenuItem>Home</StyledMenuItem>
        <StyledMenuItem>Contracts</StyledMenuItem>
        <StyledMenuItem>User detail</StyledMenuItem>
    </StyledMenuBar>
);

export default Menu;
