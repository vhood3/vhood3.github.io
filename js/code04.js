let projectArray = [
  1,
  'https://www.arcgis.com/apps/MapTour/index.html?appid=cbfdf33555724fd1b5282eb373d1d31a',
  'Story Map tour Scranton',
  'Book Assignment 1',
  true,
  ['Scranton','Story Map']
]
let projectObject = {
  id: 1,
  url = 'https://www.arcgis.com/apps/MapTour/index.html?appid=cbfdf33555724fd1b5282eb373d1d31a',
  title = 'Story Map tour Scranton',
  desc = 'Book Assignment 1',
  thumb: true,
  keywords: ['Scranton','Story Map']
}

console.log(projectArray[0], projectObject.id, projectObject["id"])
console.log(projectArray[1], projectObject.url, projectObject["url"])
console.log(projectArray[2], projectObject.title, projectObject["title"])
