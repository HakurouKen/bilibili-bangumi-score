
import '../styles/style.scss'

function template(data={}){
    return `
    <a id="bangumi-score" target="_blank" class="info-count-item" href="${data.href || 'javascript:void(0);'}">
    	<span class="info-label">Bangumi 评分</span>
    	<em>
            <span class="bangumi-score">${data.score}</span>
            <span class="bangumi-person">( 共 ${data.person} 人评价 )</span>
        </em>
    </a>
    `
}

let $container = document.createElement('template');

function render(data = {}){
    return template(data);
}

export { render }
