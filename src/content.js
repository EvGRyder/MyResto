function contentPage() {
    const contentContent = document.createElement('main')

    const work = document.createElement('div')
    work.style.display = "flex"
    work.style.flexDirection = "column"
    work.style.alignItems = "center"

    const tootle = document.createElement('h1')
    tootle.textContent = "Resto La Weed Presto"
    tootle.style.fontFamily = "Courier New"
    work.appendChild(tootle)

    const desc = document.createElement('section')
    desc.textContent = "This resto is the most lit in the land"
    desc.style.textAlign = "center"
    work.appendChild(desc)

    const weedPic = document.createElement('img')
    weedPic.src = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Cannabis_leaf.svg"
    weedPic.height = "300"
    work.appendChild(weedPic)

    contentContent.appendChild(work)
    contentContent.id = "frontpage"
    
    return contentContent
}


export { contentPage }