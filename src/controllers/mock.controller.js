import * as mockService from "../services/mock.services.js";

export class MockController{

    async createMockes(req , res){
        try {
            const mock = await mockService.createUsersMock();

            if(!mock) return res.status(500).json({status: "Error", msg: "Error creando el mock"});
            res.status(200).json({status:"success", mock});
            
        } catch (error) {
            console.log(error);
        }
    }

    async getUsersMock (req, res){
        try {
          const response = await mockService.getUsersMock();
          res.json(response);
        } catch (error) {
          res.status(404).send(error);
        }
      };

    async getPetsMock (req, res){
        try {
          const response = await mockService.getPetsMock();
          res.json(response);
        } catch (error) {
          res.status(404).send(error);
        }
      };


    async createSomeMockes(req , res){
        try {
            const { cantP,cantM } = req.params;
            const mockP = await mockService.createUsersMock(cantP);
            const mockM = await mockService.createPetsMock(cantM);

            if(!mockP) return res.status(500).json({status: "Error", msg: "Error creando el mock"});
            if(!mockM) return res.status(500).json({status: "Error", msg: "Error creando el mock"});

            res.status(200).json({status:"success"});
            
        } catch (error) {
            console.log(error);
        }
    }

}