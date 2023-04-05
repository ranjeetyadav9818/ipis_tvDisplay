import { useEffect, useState, useMemo, useRef } from "react";
import displayService from "../service/displayService"
import ReactPlayer from "react-player";
import SockJS from 'sockjs-client';
import { useNavigate } from "react-router-dom";
import { findDOMNode } from "react-dom";
import "./style.css";
const { over } = require('stompjs');
var stompClient: any = null;


export const ShowMedia = (props: any) => {
    const { mediaProps } = props;
    const [check, setCheck] = useState<any>(false);
    const [array, setArray] = useState<any>([]);
    const [currentIndex, setCurrentIndex] = useState<any>(0);
    let musicArray = ["http://192.168.22.202/test.mp4", "http://192.168.22.202/test2.mp4"];
    const navigate = useNavigate();

    const getData = async () => {
        let tt = window.location.host
        console.log(tt, "9090");
    }


    const getMedia = async () => {
        const response = await displayService.get("/api/v1/displayFiles")
        console.log(response, "<<<<<<<<")
        if (response && response.status == 200) {
            setArray(response.data.data);
        }
    }

    useEffect(() => {
        getMedia();
    }, [])

    const handleEnded = () => {
        if (currentIndex == array.length - 1) {
            navigate("/display")
        }
        else {
            let nextIndex = (currentIndex + 1) % array.length;
            setCurrentIndex(nextIndex);
        }
    }

    useEffect(() => {
        if (mediaProps.msg != "") {
            mediaProps.setMsg("")
        }
    }, [mediaProps.msg])

    return (
        <>
            <ReactPlayer className="player" playing={true} muted url={array[currentIndex]} onEnded={handleEnded} controls={true} playsinline={true} />
        </>
    )
};
