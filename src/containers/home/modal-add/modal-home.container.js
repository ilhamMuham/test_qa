import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik } from 'formik'
import {
    HomeAPI
} from '../../../api'
import {
    Input,
    Alerts,
    MasterModal
} from '../../../components'

import {
    Form
} from './modal-home.styled.container'
const ModalHome = (props) => {
  const [showAlert, setAlert] = useState({ visible: false, msg: '', success: false, type: '' })

    const FormInput = useFormik({
        enableReinitialize: true,
        initialValues: {
            userId: props.isEdit || props.isDetail ? props.dataItem.userId : 1,
            title : props.isEdit || props.isDetail ? props.dataItem.title : '',
            body : props.isEdit || props.isDetail ? props.dataItem.body : '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required*'),
            body: Yup.string().required('Required*'),
        }),
        onSubmit: async (values, form) => {

            if(props.isEdit) {
                let formData = {
                    id: props.dataItem.id,
                    title: values.title,
                    body: values.body,
                    userId: props.dataItem.userId
                }
                try {
                    const response = await HomeAPI.EditFiture(props.dataItem.id, formData)
                    if (response.data) {
                        FormInput.resetForm()
                        props.handleClose()
                        setAlert({
                            msg: 'Update feature has been successful',
                            success: true,
                            visible: true,
                            type: 'update',
                        })
                        props.getComment()
                    } else {
                        setAlert({ msg: 'something when wrong !', success: false, visible: true, type: 'update' })
                    }
                } catch (err) {
                    return err
                }
            } else {
                let formData = {
                    title: values.title,
                    body: values.body,
                    userId: 1,
                }
                try {
                    const response = await HomeAPI.PostFiture(formData)
                    if (response.data) {
                        FormInput.resetForm()
                        props.handleClose()
                        setAlert({
                            msg: 'Add feature has been successful',
                            success: true,
                            visible: true,
                            type: 'add',
                        })
                        props.getComment()
                    } else {
                        setAlert({ msg: 'something when wrong !', success: false, visible: true, type: 'add' })
                    }
                } catch (err) {
                    return err
                }
            }
        },
    })

    return (
        <div>
            <MasterModal
            id='m_actv_mrt_mdl'
            maxWidth='lg'
            width={33}
            isFiture={props.isDetail ? false : true}
            title='Feature'
            showModal={props.showModal}
            handleClose={()=> {
                props.handleClose()
                FormInput.resetForm()
            }}
            subTitle={ props.isDetail? 'Detail Feature' : props.isEdit ? 'Edit Feature' : 'Add New Feature' }
            handleSave={() => {
            FormInput.handleSubmit()
            }}
            >
                <Form>
                    <Input
                        form={FormInput}
                        name='title'
                        label='Title'
                        id='title'
                        InputProps={{ readOnly: props.isDetail }}
                        inputProps={{
                          tabIndex: 1,
                        }}
                    />
                    <Input
                        form={FormInput}
                        name='body'
                        label='Description'
                        id='body'
                        InputProps={{ readOnly: props.isDetail }}
                        inputProps={{
                        tabIndex: 3,
                        }}
                    />
                </Form>
            </MasterModal>
            <Alerts
                type={showAlert.type}
                open={showAlert.visible}
                close={() => {
                setAlert({ ...showAlert, visible: false })
                }}
                msg={showAlert.msg}
                success={showAlert.success}
            />
        </div>
    )
}

export default ModalHome