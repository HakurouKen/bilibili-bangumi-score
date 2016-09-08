const PERSON = /\(\s?(\d+)人/;
const DOMAIN = 'http://bangumi.tv'

function get(title){
    let url = `${DOMAIN}/subject_search/${encodeURIComponent(title)}?cat=2`;
    return fetch(url).then(response => {
        return response.text();
    }).then(html => {
        let $doc = document.createElement('document');
        $doc.innerHTML = html;

        let $item = $doc.querySelector('#browserItemList .item');
        if (!$item) return Promise.reject(url);

        let $info = $item.querySelector('.rateInfo');
        let $score = $info.querySelector('.fade');

        return {
            score: +$score.innerText || 0,
            person: +($info.querySelector('.tip_j').innerText.match(PERSON) || [])[1] || 0,
            href: DOMAIN + $item.querySelector('.cover').getAttribute('href')
        };
    });
}

export { get }
