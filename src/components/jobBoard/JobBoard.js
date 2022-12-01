import React, { useState } from 'react';
import JobListItem from '../jobListItem/JobListItem';
import Paginate from '../paginate/Paginate';
import { useSelector } from 'react-redux';

const JobBoard = () => {
    const items = useSelector(state => state.items.items);

    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(5);

    const lastJobIndex = currentPage * jobsPerPage;
    const firstJobIndex = lastJobIndex - jobsPerPage;
    const currentJob = items.slice(firstJobIndex, lastJobIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            {currentJob.map(({...props}) => {
                return <JobListItem 
                    key={props.id} 
                    {...props}/>
            })}
            <Paginate
                jobsPerPage={jobsPerPage}
                totalJobs={items.length}
                paginate={paginate}
            />
        </div>
    );
};

export default JobBoard;