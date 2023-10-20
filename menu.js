let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let wpp = document.getElementById('whatsappButton')



btnMenu.addEventListener("click", ()=>{
    menu.classList.add('abrir-menu')
})


menu.addEventListener("click", ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener("click", ()=>{
    menu.classList.remove('abrir-menu')
})

document.getElementById("whatsappButton").addEventListener("click", function() {
    // Substitua SEU_NUMERO_DE_TELEFONE_AQUI pelo número de telefone desejado
    const numeroDeTelefone = "+5519996171190";
    const url = `https://api.whatsapp.com/send?phone=${+5519996171190}`;
    window.location.href = url;
});
