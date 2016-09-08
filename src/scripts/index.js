import { get as get } from "./score"
import { render } from "./template"

let title = document.querySelector('.info-title').getAttribute('title');
let $count = document.querySelector('.info-count');
get(title).then(info => {
    if ($count) {
        $count.insertAdjacentHTML('beforeend',render(info));
    }
}).catch(err=>{
    if ($count && typeof err === 'string') {
        $count.insertAdjacentHTML('beforeend',render(err));
    }
});
