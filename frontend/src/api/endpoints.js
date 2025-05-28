import axios from 'axios';
import axiox from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/'
const GET_URL = `${BASE_URL}todos`
const POST_URL = `${BASE_URL}todos`
const DELETE_URL = (id) => `${BASE_URL}todos/${id}`
const UPDATE_URL = (id) => `${BASE_URL}todos/${id}/update_completed`

export const get_todos = async() => {
    const token = localStorage.getItem('token');
    const response = await axios.get(GET_URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
}

export const create_todo = async (todo_name) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      POST_URL,
      {
        todo_name,
        completed: false,
        category: 'general',
        priority: 'medium'
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    return response.data;
}

export const delete_todo = async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.delete(DELETE_URL(id), {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
}

export const update_todo = async (id, completed) => {
    const token = localStorage.getItem('token');
    const response = await axios.patch(
      UPDATE_URL(id),
      { completed },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
}