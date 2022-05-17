import ProfileModel from '../backingservices/databases/mongodb/models/profile.model';
class PROFILE {
    async createProfile(id: any, fullName: string, contactInfo: any) {
        try {
            const newProfile = {
                userId: id,
                fullName: fullName,
                email: contactInfo.email,
                linkedin: contactInfo.linkedin,
            };
            await ProfileModel.create(newProfile);
        } catch (error) {
            throw error;
        }
    }
}

const profileController = new PROFILE;

export {
    profileController,
};