function navButtonGen(namen) {
    const newButton = document.createElement('button')
    newButton.style.padding = "10px 15px 10px 15px"
    newButton.style.backgroundColor = "black"
    newButton.style.color = "white"
    newButton.style.borderRadius = "60px"
    newButton.textContent = namen
    newButton.addEventListener('click', () => console.log(namen))

    return newButton
}

const contentButton = navButtonGen('Home')
const contactButton = navButtonGen('Contact')
const menuButton = navButtonGen('Menu')
const aboutButton = navButtonGen('About')


export { menuButton, aboutButton, contactButton, contentButton }
