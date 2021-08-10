const weedPic = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Cannabis_leaf.svg"
const cookie = "https://upload.wikimedia.org/wikipedia/commons/8/8b/Copyleft.svg"
const browni = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMdRRxkPjwTZcpnIDdc-rNyMeuDzcbf27Yf3uVyveOX0vsrD9u3_VjAmx0uwmvaCIyAM&usqp=CAU"
const gummers = "https://cdn.cottagecountrycandies.com/wp-content/uploads/2018/02/Gummy-Bears-1050px.png"

const dish = (name, desc, price, pic) => {
    const container = document.createElement('div')
    container.style.display = "flex"
    container.style.padding = "5px"
    container.style.margin = "15px"
    container.style.width = "30%"
    container.style.boxShadow = "5px 5px"
    container.style.border = "solid 1px"
    container.style.flexGrow = "1"
    container.style.maxWidth = "400px"
    container.style.maxHeight = "200px"
    container.style.backgroundColor = "white"

    const foodContainer = document.createElement('div')
    foodContainer.style.display = "flex"
    foodContainer.style.flexBasis = "1"
    foodContainer.style.alignItems = "center"
    foodContainer.style.justifyContent = "center"
    foodContainer.style.height = "auto"
    foodContainer.style.width = "250px"
    foodContainer.style.borderRight = "dotted"
    foodContainer.style.marginRght = "0px 10px 0px 10px"
    container.appendChild(foodContainer)

    const foodImage = document.createElement('img')
    foodImage.src = pic
    foodImage.height = "115"
    foodContainer.appendChild(foodImage)

    const dishInfo = document.createElement('div')
    dishInfo.style.display = "flex"
    dishInfo.style.width = "100%"
    dishInfo.style.flexDirection = "column"
    dishInfo.style.paddingLeft = "10px"
    container.appendChild(dishInfo)

    const dishName = document.createElement('span')
    dishName.textContent = name
    dishName.style.textDecoration = "underline"
    dishName.style.textAlign = "center"
    dishName.style.paddingTop = "5px"
    dishInfo.appendChild(dishName)

    const dishDescription = document.createElement('p')
    dishDescription.textContent = desc
    dishDescription.style.textAlign = "center"
    dishDescription.style.height = "100%"
    dishInfo.appendChild(dishDescription)

    const dishPrice = document.createElement('div')
    dishPrice.textContent = `${price}$`
    dishPrice.style.alignSelf = "flex-end"
    dishInfo.appendChild(dishPrice)

    
    return container
} 


function menuPage() {
    const menuContent = document.createElement('div') 
    menuContent.style.display = "flex"
    menuContent.style.height = "100%"
    menuContent.style.width = "100%"
    menuContent.style.flexWrap = "wrap"
    menuContent.style.alignSelf = "stretch"

    menuContent.appendChild(dish("Hashes", hashDesc, 20, browni))
    menuContent.appendChild(dish("Cookies", cookiesDesc, 20, cookie))
    menuContent.appendChild(dish("Straight up weed", "weed lmao", 20, weedPic))
    menuContent.appendChild(dish("Gummy bears", "weed lmao", 20, gummers))
    menuContent.appendChild(dish("Straight up weed", "weed lmao", 20, weedPic))
    menuContent.appendChild(dish("Straight up weed", "weed lmao", 20, weedPic))
    menuContent.appendChild(dish("Straight up weed", "weed lmao", 20, weedPic))
    menuContent.appendChild(dish("Straight up weed", "weed lmao", 20, weedPic))

    return menuContent
}


export { menuPage }


const hashDesc = "Hash browns, are a popular American breakfast dish, consisting of finely chopped potatoes that have been fried until browned."
const cookiesDesc = "HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer"
const gummerDesc = "Gummy bears (German: Gummibär) are small, fruit gum candies, similar to a jelly baby in some English-speaking countries."