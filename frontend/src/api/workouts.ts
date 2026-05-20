import api from './Client';
import type { IWorkout } from '../types/Workout';

export const getWorkouts = () => {
  return api.get<IWorkout[]>('/workouts').then((r) => r.data);
};

export const getWorkout = (id: string) => {
  return api.get<IWorkout>(`/workouts/${id}`).then((r) => r.data);
};

export const createWorkout = (data: Partial<IWorkout>) => {
  return api.post<IWorkout>('/workouts', data).then((r) => r.data);
};

export const updateWorkout = (id: string, data: Partial<IWorkout>) => {
  return api.put<IWorkout>(`/workouts/${id}`, data).then((r) => r.data);
};

export const deleteWorkout = (id: string) => {
  return api.delete(`/workouts/${id}`);
};

export const addExercise = (workoutId: string, data: { exerciseId: string; exerciseName: string }) => {
  return api.post<IWorkout>(`/workouts/${workoutId}/exercises`, data).then((r) => r.data);
};

export const deleteExercise = (workoutId: string, exerciseId: string) => {
  return api.delete(`/workouts/${workoutId}/exercises/${exerciseId}`);
};

export const addSet = (workoutId: string, exerciseId: string, data: { reps: number; weight: number }) => {
  return api.post<IWorkout>(`/workouts/${workoutId}/exercises/${exerciseId}/sets`, data).then((r) => r.data);
};

export const updateSet = (workoutId: string, exerciseId: string, setId: string, data: { reps?: number; weight?: number }) => {
  return api.put<IWorkout>(`/workouts/${workoutId}/exercises/${exerciseId}/sets/${setId}`, data).then((r) => r.data);
};

export const deleteSet = (workoutId: string, exerciseId: string, setId: string) => {
  return api.delete(`/workouts/${workoutId}/exercises/${exerciseId}/sets/${setId}`);
};
