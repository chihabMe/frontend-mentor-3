let show_btn = document.getElementById('menu-show')
let menu = document.getElementById('menu')
let show = false 
window.addEventListener('resize',()=>{
    if(!show){
    menu.classList.remove('show')
    show = false
}
})
show_btn.addEventListener('click',()=>{
    if(!show){
        menu.classList.remove('show')
        show = true

    }else{
        menu.classList.add('show')
        show=false
    }
})