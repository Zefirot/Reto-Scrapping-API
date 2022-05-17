import mongoose from 'mongoose';
import {videoDB} from '../index';

const {Schema, Types} = mongoose;

const EducationSchema = new Schema({
  profileOriginId: {type: String, ref: 'profile'},
  institutionName: {type: String},
  degree: {type: String},
  period: {type: String}
}, {
  timestamps: true,
});

const EducationModel = videoDB.model('education', EducationSchema);

export default EducationModel;
