import express from 'express';

const studentRouter = express();

studentRouter.get('/student', async (req, res) => {
  res.json({ result: 'validado' });
})

export default studentRouter;