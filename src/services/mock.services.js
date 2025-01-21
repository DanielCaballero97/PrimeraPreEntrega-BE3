import { petModel } from "../mongo/models/Pet.model.js";
import { userModel } from "../mongo/models/user.model.js";
import { generateUser,generatePets } from "../utils/mockUser.utils.js";
import { createHash , isValidPassword} from "../utils/hashPassword.js";


export const createUsersMock = async (cantP) => {
    try {
      const users = [];
      if (!cantP) cantP = 50;
      for (let i = 0; i < cantP; i++) {
        const user = generateUser();
        user.password = createHash(user.password);
        users.push(user);
      }
      return await userModel.create(users);
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const getUsersMock = async () => {
    try {
      return await userModel.find({});
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const createPetsMock = async (cantM) => {
    try {
      const pets = [];
      for (let i = 0; i < cantM; i++) {
        const pet = generatePets();
        pets.push(pet);
      }
      return await petModel.create(pets);
    } catch (error) {
      throw new Error(error);
    }
  };

  export const getPetsMock = async () => {
    try {
      return await petModel.find({});
    } catch (error) {
      throw new Error(error);
    }
  };
//class MockService{

//    async createUsersMock() {
//            const cant = 50;
//            const users = [];
//            for (let i = 0; i < cant; i++) {
//                const user = generateUser();
//                //user.password = createHash(user.password);
//                users.push(user);
//            }
//            return await userModel.create(users);
//    }
      
      
//    async getUsers() {
//        return await userModel.find({});
//    }
//}


//export const mockService = new MockService();