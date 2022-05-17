import mongoose from 'mongoose';
import {videoDB} from '../index';

const {Schema, Types} = mongoose;

const ProfileSchema = new Schema({
  userId: {type: String, required: true, unique: true},
  fullName: {type: String, required: true},
  email: {type: String},
  linkedin: {type: String},
}, {
  timestamps: true,
});

const ProfileModel = videoDB.model('profiles', ProfileSchema);

export default ProfileModel;
