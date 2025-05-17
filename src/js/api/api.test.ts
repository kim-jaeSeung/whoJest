import apiFunc from "./api";

// fetch를 모킹
const mockFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ result: "success" }),
  })
) as jest.Mock;
global.fetch = mockFetch;

describe("apiFunc", () => {
  it("정상적으로 데이터를 반환해야 한다", async () => {
    const data = await apiFunc<{ result: string }>("test");
    expect(data).toEqual({ result: "success" });
    expect(fetch).toHaveBeenCalledWith("./json/test.json", expect.any(Object));
  });

  it("에러 발생 시 빈 객체를 반환해야 한다", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() => Promise.reject("error"));
    const data = await apiFunc<{ result: string }>("test");
    expect(data).toEqual({});
  });
});
