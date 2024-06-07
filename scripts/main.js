document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const span = document.getElementsByClassName('close')[0];

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const fullSizeImg = thumbnail.getAttribute('data-full');
            modal.style.display = 'block';
            modalImg.src = fullSizeImg;
            captionText.innerHTML = thumbnail.getElementsByTagName('img')[0].alt;
        });
    });

    span.onclick = () => {
        modal.style.display = 'none';
    };

    modal.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    };
});
