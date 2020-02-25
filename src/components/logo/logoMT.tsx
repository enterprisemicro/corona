import React from 'react';
import clsx from 'clsx';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme : Theme) => 
    createStyles({
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        },
        circle: {
            height: '180px',
            width: '180px',
            marginTop: '20px',
            backgroundColor: 'white',
            ':hover': {backgroundColor: '#f0f8fa'},
            border: '6px solid #4db5d9',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        link: {
            textDecoration: 'none',
            color: '#4db5d9',
            fontSize: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
        }
}));

export default function LogoMT() {
    const classes = useStyles();

    return (
        <div className={clsx(classes.center)}>
            <div className={clsx(classes.circle)}>
                <div className={clsx(classes.link)}>
                    <p>M T</p>
                </div>
            </div>
        </div>
    );

}