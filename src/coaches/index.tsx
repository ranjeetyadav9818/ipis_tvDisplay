import { Card, TableHead, TableRow, Table, TableCell, Grid, TableBody, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import {
    TextField,
} from "@mui/material";
import './style.css'
export const Coaches = (props: any) => {
    const { response } = props;

    const [coaches, setCoaches] = useState<any>([]);


    useEffect(() => {
        if (response) {
            setCoaches(response.coaches);
        }
    }, [response])


    return (
        <>
            <Card className="mt-10 coachDetailCard">
                {/* <Table stickyHeader aria-label="sticky table" style={{height:'28vh'}}> */}
                    {/* <TableHead style={{backgroundColor: 'darkslategrey'}}>
                        <TableRow>
                            <TableCell colSpan ={2}   className="coachDetailHedText pl-25 pr-25">Train No.</TableCell>
                            <TableCell colSpan ={2}  className="coachDetailHedText pl-25 pr-25">{response?.CoachesTrainNo}</TableCell>
                            <TableCell colSpan ={2} className="coachDetailHedText pl-25 pr-25">Train Name</TableCell>
                            <TableCell colSpan ={2} className="coachDetailHedText pl-25 pr-25">{response?.CochesTrainName}</TableCell>
                            <TableCell colSpan={2}></TableCell>
                        </TableRow>
                    </TableHead> */}
                    <Grid container style={{borderBottom:'1px solid black' ,background: '#bd25c7'}}>
                        <Grid item md={3}><Typography className="coachCard">Train No.</Typography></Grid>
                        <Grid item md={3}><Typography  className="coachCard">{response?.CoachesTrainNo}</Typography></Grid>
                        <Grid item md={3}><Typography  className="coachCard">Train Name</Typography></Grid>
                        <Grid item md={3}><Typography  className="coachCard">{response?.CochesTrainName}</Typography></Grid>
                    </Grid>
                    {/* <TableBody>
                    <TableRow className="borderTopRow"> */}
                       <Grid container style={{marginTop:'10px', height:'15%'}}>
                       
                            {
                                coaches?.map((el: any, i: any) => {
                                    return(<> <Grid item md={1} style={{border:'1px solid black',textAlign:'center',borderRadius:'10px',background: 'rgb(22 223 177)'}}>
                                     <span style={{verticalAlign:'sub',fontSize:"22px"}}><b>{el}</b></span> 
                                  </Grid> </>)
                                })
                           }
                           </Grid>
                       
                    {/* </TableRow>
                    </TableBody>

                </Table> */}
            </Card>
        </>
    )
}