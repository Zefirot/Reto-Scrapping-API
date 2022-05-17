import {Router} from 'restify-router';
import {processDataController} from '../controllers/processData.controller';

const routerProfileInstance = new Router();

routerProfileInstance.post('/create-profile', async (req, res) => {
  try {
    const {fullName, contactInfo, experience, education} = req.body;
    
    await processDataController.processData(fullName, contactInfo, experience, education);
    
    res.json({success: true, error: false, message: ""});
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return res.json({success: false, error: true, message: errorMessage});
  }
});


export default routerProfileInstance;
