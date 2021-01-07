import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';


PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
    isAddMode: PropTypes.bool
};

PhotoForm.defaultProps = {
    onSubmit: null,
    isAddMode: false
}

function PhotoForm(props) {
    const { onSubmit, initialValues, isAddMode } = props;

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),

        categoryID: Yup.number().required("This field is required.").nullable(),

        photo: Yup.string().required("This photo is required.")
    });

    const handleOnSubmit = (values) => {
        if (onSubmit) onSubmit(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
        >
            {formikProps => {
                {/* const { values, errors, touched, isSubmitting } = formikProps; */ }
                const { isSubmitting } = formikProps;

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: enter code title"
                        />

                        <FastField
                            name="categoryID"
                            component={SelectField}

                            label="Category"
                            placeholder="Eg: enter category"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />

                        <FormGroup>
                            <Button
                                type="submit"
                                color="primary"
                            >
                                {isSubmitting && <Spinner size="sm" />}

                                {isAddMode ? "Add to album" : "Edit"}
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;