import React from 'react';
import PropTypes from 'prop-types';

import { Link, useHistory } from 'react-router-dom';

import Banner from 'components/Banner';
import PhotoList from 'features/Photo/components/PhotoList';
import { useDispatch, useSelector } from 'react-redux';
import { removePhoto } from '../../photoSlice';
import { Container } from 'reactstrap';

Main.propTypes = {

};

function Main(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const photos = useSelector(state => state.photos);

    const handleOnclickEdit = item => {
        const editPhotoUrl = `/photos/${item.id}`;
        history.push(editPhotoUrl);
    }

    const handleOnclickRemove = item => {
        const photoId = item.id;
        const action = removePhoto(photoId);
        dispatch(action);
    }

    return (
        <div>
            <Banner title='Hùng ❤ Vui' />
            <div className="text-center my-4">
                <Link to="photos/add">Link to Add or edit</Link>
            </div>
            <Container>
                <PhotoList
                    items={photos}
                    onClickItemEdit={handleOnclickEdit}
                    onClickItemRemove={handleOnclickRemove}
                />
            </Container>

        </div>
    );
}

export default Main;