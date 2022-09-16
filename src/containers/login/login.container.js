import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Checkbox from '@mui/material/Checkbox'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import FormControlLabel from '@mui/material/FormControlLabel'
import {
    LoginAPI
} from '../../api'
import {
    Input,
    Button
} from '../../components'
import {
    Title,
    TextTitle,
    ContainerBig,
    ContainerImg,
    ContainerLock,
    ContainerLogin
} from './login.styled.container'

const Login = () => {
    const router = useRouter()

    const FormInput = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: null,
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Required*'),
            password: Yup.string().required('Required*'),
        }),
        onSubmit: async (values, form) => {
            console.log('values : ',values)
            _login()
        },
    })

    const _login = async (Id) => {
        console.log('FormInput.values.email : ',FormInput.values.email)
        try {
            const response = await LoginAPI.Login()
            if(response.status == 200) {
                let select = response.data.filter(e=>e.email == FormInput.values.email && e.name == FormInput.values.password)
                console.log('select : ',select[0])
                if(select.length > 0) {
                    localStorage.setItem('user_info', JSON.stringify(select[0]))
                    router.push('/home')
                }
            }
        } catch (err) {
            return err
        }
    }

    return (
        <ContainerBig>
            <ContainerImg>
            </ContainerImg>
            <ContainerLogin>
                <Title>
                    <ContainerLock>
                        <LockPersonIcon/>
                    </ContainerLock>
                    <TextTitle>Login</TextTitle>
                </Title>
                <div>
                    <Input
                        form={FormInput}
                        id='form_email'
                        name='email'
                        label='Email'
                        value={FormInput.values.email}
                        inputProps={{
                        tabIndex: 3,
                        }}
                    />
                    <Input
                        form={FormInput}
                        id='form_password'
                        name='password'
                        label='Password'
                        value={FormInput.values.password}
                        inputProps={{
                        tabIndex: 3,
                        }}
                    />
                    <FormControlLabel control={<Checkbox checked={false} />} label="Remember me" />
                    <Button
                        type='submit'
                        color='blue'
                        id='mdl_dialog_save_delay_btn'
                        style={{    
                             width: '100%',
                            marginTop: '10px',
                            height: '40px',
                            fontSize: '18px',
                            fontWeight: 'bold' 
                        }}
                        onClick={() => {
                        FormInput.handleSubmit()
                        }}
                    >
                        {'Login'}
                    </Button>
                    <div style={{
                        marginTop: '20px'
                    }}>
                        <a style={{ display: 'none' }} href="/reset">Forgot password?</a>
                        <a style={{
                            float: 'right',
                            textDecoration: 'underline',
                            color: 'blue'
                            }} href="/login">Don't have an account? Sign Up</a>
                    </div>
                </div>
            </ContainerLogin>
        </ContainerBig>
    )
}
export default Login