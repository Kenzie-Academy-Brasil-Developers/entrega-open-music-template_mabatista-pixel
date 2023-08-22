const html = document.querySelector("html");
const button = document.querySelector(".header__button")

function themeChange() {
    const currentTheme = localStorage.getItem('@openMusicDarkMode')
    const img = document.createElement('img')
    img.classList.add("button__image")
    img.alt = "Theme Button"

    if (currentTheme === 'true') {
        img.src = "https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t"
        button.innerHTML = "";
        button.appendChild(img)
        html.classList.add('dark-mode')

    } else if (currentTheme === 'false') {
        img.src = "https://media.graphassets.com/AWCWFFLPSEWh4lhYs68c"
        button.innerHTML = '';
        button.appendChild(img)
        html.classList.remove('dark-mode')
    }

    button.addEventListener("click", () => {

        html.classList.toggle('dark-mode')

        if (html.classList.contains('dark-mode')) {
            localStorage.setItem("@openMusicDarkMode", true)
            img.src = "https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t"
            button.innerHTML = "";
            button.appendChild(img)

        } else {
            localStorage.setItem("@openMusicDarkMode", false)
            img.src = "https://media.graphassets.com/AWCWFFLPSEWh4lhYs68c"
            button.innerHTML = '';
            button.appendChild(img)
        }
    })
}

themeChange()
