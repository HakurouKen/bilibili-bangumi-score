import {get as get} from "./score"
import {render} from "./template"

let title = document.querySelector('.info-title').getAttribute('title');

get(title).then(info => {
    if ( info && info.score ) {
        document.querySelector('.info-count').insertAdjacentHTML('beforeend',render(info));
    }
}).catch(err=>{
    // ignore errors.
});
