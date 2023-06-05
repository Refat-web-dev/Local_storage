header()

function header() {
    let header = document.createElement("header")
    let nav = document.createElement("nav")
    let links = document.createElement("div")
    for (let title of ['Главная', 'Мои кошельки', 'Мои транзакции']) {
        let a = document.createElement("a")
        a.href = "#"
        a.innerHTML = title
        links.append(a)
    }
    let logOut = document.createElement("button")
    let span = document.createElement("span")
    let img = document.createElement("img")

    nav.classList.add("container")
    links.classList.add("links")
    logOut.classList.add("log_out")

    span.innerHTML = localedData.email
    img.src = "./img/icons/out.png"

    header.append(nav)
    nav.append(links, logOut)
    logOut.append(span, img)
    body.append(header)

    logOut.onclick = () => {
        location.assign("index.html")
    }
}
