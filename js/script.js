let reg = document.forms.reg
let inputs = reg.querySelectorAll('input')
let btn = reg.querySelector('button')

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
