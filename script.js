const dialog = document.querySelector('#lightbox');
const dialogImg = dialog.querySelector('img');

document.querySelector('.flex-container').addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;
    console.log(img);
    dialogImg.src = img.src;
    dialogImg.alt = img.alt;
    dialog.showModal();
});

dialog.addEventListener('click', () => dialog.close());
