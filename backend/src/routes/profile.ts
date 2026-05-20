import express from 'express';
import { Profile } from '../models/Profile.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) profile = await Profile.create({ name: 'Athlete', avatarUrl: null });
    res.json(profile);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) profile = await Profile.create({ name: 'Athlete', avatarUrl: null });
    Object.assign(profile, req.body);
    await profile.save();
    res.json(profile);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
