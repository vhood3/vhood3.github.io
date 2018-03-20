let projectObject1 = {
  id: 1,
  url = 'https://www.arcgis.com/apps/MapTour/index.html?appid=cbfdf33555724fd1b5282eb373d1d31a',
  title = 'Story Map tour Scranton',
  desc = 'Book Assignment 1',
  thumb: true,
  keywords: ['Scranton','Story Map']
}

let projectObject2 = {
  id: 2,
  url = 'http://arcg.is/0KPn8a',
  title = 'Recent Earthquakes Worldwide',
  desc = 'Book Assignment 2',
  thumb: true,
  keywords: ['recent earthquakes']
}

let projectObjects = [
  projectObject1,
  projectObject2
]

for (let i = 0; i < projectObjects.length; i++) {
  console.log('Element ' + i + ' title: ' + projectObjects[i].title)

for (let i = 0; i < projectObjects.length; i++) {
  createTitle(projectObjects[i].title)
  createThumbnail(projectObject[i].thumb, projectObject[i].id)
}


function createTitle (title) {
  console.log('Title: ' + title)
}
function createThumbnail (thumb, id) {
  if (thumb === true) {
    console.log('images/project' + id + '.png')
  } else {
    console.log('images/no-preview.png')
  }
}
