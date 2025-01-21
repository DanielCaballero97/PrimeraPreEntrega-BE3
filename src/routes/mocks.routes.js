import { Router } from "express";
import { MockController } from '../controllers/mock.controller.js';

const mockController = new MockController();
const router = Router();

router.get("/mockingusers", mockController.createMockes);

router.post("/generateData/:cantP/:cantM", mockController.createSomeMockes);

router.get("/getUsers",mockController.getUsersMock);

router.get("/getPets",mockController.getPetsMock);

export default router;