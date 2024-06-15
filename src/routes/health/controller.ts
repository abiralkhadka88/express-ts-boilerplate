import { Request, Response, NextFunction } from 'express';

const HealthController = {
  appHealth(_req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).send({ message: 'All Good' });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};

export default HealthController;
