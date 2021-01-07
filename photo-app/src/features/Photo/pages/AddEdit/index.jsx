import React from 'react';
import './styles.scss';

import PhotoForm from 'features/Photo/components/PhotoForm';
import Banner from 'components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router-dom';

function AddEdit() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddMode = !photoId;
    const photoEdit = useSelector(state => {
        return state.photos.find(photo => photo.id === parseInt(photoId))
    });

    const initialValue = isAddMode ?
        {
            title: '',
            categoryID: null,
            photo: ''
        } :
        {
            title: photoEdit.title,
            categoryID: photoEdit.categoryId,
            photo: photoEdit.photo
        };

    const handleOnSubmit = (values) => {
        setTimeout(() => {
            if (isAddMode) {
                const action = addPhoto(values);
                dispatch(action);
            } else {
                const photoEdit = { ...values, id: photoId };
                const action = updatePhoto(photoEdit);
                dispatch(action);
            }
            history.push('/photos');
        }, 2000);



    }

    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValue}
                    onSubmit={handleOnSubmit}
                />
            </div>
        </div>
    );
}

export default AddEdit;