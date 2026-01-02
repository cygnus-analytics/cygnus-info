export async function fetchAPI(url, options = {}) {
  const { method = "GET", body, next, cache } = options;

  // AUTO-PULL TOKEN: This ensures the token you put in Vercel is actually used
  const token = process.env.STRAPI_API_TOKEN;

  const headers = {
    method,
    headers: {
      "Content-Type": "application/json",
      // Use the token from env if it exists
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(next && { next }),
    ...(cache && { cache }),
  };

  try {
    const response = await fetch(url, headers);
    const contentType = response.headers.get("content-type");

    if (response.ok && contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      // Improved error logging to help you debug on Vercel
      const errorText = await response.text();
      console.error(`Fetch error: ${response.status} - ${errorText}`);
      return { status: response.status, statusText: response.statusText };
    }
  } catch (error) {
    console.error(`Error ${method} data:`, error);
    throw error;
  }
}