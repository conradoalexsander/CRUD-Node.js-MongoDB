import express from 'express';
import studentModel from '../models/student.js'

const studentRouter = express();

studentRouter.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
})

studentRouter.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);

  } catch (error) {
    res.status(500).send({ error: error.message })
  }

})

studentRouter.delete('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndDelete({ _id: req.params.id })

    if (!student) {
      res.status(404).send('No documents could be find with this criteria')
    }

    res.status(204).send();

  } catch (error) {
    res.status(500).send({ error: error.message })
  }

})

studentRouter.put('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      {
        _id: req.params.id
      },
      req.body,
      { new: true }
      //retornando o novo objeto 
    )

    if (!student) {
      res.status(404).send('No documents could be find with this criteria')
    }

    res.send(student);

  } catch (error) {
    res.status(500).send({ error: error.message })
  }

})

export default studentRouter;