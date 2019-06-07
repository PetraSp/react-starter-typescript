import React from 'react';

export interface LogoProps {
    width: number;
    height: number;
    source: string;
}

const Logo = (props: LogoProps) => (
    <img src={props.source} width={props.width} height={props.height} />
);

export default Logo;

