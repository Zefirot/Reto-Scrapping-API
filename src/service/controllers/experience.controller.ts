import ExperienceModel from '../backingservices/databases/mongodb/models/experience.model';
class EXPERIENCE {
    async createExperience(id: any, rol: String, place: String, period: String) {
        try {
            const newExperience = {
                profileOriginId: id ,
                rol,
                place,
                period
            };
            await ExperienceModel.create(newExperience);
        } catch (error) {
            throw error;
        }
    }
}

const experienceController = new EXPERIENCE;

export {
    experienceController,
};