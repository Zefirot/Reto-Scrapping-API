import mongoose from 'mongoose';
import {videoDB} from '../index';

const {Schema, Types} = mongoose;

const ExperienceSchema = new Schema({
  profileOriginId: {type: String, ref: 'profile'},
  rol: {type: String},
  place: {type: String},
  period: {type: String}
}, {
  timestamps: true,
});

const ExperienceModel = videoDB.model('experience', ExperienceSchema);

export default ExperienceModel;
