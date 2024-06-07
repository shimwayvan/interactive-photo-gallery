document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('mouseover', () => {
            for (let i = index; i < thumbnails.length; i++) {
                thumbnails[i].style.opacity = '0';
            }
        });

        thumbnail.addEventListener('mouseout', () => {
            thumbnails.forEach(thumb => {
                thumb.style.opacity = '1';
            });
        });
    });
});
