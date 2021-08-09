function myFooter() {
    const footer = document.createElement('footer')

    const githubLink = document.createElement('a')
    githubLink.href = "https://google.com" 
    githubLink.textContent = "Rights and stuff i guess"

    footer.appendChild(githubLink)

    footer.style.textAlign = "center"
    footer.style.backgroundColor = "#34A56F"
    footer.style.padding = "5px"
    footer.style.width = "auto"
    footer.style.height = "25px"


    return footer
}


export { myFooter }