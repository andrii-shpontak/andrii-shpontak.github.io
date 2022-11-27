import React from 'react';
import { Pagination } from '@mui/material';
import './paginate.css';

const Paginate = ({ jobsPerPage, totalJobs, paginate }) => {
    let jobsNumbers = 0;

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        jobsNumbers = i;
    }
    return (
        <div>
            {
                <Pagination 
                    className='paginate'
                    count={jobsNumbers}
                    onChange={(_, num) => paginate(num)}
                    variant="outlined"
                    shape="rounded" />
            }
        </div>
    );
};

export default Paginate;