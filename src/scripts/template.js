
import '../styles/style.scss'

function containerTemplate(url,content){
    return `
    <a id="bangumi-score" target="_blank" class="info-count-item" href="${url || 'javascript:void(0);'}">
        <span class="info-label">Bangumi 评分</span>
        <em>
            ${content}
        </em>
    </a>
    `;

}

function template(data={}){
    return containerTemplate(data.href,
        `
            <span class="bangumi-score">${data.score}</span>
            <span class="bangumi-person">( 共 ${data.person || '-'} 人评价 )</span>
        `
    );
}

function render(data=null){
    if (data && data.score) return template(data);
    let url = typeof data === 'string' ? data : '';
    return containerTemplate(
        url,
        `未找到结果${url ? ', 前往搜索' : ''}`
    );
}

export { render }
