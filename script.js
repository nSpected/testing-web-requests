fetch('https://games.roblox.com/v2/groups/7137781/games?accessFilter=1&limit=10&sortOrder=Asc')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));