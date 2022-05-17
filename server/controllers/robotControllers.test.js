require("dotenv").config();
const { robots } = require("../mocks/robots");
const { getRobots } = require("./robotControllers");

jest.mock("../../db/models/robots", () => ({
  ...jest.requireActual("../../db/models/robots"),
  find: () => robots,
  findById: () => robots,
}));

describe("Given a getRobots function", () => {
  const req = jest.fn();
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When invoked", () => {
    test("Then it sould call response's status method with value 200", async () => {
      const expectStatusValue = 200;

      await getRobots(req, res);

      expect(res.status).toHaveBeenCalledWith(expectStatusValue);
    });
  });
});
