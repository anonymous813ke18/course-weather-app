function checkDay (timezone) {
    const now = new Date();

    const localTime = parseInt(
        now.toLocaleTimeString('en-GB', {
            timeZone: timezone,
            hour: '2-digit',
            hour12: false,
        })
    );

    const isDay = localTime >= 6 && localTime < 18;

    return isDay;
}

function switchSvg (searchBtn) {
    const svg = searchBtn.querySelector('svg');

    if (svg.classList.contains('search-svg')) {
        searchBtn.replaceChildren();

        const loadingSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        // width="30" height="30" viewBox="0 0 30 30" class="loading-svg"
        loadingSvg.setAttribute('width', '30');
        loadingSvg.setAttribute('height', '30');
        loadingSvg.setAttribute('viewBox', '0 0 30 30');
        loadingSvg.setAttribute('class', 'loading-svg');

        const animateTransform = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        animateTransform.setAttribute('attributeName', 'transform');
        animateTransform.setAttribute('type', 'rotate');
        animateTransform.setAttribute('from', '0 0 0');
        animateTransform.setAttribute('to', '360 0 0');
        animateTransform.setAttribute('dur', '2.5s');
        animateTransform.setAttribute('repeatCount', 'indefinite');
        loadingSvg.appendChild(animateTransform);

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M17 4v4a1 1 0 0 1-1 1 1 1 0 0 1-1-1V4a1 1 0 0 1 1-1 1 1 0 0 1 1 1zm11 11h-4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-5.636 5.95a1 1 0 0 0-1.396.018 1 1 0 0 0-.018 1.396l2.828 2.829a1 1 0 0 0 1.415 0 1 1 0 0 0 0-1.415l-2.829-2.828zM16 23a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-6.364-2.05l-2.829 2.828a1 1 0 0 0 0 1.415 1 1 0 0 0 1.415 0l2.828-2.829a1 1 0 0 0-.018-1.396 1 1 0 0 0-1.396-.018zM9 16a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm-.777-9.192a1 1 0 0 0-1.415 0 1 1 0 0 0 0 1.415l2.829 2.828a1 1 0 0 0 1.396-.018 1 1 0 0 0 .018-1.396L8.223 6.808z');
        loadingSvg.appendChild(path);

        searchBtn.appendChild(loadingSvg);
    }
}

export { checkDay, switchSvg }