const downloadBtn = document.getElementById('download-btn');
const downloadMenu = document.getElementById('download-menu');

downloadBtn.addEventListener('click', () => {
  const selectedItem = downloadMenu.value;
  if (selectedItem) {
    const a = document.createElement('a');
    a.href = selectedItem;
    a.download = selectedItem;
    a.click();
  }
});
