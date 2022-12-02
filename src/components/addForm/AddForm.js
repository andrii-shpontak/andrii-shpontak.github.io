import React, { useState } from 'react';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/itemActions';

import './addForm.css';

const AddForm = ({ active, setActive }) => {
    const dispatch = useDispatch();

    const [orgName, setOrgName] = useState('');
    const [orgTitle, setOrgTitle] = useState('');
    const [orgNumber, setOrgNumber] = useState('');
    const [orgSalary, setOrgSalary] = useState('');
    const [orgAddress, setOrgAddress] = useState('');
    // const [orgBenefits, setOrgBenefits] = useState([]);
    const [orgEmail, setOrgEmail] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newOrg = {
            id: nanoid(),
            name: orgName,
            phone: orgNumber,
            title: orgTitle,
            salary: orgSalary,
            address: orgAddress,
            createdAt: '2022',
            pictures: [
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
            ],
            benefits: ['Flexible hours', 'Relocation'],
            email: orgEmail,
            employment_type: ['Full time', 'Temporary'],
        }

        dispatch(addItem(newOrg));

        setOrgName('');
        setOrgTitle('');
        setOrgNumber('');
        setOrgSalary('');
        setOrgAddress('');
        // setOrgBenefits([]);
        setOrgEmail('');

        setActive(false);
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                <form onSubmit={onSubmitHandler}>
                    <h3>Add new organization</h3>
                    <div className="input">
                        <label htmlFor="name">Name of new organization</label>
                        <input 
                            required
                            type="text" 
                            name='name'
                            id='name'
                            placeholder='name'
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)} />
                    </div>
                    <div className="input">
                        <label htmlFor="title">Title of new organization</label>
                        <input 
                            required
                            type="text"
                            name='title'
                            id='title' 
                            placeholder='title'
                            value={orgTitle}
                            onChange={(e) => setOrgTitle(e.target.value)} />
                    </div>
                    <div className="input">
                        <label htmlFor="number">Phone of new organization</label>
                        <input 
                            required
                            type="number" 
                            name='number'
                            id='number'
                            placeholder='phone number'
                            value={orgNumber}
                            onChange={(e) => setOrgNumber(e.target.value)} />
                    </div>
                    <div className="input">
                        <label htmlFor="salary">Approximately salary</label>
                        <input 
                            required
                            type="text" 
                            name='salary'
                            id='salary'
                            placeholder='salary in euro'
                            value={orgSalary}
                            onChange={(e) => setOrgSalary(e.target.value)} />
                    </div>
                    <div className="input">
                        <label htmlFor="address">Address</label>
                        <input 
                            required
                            type="text" 
                            name='address'
                            id='address'
                            placeholder='22 Maydan Kyiv'
                            value={orgAddress}
                            onChange={(e) => setOrgAddress(e.target.value)} />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input 
                            required
                            type="text" 
                            name='email'
                            id='email'
                            placeholder='example@org.com'
                            value={orgEmail}
                            onChange={(e) => setOrgEmail(e.target.value)} />
                    </div>
                    <Button type="submit" variant="contained">Create</Button>
                </form>
            </div>
        </div>
    );
};

export default AddForm;