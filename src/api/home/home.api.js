import axios from 'axios'
import { Header } from '../config.api'

const GetComments = async () => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`,
            await Header()
        )
        return response
    } catch (error) {
        return error
    }
}

const PostFiture = async (body) => {
    try {
        const response = await axios.post(
            `https://jsonplaceholder.typicode.com/posts`,
            body,
            await Header()
        )
        return response
    } catch (error) {
        return error
    }
}

const EditFiture = async (id,body) => {
    try {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            body,
            await Header()
        )
        return response
    } catch (error) {
        return error
    }
}

const DeleteFiture = async (id) => {
    try {
        const response = await axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            await Header()
        )
        return response
    } catch (error) {
        return error
    }
}

export default {
    PostFiture,
    EditFiture,
    GetComments,
    DeleteFiture,
}
