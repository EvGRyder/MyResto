const dish = (name, price) => {
    const container = document.createElement('div')
    container.style.padding = "10px"
    container.style.margin = "5px"
    container.style.height = "auto"
    container.style.width = "45%"
    container.style.boxShadow = "5px 5px"
    container.style.border = "solid 1px"
    container.style.flexGrow = "1"
    container.style.backgroundColor = "#34A56F"

    const dishName = document.createElement('h3')
    dishName.textContent = name
    dishName.style.textDecoration = "underline"
    dishName.style.textAlign = "center"
    container.appendChild(dishName)

    const dishDescription = document.createElement('p')
    dishDescription.textContent = "Now for the low low price of " + price
    dishDescription.style.textAlign = "center"
    container.appendChild(dishDescription)

    
    return container
} 


function menuPage() {
    const menuContent = document.createElement('div') 
    menuContent.style.display = "flex"
    menuContent.style.height = "100%"
    menuContent.style.width = "100%"
    menuContent.style.flexWrap = "wrap"
    menuContent.style.alignSelf = "stretch"

    menuContent.appendChild(dish("Hashes", 20))
    menuContent.appendChild(dish("Cookies", 20))
    menuContent.appendChild(dish("Straight up weed", 20))
    menuContent.appendChild(dish("Gummy bears", 20))
    menuContent.appendChild(dish("Straight up weed", 20))
    menuContent.appendChild(dish("Straight up weed", 20))
    menuContent.appendChild(dish("Straight up weed", 20))
    menuContent.appendChild(dish("Straight up weed", 20))

    return menuContent
}


export { menuPage }