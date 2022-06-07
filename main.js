
//on execution
window.onload = function nav_fn(){

    //hm button
    let hm = document.querySelector("#nav .hm-btn");

    //collapse
    let collapse = document.querySelector("#nav .collapse");

    hm.addEventListener('click',function(event){
        //console.log(hm);
        collapse.classList.toggle('active');
    });

}