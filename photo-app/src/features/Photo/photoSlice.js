import { createSlice } from '@reduxjs/toolkit';
import dataPhotos from 'features/Photo/pages/DataFake/dataPhotos';

const initialPhotos = dataPhotos;

const photo = createSlice({
    name: 'photo',
    initialState: initialPhotos,
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },

        removePhoto: (state, action) => {
            const photoId = action.payload;
            return state.filter(photo => photo.id !== photoId);
        },

        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            const photoIndex = state.findIndex(photo => photo.id == newPhoto.id);

            if (photoIndex >= 0) {
                state[photoIndex] = newPhoto;
            }
        }
    }
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto  } = actions;
export default reducer;