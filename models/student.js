import mongoose from 'mongoose';


const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error('Cannot insert negative values for grades')
      }
    }
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('student', studentSchema, 'student');

const studentModel = mongoose.model('student');

export default studentModel;