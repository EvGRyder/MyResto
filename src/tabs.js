function navButtonGen(namen) {
    const newButton = document.createElement('button')
    newButton.style.padding = "10px auto 10px auto"
    newButton.style.margin = "0px 10px 0px 10px"
    newButton.style.backgroundColor = "black"
    newButton.style.color = "white"
    newButton.style.borderRadius = "60px"
    newButton.style.flexGrow = "1"
    newButton.style.maxWidth = "150px"
    newButton.textContent = namen
    newButton.addEventListener('click', () => console.log(namen))

    return newButton
}

const contentButton = navButtonGen('Home')
const contactButton = navButtonGen('Contact')
const menuButton = navButtonGen('Menu')
const aboutButton = navButtonGen('About')


export { menuButton, aboutButton, contactButton, contentButton }
