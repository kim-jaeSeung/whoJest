type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiRequestOptions<TBody = any> {
  method: HttpMethod;
  url: string;
  headers?: Record<string, string>;
  body?: TBody;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  ok: boolean;
}

async function fetchApi<TResponse, TBody = any>(
  options: ApiRequestOptions<TBody>
): Promise<ApiResponse<TResponse>> {
  const { method, url, headers, body } = options;

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = (await response.json()) as TResponse;

  return {
    data,
    status: response.status,
    ok: response.ok,
  };
}
