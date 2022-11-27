import { Avatar, Card, Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import './jobListItem.css';

const JobListItem = ({ address, benefits, createdAt, description, email, empoyment_type, id, location, name, phone, pictures, salary, title, updatedAt }) => {

    return (
        <div className='card_item' key={id}>
            <img src={pictures[0]} alt="photo" className='card_photo' />
            <div className='card_descr'>
                <div className="card_title">{title}</div>
                <div className="card_name">{name}</div>
                <div className="card_address"><LocationOnIcon style={{ color: '#d8d8d8' }} />{address}</div>
            </div>
            <div className="card_rate"><Rating name="size-large" defaultValue={2.5} size="large" /></div>
            <div className="card_mark"><BookmarkBorderIcon style={{color: '#70778b'}}/></div>
            <div className='card_update'>Founded in {createdAt.slice(0, 4)}</div>
            <div className="card_mini_rate"><Rating defaultValue={2.5} size='small'/></div>
        </div>
    );
};

export default JobListItem;