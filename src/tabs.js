function navButtonGen(namen) {
    const newButton = document.createElement('button')
    newButton.style.margin = "5px 5px"
    newButton.textContent = namen
    newButton.addEventListener('click', () => console.log(namen))

    return newButton
}

const contentButton = navButtonGen('Content')
const contactButton = navButtonGen('Contact')
const menuButton = navButtonGen('Menu')
const aboutButton = navButtonGen('About')


export { menuButton, aboutButton, contactButton, contentButton }
