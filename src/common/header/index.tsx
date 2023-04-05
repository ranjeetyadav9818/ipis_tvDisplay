import { Table, TableCell, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import "./style.css";
export const Header = (props:any) => {
  const {stationName} = props;
  const splitTime = (dateObj: string): string => {
    var loginDate = new Date(dateObj);
    var time =  loginDate.getHours() + ':' + ('0'+loginDate.getMinutes()).slice(-2) + ':' + ('0'+loginDate.getSeconds()).slice(-2);
    return time;
  }
  const [currentTimestamp,setCurrentTimestamp] =useState<any>(null)
  useEffect(() => {
    setInterval(() => {
      let date= Date()
      setCurrentTimestamp(splitTime(date));
    }, 1000)
  })
  const splitDate = (dateObj: string): string => {
    var loginDate = new Date(dateObj);
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var date = month[loginDate.getMonth()] + ' ' + loginDate.getDate() + ',' + loginDate.getFullYear();
    return date;
  }
  const [currentDate,setCurrentDate] =useState<any>(null)
  useEffect(() => {
    setInterval(() => {
      let date= Date()
      setCurrentDate(splitDate(date));
    }, 1000)
  })
    return(
        <>
  {/* <p> <span>22-08-2022</span> <span>Rangiya</span> <span>15:04</span></p>  */}
  <Table stickyHeader aria-label="sticky table">
    <TableRow className='headerTable'>
        <TableCell className='date'>{currentDate}</TableCell>
        <TableCell className='statnName'>{stationName}</TableCell>
        <TableCell className='time'>{currentTimestamp}</TableCell>
    </TableRow>
  </Table>
    </>
    )
  };