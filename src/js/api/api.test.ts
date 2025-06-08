import apiFunc from "./api";
import { CareerData } from "../interface";

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
const mockFetch = jest.fn((input: RequestInfo) => {
  if (typeof input === "string" && input.includes("career.json")) {
    return Promise.resolve({
      json: () => Promise.resolve(mockCareerData),
    });
  }
  return Promise.resolve({
    json: () => Promise.resolve({ result: "success" }),
  });
  // return Promise.resolve({
  //   json: () => {
  //     Promise.resolve(mockCareerData);
  //   },
  // });
}) as jest.Mock;
global.fetch = mockFetch;
// // fetch를 모킹
// const mockFetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ result: "success" }),
//   })
// ) as jest.Mock;

// global.fetch = mockFetch;

describe("apiFunc", () => {
  it("정상적으로 데이터를 반환해야 한다", async () => {
    const data = await apiFunc<{ result: string }>("test");
    expect(data).toEqual({ result: "success" });
    expect(fetch).toHaveBeenCalledWith("./json/test.json", expect.any(Object));
  });

  it("에러 발생 시 빈 객체를 반환해야 한다", async () => {
    mockFetch.mockImplementationOnce(() => Promise.reject("error"));
    const data = await apiFunc<{ result: string }>("test");
    expect(data).toEqual({});
  });
});

test("apiFunc<CareerData>정상 작동", async () => {
  const data = await apiFunc<CareerData>("career");
  expect(data).toHaveProperty("experience");
});
