import SockJS from 'sockjs-client';
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
const { over } = require('stompjs');
var stompClient: any = null;

export const Socket=(props:any)=>{
    const {socketProps}=props;
    const navigate = useNavigate();
    const [check, setCheck] = useState<any>(false);

    const connect = () => {
        let Sock = new SockJS('http://192.168.0.195:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected);
    }

    const onConnected = () => {
        stompClient.subscribe("/tv", (notification: any) => {
            socketProps.setMsg(notification?.body)
            setCheck(true);
        })
    }

    useEffect(() => {
        if(check) {
            navigate("/displayMedia")
            setCheck(false);
        }
    }, [socketProps.msg])

    useEffect(() => {
        connect();
    }, [])

    return(
        <></>
    )
}