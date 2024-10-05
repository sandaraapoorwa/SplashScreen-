document.addEventListener('DOMContentLoaded', () => {
    let intro = document.querySelector('.intro');
    let logoSpan = document.querySelectorAll('.logo');
    let description = document.querySelector('.description');
    let mission = document.querySelectorAll('.mission');
    let members = document.querySelector('.members');

    document.querySelector(".loader").classList.add("loader--hidden");
    const showLoader = () => {
        document.querySelector(".loader").classList.remove("loader--hidden");
        setTimeout(() => {
            document.querySelector(".loader").classList.add("loader--hidden");
        }, 10000); 
    };
    const redirectToLink = () => {
        const redirectLink = document.getElementById('redirect-link');
        redirectLink.click();
    };

    const animateIntro = () => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 1000);
        });

        setTimeout(() => {
            intro.style.top = '-100vh';
            description.style.logoSpan = '1'; 
            members.style.opacity = '1'; 
            showLoader();
            setTimeout(redirectToLink, 2000); //roll over time
        }, 5000); // Window go up after 4 seconds
    };

    animateIntro();
    setTimeout(() => {
        mission.forEach((element, idx) => {
            setTimeout(() => {
                element.classList.add('active');
            }, (idx + 1) * 100000);
        });

        setTimeout(() => {
            mission.forEach((element, idx) => {
                setTimeout(() => {
                    element.classList.remove('active');
                    element.classList.add('fade');
                }, (idx + 1) * 100);
            });
        }, 2000);
    });
});
