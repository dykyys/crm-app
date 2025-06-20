import axios from 'axios';
import { triggerAuthChange } from '@/hooks/useAuth';
export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

// axios.defaults.baseURL = 'https://next-docs-api.onrender.com';

// Перевіряємо хто намагається зробити запит: клієнт чи сервер
const isSSR = typeof window === 'undefined';

// Вибираємо правильний базовий URL
const baseURL = isSSR
  ? 'https://next-docs-api.onrender.com' // SSR: напряму до бекенду
  : '/api'; // CSR: через rewrite

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export const getNotes = async (categoryId?: string) => {
  const res = await api.get<NoteListResponse>('/notes', {
    params: { categoryId },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await api.get<Note>(`/notes/${id}`);
  return res.data;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const getCategories = async () => {
  const res = await api<Category[]>('/categories');
  return res.data;
};

export type NewNoteData = {
  title: string;
  content: string;
  categoryId: string;
};

export const createNote = async (data: NewNoteData) => {
  const res = await api.post<Note>('/notes', data);
  return res.data;
};

export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

export type User = {
  id: string;
  email: string;
  userName?: string;
  createdAt: Date;
  updatedAt: Date;
};

export const register = async (data: RegisterRequest) => {
  const res = await api.post<User>('/auth/register', data);
  triggerAuthChange();
  return res.data;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export const login = async (data: LoginRequest) => {
  const res = await api.post<User>('/auth/login', data);
  triggerAuthChange();
  return res.data;
};

export const logout = async () => {
  await api.post('/auth/logout');
  triggerAuthChange();
};
// asdfasdf!@gmail.com
export const checkSession = async () => {
  const res = await api.get<{ success: boolean }>('/auth/session');
  return res.data.success;
};
