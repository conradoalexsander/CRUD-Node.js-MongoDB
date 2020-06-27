import mongoose from 'mongoose';


const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  subject: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  value: {
    type: Number,
    require: true
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('student', studentSchema, 'student');

const student = mongoose.model('student');
