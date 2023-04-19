export const handleResponse = async (response) => {
  try {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const handleSignUp = async (response) => {
  try {
    const data = await response;
    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};
