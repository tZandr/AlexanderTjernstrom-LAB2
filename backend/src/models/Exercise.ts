import { Schema, model } from 'mongoose';

export interface IExercise {
  name: string;
  description: string;
  category: string[];
}

const exerciseSchema = new Schema<IExercise>(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: [String], required: true },
  },
  { timestamps: true },
);

export const Exercise = model<IExercise>('Exercise', exerciseSchema);
