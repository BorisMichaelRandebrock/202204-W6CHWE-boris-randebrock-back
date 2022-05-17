// require("dotenv").config();
// const { robots } = require("../mocks/robots");
// const { getRobots } = require("./robotControllers");

// jest.mock("../../db/models/robots", () => ({
//   ...jest.requireActual("../../db/models/robots"),
//   find: () => robots,
//   findById: () => robots,
// }));

// describe("Given a getRobots function", () => {
//   const req = jest.fn();
//   const res = {
//     status: jest.fn().mockReturnThis(),
//     json: jest.fn(),
//   };

//   describe("When invoked", () => {
//     test("Then it sould call response's status method with value 200", async () => {
//       const expectStatusValue = 200;

//       await getRobots(req, res);

//       expect(res.status).toHaveBeenCalledWith(expectStatusValue);
//     });
//   });
// });

const { mockRobots, mockRobot } = require("../mocks/robots");
const { getRobots } = require("./robotControllers");

jest.mock("../../database/models/Robot", () => ({
  ...jest.requireActual("../../database/models/Robot"),
  find: jest.fn().mockResolvedValue(mockRobots),
  findByIdAndDelete: jest.fn().mockResolvedValue(mockRobot),
}));

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given a getRobot function", () => {
  describe("When it's invoked with a response", () => {
    test("Then it should call the response status method with a 200", async () => {
      const expectedResult = 200;

      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe("When it's invoked with a response", () => {
    test("Then it should call the response json method with a list of robots", async () => {
      await getRobots(null, res);

      expect(res.json).toHaveBeenCalledWith({ robots: mockRobots });
    });
  });
});
