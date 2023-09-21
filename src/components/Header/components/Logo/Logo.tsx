import { LOGO } from 'common/static';
import React from 'react';

export interface LogoProps {
}

const Logo: React.FC<LogoProps>  = ({}) => {
	return <img src={LOGO} height={50} />;
};

export default Logo;
