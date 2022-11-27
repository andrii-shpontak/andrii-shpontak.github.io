import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobListItem from '../jobListItem/JobListItem';
import Paginate from '../paginate/Paginate';
// import axios from 'axios';  // from API DB
import {arrOfData} from './db';  //from loccal DB

const JobBoard = () => {
    const [jobs, setJobs] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(5);
  
    useEffect(() => {
        setJobs(arrOfData);  // from loccal DB
    }, []);

    // from API DB
    // const jobsBase = useCallback(async () => {
    //     //TODO: find the way to prevent previous request if the function has been called again
            // setLoading(true);
    //     const { data } = await axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu');
    //     setJobs(data)
            // setLoading(false);
    // }, []);

    // useEffect(() => {
    //     jobsBase()
    //     // eslint-disable-next-line
    // }, []);

    const lastJobIndex = currentPage * jobsPerPage;
    const firstJobIndex = lastJobIndex - jobsPerPage;
    const currentJob = jobs.slice(firstJobIndex, lastJobIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            {currentJob.map(({ id, ...props }) => {
                return <Link to={`/${id}`} key={id}><JobListItem {...props} /></Link> 
            })}
            <Paginate
                jobsPerPage={jobsPerPage}
                totalJobs={jobs.length}
                paginate={paginate}
            />
        </div>
    );
};

export default JobBoard;