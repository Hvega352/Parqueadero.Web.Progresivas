if('serviceWorker' in navigator){
    console.log('service Worker is available');
    window.addEventListener('load', function() {
        this.navigator.serviceWorker.register('./dist/serviceWork.js')
        .then(response=>console.log('Service Worker: '+response))
        .catch(err=>console.error(err));
    });
}