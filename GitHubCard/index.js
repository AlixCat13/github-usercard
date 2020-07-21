/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const friendsArray = [
'https://api.github.com/users/tetondan', 
'https://api.github.com/users/dustinmyers', 
'https://api.github.com/users/justmsl', 
'https://api.github.com/users/luishrd', 
'https://api.github.com/users/bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

import axios from 'axios'

axios.get("https://api.github.com/users/AlixCat13")
.then((successResponse) => {
  console.log(successResponse)
  Object.entries(successResponse).forEach( (url) => {
  const newCard = cardMaker(url)
  cardGroup.appendChild(newCard)
  })
})

.catch((errorResponse) => {
  console.log('Error!', errorResponse)
})



const cardMaker = (data) => {
  
  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('p')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  userImg.src = Object['avatar_url']
  name.classList.add('name')
  userName.classList.add('username')

  
  name.textContent = data.name
  userName.textContent = data.login
  location.textContent = ('Location:', data.location)
  profile.textContent = 'Profile:', address
  address.setAttribute('href', data)
  address.textContent = data.html_url
  followers.textContent = ('Followers:' , data.followers)
  following.textContent = ('Following:' , data.following)
  bio.textContent = ('Bio:' , data.bio)


  profile.appendChild(address)
  card.appendChild(cardInfo)
  card.appendChild(name)
  card.appendChild(userName)
  card.appendChild(location)
  card.appendChild(profile)
  card.appendChild(followers)
  card.appendChild(following)
  card.appendChild(bio)

  return card  
}

const cardGroup = document.querySelector('.cards')

const newCard = friendsArray;



friendsArray.forEach(() => {
  newCard.appendChild(cardGroup)
})