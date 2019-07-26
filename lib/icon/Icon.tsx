import * as React from 'react';
import classes from '../util/classes';
import './iconfont.css';
interface IconProps extends React.HTMLAttributes<HTMLElement>{
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = 
({className, name, ...restProps}) => {
    return (
        <i className={classes('iconfont', `icon${name}`, className)}  {...restProps}/>
    )
}

export default Icon;