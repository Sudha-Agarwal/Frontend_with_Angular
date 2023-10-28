if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('sw.js',{scope:'/'})
        .then(reg => {
            console.log("Service Worker Regsitered");
        })
        .catch(err=>{
            console.log('Service worker registeration failed',err);
        });
    })
}