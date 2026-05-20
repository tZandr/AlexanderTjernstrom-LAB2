import express from 'express';
import { Workout } from '../models/Workout.js';

const router = express.Router();

// Get all workouts
router.get('/', async (_req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.json(workouts);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get workout by ID
router.get('/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) { res.status(404).json({ message: 'Workout not found' }); return; }
    res.json(workout);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create workout
router.post('/', async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update workout
router.put('/:id', async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!workout) { res.status(404).json({ message: 'Workout not found' }); return; }
    res.json(workout);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete workout
router.delete('/:id', async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add exercise to workout
router.post('/:id/exercises', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) { res.status(404).json({ message: 'Workout not found' }); return; }
    workout.exercises.push(req.body);
    await workout.save();
    res.status(201).json(workout);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete exercise from workout
router.delete('/:id/exercises/:exerciseId', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) { res.status(404).json({ message: 'Workout not found' }); return; }
    workout.exercises = workout.exercises.filter(
      (e) => e._id?.toString() !== req.params.exerciseId
    );
    await workout.save();
    res.status(204).send();
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add set to an exercise
router.post('/:id/exercises/:exerciseId/sets', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) { res.status(404).json({ message: 'Workout not found' }); return; }
    const exercise = workout.exercises.find(
      (e) => e._id?.toString() === req.params.exerciseId
    );
    if (!exercise) { res.status(404).json({ message: 'Exercise not found' }); return; }
    exercise.sets.push(req.body);
    await workout.save();
    res.status(201).json(workout);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a set
router.put('/:id/exercises/:exerciseId/sets/:setId', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) { res.status(404).json({ message: 'Workout not found' }); return; }
    const exercise = workout.exercises.find(
      (e) => e._id?.toString() === req.params.exerciseId
    );
    if (!exercise) { res.status(404).json({ message: 'Exercise not found' }); return; }
    const set = exercise.sets.find((s) => s._id?.toString() === req.params.setId);
    if (!set) { res.status(404).json({ message: 'Set not found' }); return; }
    if (req.body.reps !== undefined) set.reps = req.body.reps;
    if (req.body.weight !== undefined) set.weight = req.body.weight;
    await workout.save();
    res.json(workout);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a set
router.delete('/:id/exercises/:exerciseId/sets/:setId', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) { res.status(404).json({ message: 'Workout not found' }); return; }
    const exercise = workout.exercises.find(
      (e) => e._id?.toString() === req.params.exerciseId
    );
    if (!exercise) { res.status(404).json({ message: 'Exercise not found' }); return; }
    exercise.sets = exercise.sets.filter((s) => s._id?.toString() !== req.params.setId);
    await workout.save();
    res.status(204).send();
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
