import { Schema, model } from 'mongoose';

export interface IProfile {
  name: string;
  avatarUrl: string | null;
}

const profileSchema = new Schema<IProfile>(
  {
    name: { type: String, required: true, default: 'Athlete' },
    avatarUrl: { type: String, default: null },
  },
  { timestamps: true },
);

export const Profile = model<IProfile>('Profile', profileSchema);
