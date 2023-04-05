import { Box, Grid, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./style.css";
import Pagination from '../Pagination';
import { useEffect, useState, useMemo, useRef } from "react";
import { Footer } from '../common/footer';
import { Header } from '../common/header';
import { Coaches } from '../coaches/index';

let PageSize = 5;
export const TvDisplay = (props: any) => {
    const { trainDataArray, stationName, totalResponse } = props
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(0);


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return trainDataArray.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, trainDataArray]);

    const onNext = () => {
        if (currentPage < limit) {
            setCurrentPage((currentPage) => currentPage + 1)
        }
        else {
            setCurrentPage(1);
        }
    };

    useEffect(() => {
        let interval: any;
        if (limit > 0) {
            interval = setInterval(onNext, 4000);
        }
        return () => {
            console.log("return effect", interval)
            clearInterval(interval);
        };
    });

    useEffect(() => {
        if (trainDataArray.length > 0) {
            let limit = Math.ceil(trainDataArray.length / PageSize)
            setLimit(limit)
        }
    }, [trainDataArray])


    return (
        <>
            <Header stationName={stationName} />
            <TableContainer style={{height:"51vh"}}>
            <Table className="trainTable">
                <TableHead>
                    <TableRow className="MainHeader">
                        <TableCell>
                            Train
                        </TableCell>
                        <TableCell>
                            Train Name
                        </TableCell>
                        <TableCell>
                            Exp Time
                        </TableCell>
                        <TableCell>
                            A/D
                        </TableCell>
                        <TableCell>Pf</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentTableData?.map((trainData: any) => {
                        return <TableRow>
                            <TableCell className="trainNo">
                                {trainData.trainNumber}
                            </TableCell>
                            <TableCell className="trainName">
                                {trainData.trainName}
                            </TableCell>
                            <TableCell className="tableTime">
                                {trainData.sta}
                            </TableCell>
                            <TableCell className="ArriDepTime">
                                {trainData.arrDep}
                            </TableCell>
                            <TableCell className="platformNo">
                                {trainData.platformNo}
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table></TableContainer>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={trainDataArray.length}
                pageSize={PageSize}
                onPageChange={(page: any) => setCurrentPage(page)}
            />
            {
                totalResponse?.showCoach ?
                    <Grid>
                        <Coaches response={totalResponse} />
                    </Grid> : <></>
            }
            {
                totalResponse?.showMessage ?
                    <Footer response={totalResponse} /> : <></>
            }
        </>
    )
};
