async function apiFunc<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data: Partial<T> | null = null
): Promise<T> {
  method = method.toUpperCase() as "GET" | "POST" | "PUT" | "DELETE";
  console.log(data);
  try {
    const apiFunc = await fetch(`./json/${url}.json`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    });
    const apiFuncJson = await apiFunc.json();
    console.log("데이터 확인", apiFuncJson);
    return apiFuncJson as T;
  } catch (error) {
    console.error("데이터를 받아오는데 실패했습니다.", error);
    return {} as T;
  }
}

export default apiFunc;
//
