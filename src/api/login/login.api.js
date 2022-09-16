import axios from 'axios'
import { Header } from '../config.api'

const Login = async (data) => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`,
            await Header()
        )
            return response
        } catch (error) {
            return error
        }
}

export default {
    Login,
}
