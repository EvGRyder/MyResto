function navButtonGen(namen) {
    const newButton = document.createElement('button')
    newButton.style.padding = "10px 35px 10px 35px"
    newButton.style.backgroundColor = "sand"
    newButton.textContent = namen
    newButton.addEventListener('click', () => console.log(namen))

    return newButton
}

const contentButton = navButtonGen('Front Page')
const contactButton = navButtonGen('Contact')
const menuButton = navButtonGen('Menu')
const aboutButton = navButtonGen('About')


export { menuButton, aboutButton, contactButton, contentButton }
