let reg = document.forms.reg
let inputs = reg.querySelectorAll('input')
let btn = reg.querySelector('button')
let show = reg.querySelector('.show')
let pass = reg.querySelector('#pass')

reg.onsubmit = (e) => {

    e.preventDefault()

    let filled = true

    inputs.forEach(inp => {
        inp.classList.remove("error")

        if (inp.value.length === 0) {
            filled = false
            btn.style.backgroundColor = "red"
            inp.classList.add("error")
        }
    })

    if (filled) {
        let user = {}
        let fm = new FormData(reg)

        fm.forEach((value, key) => {
            user[key] = value
        })

        localStorage.setItem("valid", JSON.stringify(user))

        location.assign("about.html")

        console.log(user);
        reg.reset()
    }
}
show.onclick = () => {
    if (pass.type !== "text") {
        show.style.backgroundImage = `url("https://go.wepro.uz/_nuxt/img/monkey.ad68af6.png")`
        show.style.width ="100px"
        pass.type = "text"
    } else {
        show.style.backgroundImage = `url("https://go.wepro.uz/_nuxt/img/monkey-closed.397bfe9.png")`
        pass.type = "password"
        show.style.width ="30px"
    }
}