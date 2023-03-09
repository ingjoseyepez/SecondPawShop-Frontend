/*if (localStorage.getItem('contador') ===){

}*/
localStorage.clear();
if (document.querySelector('body').id === 'bodyUser-NewProduct'){
    console.log(typeof (localStorage.getItem('contador')));
    console.log("Hola estoy en la pag de new product, "+ localStorage.getItem('contador'));
    localStorage.setItem('contador', localStorage.getItem('contador')+1);
}else if (document.querySelector('body').id === 'bodyUser-History'){
    console.log("Chao estoy en el historial, "+ localStorage.getItem('contador'));
    localStorage.setItem('contador', localStorage.getItem('contador')+1);

    console.log(localStorage.getItem('newProduct'));
}else if (document.querySelector('body').id === 'bodyUser-info'){
    localStorage.setItem('contador', localStorage.getItem('contador')+1);
    console.log("¿cómo estás? estoy  en la info, "+ localStorage.getItem('contador'));
}