function contentPage() {
    const contentContent = document.createElement('main')

    const work = document.createElement('div')

    const element = document.createElement('header')
    element.textContent = "This be the HEEDER"
    work.appendChild(element)

    const tootle = document.createElement('h1')
    tootle.textContent = "Resto La Weed Presto"
    tootle.style.fontFamily = "Courier New"
    work.appendChild(tootle)

    const desc = document.createElement('section')
    desc.textContent = "This resto is the most lit in the land"
    work.appendChild(desc)

    const snoop = document.createElement('div')
    snoop.textContent = "Have a snoop"
    work.appendChild(snoop)

    const snoopPic = document.createElement('img')
    snoopPic.src = "https://st2.depositphotos.com/5326338/7977/i/950/depositphotos_79779166-stock-photo-rapper-snoop-dogg.jpg"
    snoopPic.height = "300"
    work.appendChild(snoopPic)

    contentContent.appendChild(work)
    contentContent.id = "frontpage"
    
    return contentContent
}


export { contentPage }