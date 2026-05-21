import { Schema, model } from 'mongoose';

export interface IProfile {
  name: string;
  age: number;
  avatarUrl: string | null;
}

const profileSchema = new Schema<IProfile>(
  {
    name: { type: String, required: true, default: 'Guest' },
    age: { type: Number },
    avatarUrl: { type: String, default: null },
  },
  { timestamps: true },
);

export const Profile = model<IProfile>('Profile', profileSchema);
