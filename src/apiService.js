import axios from 'axios';

const API_URL = 'https://hiring.reachinbox.xyz/api/v1/onebox';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRpdHlhLnZpc2h3YWJoYXJhdGlAZ21haWwuY29tIiwiaWQiOjI1MCwiZmlyc3ROYW1lIjoiQWRpdHlhIiwibGFzdE5hbWUiOiJTaHVrbGEifSwiaWF0IjoxNzIzNTEyNDIzLCJleHAiOjE3NTUwNDg0MjN9.skRj0BY-Wo6ahkSWOAxKXYgqSHBt96Jx5HiG3tiIbJo';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const resetData = () => api.get('/reset');
export const listMails = () => api.get('/list');
export const getMessages = (threadId) => api.get(`/messages/${threadId}`);
export const deleteMessage = (threadId) => api.delete(`/messages/${threadId}`);
export const replyToMessage = (threadId, replyData) => api.post(`/reply/${threadId}`, replyData);
