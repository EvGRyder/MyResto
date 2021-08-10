import { menuButton, aboutButton, contentButton, contactButton } from "./tabs";
import { aboutPage } from "./about";
import { contentPage } from "./content"
import { menuPage } from "./menu";
import { myFooter } from "./footer";
import { contactPage } from "./contact";

// HTML
const hotl = document.querySelector('html')
hotl.style.height = "100%"

// Body
const bodish = document.querySelector('body')
bodish.style.background = "linear-gradient(rgba(170,240,193,1) 65%, rgba(120,94,77,1) 90%, rgba(112,72,60,1) 95%)"
bodish.style.backgroundAttachment = "fixed"
bodish.style.display = "flex"
bodish.style.flexDirection = "column"
bodish.style.height = "98%"
bodish.style.margin = "0px"

// Navigation
const nevvi = document.createElement('nav')
nevvi.style.width = "100%"
nevvi.style.display = "flex"
nevvi.style.flexWrap = "wrap"
nevvi.style.margin = "0px"
nevvi.style.padding = "10px 0px 10px 0px"
nevvi.style.justifyContent = "space-evenly"
nevvi.style.backgroundColor = "black"

let contentContent = contentPage()
let aboutContent = aboutPage()
let menuContent = menuPage()
let contactContent = contactPage()

contentButton.addEventListener('click', () => tabber(contentContent))
aboutButton.addEventListener('click', () => tabber(aboutContent))
menuButton.addEventListener('click', () => tabber(menuContent))
contactButton.addEventListener('click', () => tabber(contactContent))

nevvi.appendChild( contentButton )
nevvi.appendChild( menuButton )
nevvi.appendChild( aboutButton )
nevvi.appendChild( contactButton )

// Content Slice
const main = document.getElementById('content')
main.style.display = "flex"
main.style.justifyContent = "center"
main.style.width = "auto"
main.style.flexGrow = "1"

// Dynamic Page within Content Slive
const page = document.createElement('div')
page.id = "page"
page.style.margin = "20px"
main.appendChild(page)
page.appendChild(contentContent)

// Footer
const footer = myFooter()

// Attaching everything
bodish.appendChild(nevvi)
bodish.appendChild(main)
bodish.appendChild(footer)




function tabber(nextPage) {
    let currentPage = page.childNodes[0]
    page.removeChild(currentPage)
    page.appendChild(nextPage)
}