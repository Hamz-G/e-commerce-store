import { Box, Typography, Pagination } from "@mui/material";
import { MetaData } from "../models/pagination";
import { useState } from "react";

interface Props {
    metaData: MetaData;
    onPageChange: (page: number) => void;
}

export default function AppPagination ({metaData, onPageChange}: Props) {
    const {currentPage, totalCount, totalPages, pageSize} = metaData;
    const [pageNumber, setPageNumber] = useState(currentPage);

    function handlePageChange(page: number) {
        setPageNumber(page);
        onPageChange(page);
    }
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography>
        {totalCount} üründen {(currentPage-1)*pageSize+1}-
         {currentPage*pageSize > totalCount 
         ? totalCount 
         : currentPage*pageSize}.  gözükmektedir
        </Typography>
        <Pagination 
        color = 'secondary'
        size = 'large'
        count = {totalPages}
        page = {pageNumber}
        onChange = {(_e, page) => handlePageChange(page)}
        />
      </Box>
    )
}
