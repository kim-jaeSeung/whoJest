import apiFunc from "./api/api";
import { CareerData } from "./interface";

const mockCareerData: CareerData = {
  experience: [
    {
      company: "1",
      department: "2",
      position: "3",
      role: "4",
      start_date: "2020-01-01",
      end_date: "2021-01-01",
      duration: "1년",
    },
  ],
};

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockCareerData),
    })
  ) as jest.Mock;
});

test("apiFunc<CareerData>정상 작동", async () => {
  const data = await apiFunc<CareerData>("career");
  expect(data).toHaveProperty("experience");
});
