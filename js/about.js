let about = document.forms.about
let inp = about.querySelector('input')
let inputs = about.querySelectorAll('input')
let pass = about.querySelector('#pass')
let btn = about.querySelector('button')
let show = about.querySelector('.show')

let localedData = JSON.parse(localStorage.getItem("valid"))

inp.value = localedData.email


about.onsubmit = (e) => {

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
        let fm = new FormData(about)

        fm.forEach((value, key) => {
            user[key] = value
        })


        if (user.pass === localedData.pass) {
            location.assign("client.html")
            about.reset()
            btn.innerHTML = "Submit"
            inp.nextElementSibling.classList.remove("error")
        } else {
            inp.nextElementSibling.classList.add("error")
            btn.style.backgroundColor = "red"
            btn.innerHTML = "pass is not correct"
        }

        console.log(user);
    }
}
show.onclick = () => {
    if (pass.type !== "text") {
        show.style.backgroundImage = `url("https://go.wepro.uz/_nuxt/img/monkey.ad68af6.png")`
        pass.type = "text"
    } else {
        show.style.backgroundImage = `url("https://go.wepro.uz/_nuxt/img/monkey-closed.397bfe9.png")`
        pass.type = "password"
    }
}