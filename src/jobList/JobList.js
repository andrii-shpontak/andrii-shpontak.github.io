import React, { useCallback, useEffect, useState } from 'react';
import JobListItem from '../jobListItem/JobListItem';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    const init = useCallback(async () => {
        //TODO: find the way to prevent previous request if the function has been called again
        const { data } = await axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu');
        setJobs(data)
    }, []);

    useEffect(() => {
        init()
    }, []);

    return (
        <ul>
            {jobs.map(({ id, ...props }) => {
                return <JobListItem key={id} {...props} />
            })}
        </ul>
    );
};

export default JobList;