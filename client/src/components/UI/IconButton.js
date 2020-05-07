import React, {useState, useEffect} from 'react'
import styles from './styles/IconButton.module.css'
import classNames from 'classnames';

const IconButton = ({onClick, children, className, ...props}) => {

    return (
            <div {...props} onClick={onClick && onClick} className={classNames(className, styles.root)}>
                {children}
            </div>
    )

};


export default IconButton