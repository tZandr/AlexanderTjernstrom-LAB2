import api from './Client';
import type { IExercise } from '../types/Exercise';

export const getExercises = () => {
  return api.get<IExercise[]>('/exercises').then((r) => r.data);
};

export const getExercise = (id: string) => {
  return api.get<IExercise>(`/exercises/${id}`).then((r) => r.data);
};

export const createExercise = (data: Partial<IExercise>) => {
  return api.post<IExercise>('/exercises', data).then((r) => r.data);
};

export const updateExercise = (id: string, data: Partial<IExercise>) => {
  return api.put<IExercise>(`/exercises/${id}`, data).then((r) => r.data);
};

export const deleteExercise = (id: string) => {
  return api.delete(`/exercises/${id}`);
};
