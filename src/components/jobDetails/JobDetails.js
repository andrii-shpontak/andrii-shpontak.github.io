import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useParams } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';

import './jobDetails.css';

const JobDetails = () => {
    const items = useSelector(state => state.items.items);

    const mark = useParams();
    let job = items.find(job => job.id === mark.id);
    const { name, salary, title, createdAt, pictures, benefits, location, address, email, phone, employment_type } = job;
    // const loc = `${location.lat},${location.long}`;
    const searchAddress = address.replace(/ /g, ',');
    return (
        <div style={{ position: 'relative' }}>
            <header>
                <div className="header_details">{name}</div>
                <hr className='header_line middle' />
                <div className="header_links">
                    <div className='header_mark'>Save to my list</div>
                    <div className='header_share'>Share</div>
                </div>
                <hr className='header_line under' />
            </header>

            <div className="map">
                <div className="map_descr">
                    <div className="map_name">{name}</div>
                    <div><LocationOnIcon style={{ color: "#D8D8D8" }} />{address}</div>
                    <div>{phone},</div>
                    <div>{email}</div>
                </div>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${searchAddress}&zoom=13&size=402x200&&key=AIzaSyAmWSFJ09X1cRn26S_m6OKo6-pY1LF1DW0`} alt="map" />
            </div>


            <section className="title">
                <Button variant="contained">Apply now</Button>

                <div className="title_header">
                    <div className="title_about">{title}</div>
                    <div className="title_salary">
                        <div>€ {salary}</div>
                        <div className="title_salary_info">Brutto, per year</div>
                    </div>
                <div className="title_post">Founded in {createdAt.slice(0, 4)}</div>
                </div>
            </section>

            <section className="about">
                <div className="about_text">At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. We continue to provide innovative care models, focused on improving quality and access to healthcare.
                    <br /><br />
                    <h2>Responsopilities</h2>
                    Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
                    <br /><br />
                    The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.
                    <br /><br />
                    Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
                    <br /><br />
                    <h2>Responsopilities</h2>
                    Our physicians enjoy a wide range of benefits, including:
                    <ul>
                        <li>Very competitive compensation package with bonuses</li>
                        <li>Medical, Dental, and Vision Insurance</li>
                        <li>Occurrence-based Malpractice Coverage</li>
                        <li>Short-term and Long-term Disability Insurance
                            and life insurance</li>
                    </ul>
                </div>

                <Button variant="contained">Apply now</Button>
            </section>

            <section className="additional">
                <div className="header_details">Additional info</div>
                <hr className='header_line' />
                <br />
                <div>Employment type</div>
                <div className="btn_gray">
                    {
                        employment_type.map((item, i) => <Button key={i}>{item}</Button>)
                    }
                </div>
                <br />
                <div>Benefits</div>
                <div className="btn_yellow">
                    {
                        benefits.map((item, i) => <Button key={i}>{item}</Button>)
                    }
                </div>
            </section>

            <section className="images">
                <div className="header_details">Attached images</div>
                <hr className='header_line' />
                <img src={pictures[0]} alt="1" />
                <img src={pictures[0]} alt="2" />
                <img src={pictures[0]} alt="3" />
            </section>

            <footer>
                <Link to='/test-task-fe-allab'><Button className='footer_btn'><ArrowBackIosIcon />RETURN TO JOB BOARD</Button></Link>
                <div className="contacts">
                    <div className="header_details">Contacts</div>
                    <hr className='header_line' />
                </div>
            </footer>
        </div>
    );
};

export default JobDetails;