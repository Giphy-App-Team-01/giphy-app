/**
 * Assigns an ID from an upload to the local storage if it doesn't already exist.
 *
 * @param {string} id - The ID to be assigned from the upload.
 */
export const assignIdFromUpload = (id) => {
  const uploadedIds = JSON.parse(localStorage.getItem('uploadId')) || [];

  if (!uploadedIds.includes(id)) {
    uploadedIds.push(id);
    localStorage.setItem('uploadId', JSON.stringify(uploadedIds));
  }
};

/**
 * Retrieves an array of upload IDs from local storage.
 *
 * @return {Array} An array of upload IDs. If no upload IDs are found, returns an empty array.
 */
export const getIdsFromUploads = () => {
  return JSON.parse(localStorage.getItem('uploadId')) || [];
};
