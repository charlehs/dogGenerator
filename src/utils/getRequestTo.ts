export const getRequestTo = async (apiUrl: string) => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("HTTP error!");
    }
    const data = await response.json();

    return data;
  } catch (error) {}
};
