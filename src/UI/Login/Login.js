import React from 'react'
import styles from './Login.module.scss'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export const Login = ({children}) => {
    return (
        <div className={styles.login}>
            <div className={styles.loginContent}>
                <h2>Вход</h2>
                <TextField style={{width: '20vw', marginBottom: 20}} id="standard-basic" label="E-mail" variant="standard" />
                <TextField style={{width: '20vw', marginBottom: 40}} type="password" id="standard-basic" label="Password" variant="standard" />
            </div>
            <Button style={{marginBottom: 50}} endIcon={<SendIcon />} variant="contained">Отправить</Button>

        </div>
    )
}
