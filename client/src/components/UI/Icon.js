import React, {useState} from 'react'
import styles from './styles/Icon.module.css'
import { ReactSVG } from 'react-svg'
var classnames = require('classnames');

const Icon = ({icon, color='rgba(133, 142, 161, 0.4)', size = 12, height = size, width = size, className, onClick = () => {}}) => {



    const onInjected = (err, svg) => {
        if(!svg) return
        svg.setAttribute('fill', color);
        svg.setAttribute('height', height);
        svg.setAttribute('width', width);
    };

    return <div onClick={onClick} className={className} style={{height: height, width: width}}><ReactSVG  afterInjection={onInjected}  src={'/assets/icons/'+icon+'.svg'}/></div>

};

export default React.memo(Icon);