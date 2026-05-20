import api from './Client';
import type { IProfile } from '../types/Profile';

// Get
export const getProfile = () => {
  return api.get<IProfile>('/profile').then((r) => r.data);
};

// Update
export const updateProfile = (data: Partial<IProfile>) => {
  return api.put<IProfile>('/profile', data).then((r) => r.data);
};

// Upload Avatar
export const uploadAvatar = (file: File) => {
  const form = new FormData();
  form.append('file', file);
  return api.post<{ url: string }>('/upload', form).then(r => r.data);
};

