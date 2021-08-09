const snoopBio = `Calvin Cordozar Broadus Jr. (born October 20, 1971), 
                    known professionally as Snoop Dogg (previously Snoop 
                    Doggy Dogg and briefly Snoop Lion),is an American 
                    rapper, media personality, actor, and businessman. 
                    His fame dates to 1992 when he featured on Dr. Dre's 
                    debut solo single, "Deep Cover," and then on Dre's 
                    debut solo album, The Chronic. Broadus has since sold 
                    over 23 million albums in the United States and 35 million 
                    albums worldwide.`

function aboutPage() {
    const aboutContent = document.createElement('div') 
    aboutContent.textContent = snoopBio

    const snoop = document.createElement('img')
    snoop.src = "https://c.tenor.com/ev8UUqNOIm0AAAAi/snoop-dogg-dance.gif"

    aboutContent.appendChild(snoop)

    return aboutContent
}


export { aboutPage }

