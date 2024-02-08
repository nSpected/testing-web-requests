fetch('https://proxy.playscape.com/games/v1/groups/7137781/games?accessFilter=1&limit=10&sortOrder=Asc')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
