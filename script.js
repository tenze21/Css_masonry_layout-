const cards=document.querySelectorAll('.item');
cards.forEach(card=>{
    card.addEventListener('click', ()=>{
        card.classList.toggle('active');
    })
})