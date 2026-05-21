import { Schema, model } from 'mongoose';

export interface IExercise {
  name: string;
  muscleGroups: string[];
  category: string[];
}

const exerciseSchema = new Schema<IExercise>(
  {
    name: { type: String, required: true },
    muscleGroups: { type: [String], default: [] },
    category: { type: [String], default: [] },
  },
  { timestamps: true },
);

export const Exercise = model<IExercise>('Exercise', exerciseSchema);
