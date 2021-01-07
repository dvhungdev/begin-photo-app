import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'reactstrap';
import "./PhotoCard.scss";

PhotoCard.propTypes = {
    item: PropTypes.object,
    onClickEdit: PropTypes.func,
    onClickRemove: PropTypes.func
};

PhotoCard.defaultProps = {
    item: null,
    onClickEdit: null,
    onClickRemove: null
}

function PhotoCard(props) {
    const { item, onClickEdit, onClickRemove } = props;
    const { id, categoryId, photo, title } = item;

    const handleOnClickEdit = () => {
        if(onClickEdit) onClickEdit(item);
    }

    const handleOnClickRemove = () => {
        if(onClickRemove) onClickRemove(item);
    }

    return (
        <div className="photo-card" category-id={categoryId} key={id}>
            <img src={photo} alt={title} />
            <div className="photo-card__overlay">
                <h3 className="title">
                    {title}
                </h3>
                <div className="actions">
                    <Button outline size="sm" color="light" onClick={handleOnClickEdit}>
                        Edit
                </Button>
                    <Button outline size="sm" color="danger" onClick={handleOnClickRemove}>
                        Remove
                </Button>
                </div>
            </div>
        </div>
    )
}
export default PhotoCard;