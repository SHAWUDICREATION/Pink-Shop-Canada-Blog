jQuery(document).ready(function($){
    $('.slider-img').on('click',function(){
        $('.slider-img').removeClass('active');
        $(this).addClass('active');
    });
});

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const post = button.parentElement;
        const shortText = post.querySelector('.short');
        const fullText = post.querySelector('.full');

        if (button.textContent === 'Read More') {
            shortText.style.display = 'none';
            fullText.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            shortText.style.display = 'block';
            fullText.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});

// Initial setup to hide full text
document.querySelectorAll('.full').forEach(fullText => {
    fullText.style.display = 'none';
});
