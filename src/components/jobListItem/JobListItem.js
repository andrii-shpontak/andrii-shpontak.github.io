import { Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../store/actions/itemActions';

import './jobListItem.css';

const JobListItem = ({ address, createdAt, id, name, pictures, title }) => {
    const dispatch = useDispatch();

    const deleteItemHandler = (id) => {
        dispatch(deleteItem({ id: id }))
    };

    return (
        <div className='card_item'>
            <img src={pictures[0]} alt="photo" className='card_photo' />
            <div className="trashIcon"><HighlightOffIcon style={{ color: '#70778b' }} onClick={() => deleteItemHandler(id)} /></div>
            <div className='card_descr'>
                <Link to={`/test-task-fe-allab/${id}`}
                    className="card_title">{title}</Link>
                <div className="card_name">{name}</div>
                <div className="card_address"><LocationOnIcon style={{ color: '#d8d8d8' }} />{address}</div>
            </div>
            <div className="card_rate"><Rating name="size-large" defaultValue={2.5} size="large" /></div>
            <div className="card_mark"><BookmarkBorderIcon style={{ color: '#70778b' }} /></div>
            <div className='card_update'>Founded in {createdAt.slice(0, 4)}</div>
            
            <div className="card_mini_rate"><Rating defaultValue={2.5} size='small' /></div>
        </div>
    );
};

export default JobListItem;