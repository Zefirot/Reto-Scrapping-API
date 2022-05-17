import EducationModel from '../backingservices/databases/mongodb/models/education.model';
class EDUCATION {
    async createEducation(id: any, institutionName: String, degree: String, period: String) {
        try {
            const newEducation = {
                profileOriginId: id ,
                institutionName,
                degree,
                period
            };
            await EducationModel.create(newEducation);
        } catch (error) {
            throw error;
        }
    }
}

const educationController = new EDUCATION;

export {
    educationController,
};