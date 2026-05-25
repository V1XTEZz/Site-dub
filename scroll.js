function scrollToHighlight(id) {
    const el = document.getElementById(id);

    el.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    setTimeout(() => {

        el.classList.add('scroll');

        setTimeout(() => {
            el.classList.remove('scroll');

            setTimeout(() => {
                el.classList.add('scroll');

                setTimeout(() => {
                    el.classList.remove('scroll');
                    
                    setTimeout(() => {
                        el.classList.add('scroll');

                        setTimeout(() => {
                            el.classList.remove('scroll');
                        }, 250);

                    }, 200);
                    
                }, 250);

            }, 200);

        }, 250);

    }, 500);
}
