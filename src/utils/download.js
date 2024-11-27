export const downloadFile = (fileName) => {
  const link = document.createElement('a');
  link.href = fileName;
  link.download = fileName;
  link.click();
};
