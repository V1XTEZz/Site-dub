function scrollToHighlight(id) {
    const el = document.getElementById(id);

    // Прокрутка
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // Небольшая задержка после скролла
    setTimeout(() => {

        el.classList.add('scroll');

        setTimeout(() => {
            el.classList.remove('scroll');

            setTimeout(() => {
                el.classList.add('scroll');

                setTimeout(() => {
                    el.classList.remove('scroll');
                }, 200);

            }, 150);

        }, 150);

    }, 700);
}