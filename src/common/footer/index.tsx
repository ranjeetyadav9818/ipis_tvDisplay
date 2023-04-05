import { Table, TableCell, TableFooter, TableRow } from "@mui/material";
import "./style.css"
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export const Footer = (props: any) => {
    const {response}=props;

    const [messageEnglish, setMessageEngish] = useState<any>("");
    const [messageHindi, setMessageHindi] = useState<any>("");
    const [messageRegional, setMessageRegional] = useState<any>("");
    

    useEffect(() =>{
        if(response){
            setMessageEngish(response?.message?.messageEnglish);
            setMessageHindi(response?.message?.messageHindi);
            setMessageRegional(response?.message?.messageRegional);
        }
    },[response])

    return (
        <><Table className="footerTable">

            <TableFooter>
                <TableRow className="footerRow">
                    <TableCell className="tableFooter floating">
                        <Marquee style={{ fontSize: "0.8em",height:'3vh', color: "black", backgroundColor: "white",padding: '0.3%' }} speed={100}>
                        {messageEnglish}&nbsp;&nbsp; {messageHindi} &nbsp;&nbsp;{messageRegional}&nbsp;&nbsp;
                        </Marquee>
                    </TableCell>

                </TableRow>
            </TableFooter>
        </Table>

        </>
    )
};