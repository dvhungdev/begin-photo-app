import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
    items: PropTypes.array,
    onClickItemEdit: PropTypes.func,
    onClickItemRemove: PropTypes.func
};

PhotoList.defaultProps = {
    items: [],
    onClickItemEdit: null,
    onClickItemRemove: null
}
function PhotoList(props) {
    const { items, onClickItemEdit, onClickItemRemove } = props;

    return (
        <Row>
            {items.map((photo) => (
                <Col key={photo.title} xs="12" md="6" lg="3">
                    <PhotoCard
                        item={photo}
                        onClickEdit={onClickItemEdit}
                        onClickRemove={onClickItemRemove}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;