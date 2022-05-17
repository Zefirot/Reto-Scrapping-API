import mongoose, { AnyArray } from "mongoose";
import { educationController } from "./education.controller";
import { experienceController } from "./experience.controller";
import { profileController } from "./profile.controller";


class PROCESSDATA {

  async processData(fullName: string,contactInfo: any, experience: any[], education: any[]) {
    try {
      const uniqueId = new mongoose.Types.ObjectId()._id;

      await profileController.createProfile(uniqueId, fullName, contactInfo);

      experience.forEach(async elem => {
        await experienceController.createExperience(uniqueId, elem.rol, elem.place, elem.period);
      });

      education.forEach(async elem => {
        await educationController.createEducation(uniqueId, elem.institutionName, elem.degree, elem.period);
      })
    } catch (error) {
      throw error;
    }
  }

}

const processDataController = new PROCESSDATA();

export {
  processDataController,
};
