const trigger = document.querySelector('.trigger a')
const classadd = document.querySelector('.site')
trigger.addEventListener('click', function () {
    classadd.classList.toggle('mininav')
})

const submenu = document.querySelectorAll('.has-child > a');
function toogle() {
    submenu.forEach(item => item != this ? item.classList.remove('collapse') : null)
    // console.log(this.parentNode.classList.)

    if (!this.parentNode.classList.contains('collapse')) {
        this.parentNode.classList.remove('hidden-items')
        setTimeout(() => {
            this.parentNode.classList.add('collapse')
        }, 10);
    } else {
        this.parentNode.classList.remove('collapse')
        setTimeout(() => {
            this.parentNode.classList.add('hidden-items')
        }, 300);
    }


}
submenu.forEach(menu => menu.addEventListener('click', toogle))
