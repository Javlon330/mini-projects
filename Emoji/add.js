const angry = document.querySelector(".angry");
const happy = document.querySelector(".happy");

angry.addEventListener('click', () => {
    if(happy.classList.contains('happy')){
        happy.classList.add('active');
        angry.classList.remove('active');
    }
})

happy.addEventListener('click', () => {
    if(angry.classList.contains('angry')){
        angry.classList.add('active');
        happy.classList.remove('active');
    }
})