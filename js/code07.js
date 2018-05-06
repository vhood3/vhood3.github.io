let projectData = []


projectData[0] = {
  id: 1,
  url = 'https://www.arcgis.com/apps/MapTour/index.html?appid=cbfdf33555724fd1b5282eb373d1d31a',
  title = 'Story Map tour Scranton',
  desc = 'Book Assignment 1',
  thumb: true,
  keywords: ['Scranton','Story Map']
  }


projectData[1] = {
  id: 2,
  url = 'http://arcg.is/0KPn8a',
  title = 'Recent Earthquakes Worldwide',
  desc = 'Book Assignment 2',
  thumb: true,
  keywords: ['recent earthquakes']
}


for (let i = 0; i < projectData.length; i++) {
  createTitle(projectData[i].title)
  createthumbnail(projectData[i].thumb, projectData[i].id )

}
