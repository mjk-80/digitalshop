export const uploadImage = async (formData: FormData) => {
  const response = await fetch('/api/image', {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  if (data) {
    return data;
  }
};
