function rem(){
     document.documentElement.style.fontSize=document.documentElement.clientWidth/750+"rem"
}
rem()
window.onresize=rem
