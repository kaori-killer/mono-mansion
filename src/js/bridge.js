const pages = ["MyHeader", "MyFooter"];

$(document).ready(function(){
    pages.map((it) => {
        $(`.${it}`).load(`../components/${it}.html`);
    })
})