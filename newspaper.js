
////////////////////////////////NYT Tech/////////////////////////////
$(function() {
  let apiKey = "51ce85c9b08d41bba7554c67a847f1c9";
  let url = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".newYorkTimes").empty();
      let nytArticle = data.results[1];{
      let html = '<div class="col-fluid">';
      // html = html + '<div id="nytArticle" class="card">';
      let nytImage = nytArticle.multimedia[3];
      html = html + '<img class="card-img-top" src="' + nytImage.url + '">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + nytArticle.title + '</h4>';
      html = html + '<p class="source"><em>New York Times</em></p>';
      html = html + '<p class="card-text">' + nytArticle.abstract + '</p>';
      html = html + '<div  style="text-align: center;"><a href="' + nytArticle.url + '" class="btn btn-primary">Read More</a></div>';
      html = html + '</div></div></div>';
      $(".newYorkTimes").append(html);
    }
    // $(".newYorkTimes").fadeIn(2000);
  });
});


///////////////////////////////Wired/////////////////////////////

$(function() {
  let apiKey = "2ff33f902a8344b999cd4142e0e75c47";
  let url = "https://newsapi.org/v2/top-headlines?sources=wired&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".wiredFirst").empty();
      let wiredTech = data.articles[0];{
      let html = '<div class="col-fluid">';
      // html = html + '<div id="wiredTech" class="card">';
      html = html + '<img class="card-img-top" src="' + wiredTech.urlToImage + '">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + wiredTech.title + '</h4>';
      html = html + '<p class="source"><em>Wired</em></p>';
      html = html + '<p class="card-text">' + wiredTech.description + '</p>';
      html = html + '<div  style="text-align: center;"><a href="' + wiredTech.url + '" class="btn btn-primary">Read More</a></div>';
      html = html + '</div></div></div>';
      $(".wiredFirst").append(html);
    }
    // $(".wiredFirst").fadeIn(2000);
  });
});


//////////////////////////Wired Article 2/////////////////////////

$(function() {
  let apiKey = "2ff33f902a8344b999cd4142e0e75c47";
  let url = "https://newsapi.org/v2/top-headlines?sources=wired&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".wiredSecond").empty();
      let wiredTech = data.articles[1];{
      let html = '<div class="col-fluid">';
      // html = html + '<div id="wiredTwo" class="card">';
      html = html + '<img class="card-img-top" src="' + wiredTech.urlToImage + '">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + wiredTech.title + '</h4>';
      html = html + '<p class="source"><em>Wired</em></p>';
      html = html + '<p class="card-text">' + wiredTech.description + '</p>';
      html = html + '<div  style="text-align: center;"><a href="' + wiredTech.url + '" class="btn btn-primary">Read More</a></div>';
      html = html + '</div></div></div>';
      $(".wiredSecond").append(html);
    }
    // $(".wiredSecond").fadeIn(2000);
  });
});

//////////////////////////TechCrunch/////////////////////////

$(function() {
  let apiKey = "2ff33f902a8344b999cd4142e0e75c47";
  let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".techCrunch").empty();
      let techCrunchTech = data.articles[0];{
      let html = '<div class="col-fluid">';
      // html = html + '<div id="techCrunch" class="card">';
      html = html + '<img class="card-img-top" src="'+ techCrunchTech.urlToImage +'">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + techCrunchTech.title + '</h4>';
      html = html + '<p class="source"><em>TechCrunch</em></p>';
      html = html + '<p class="card-text">' + techCrunchTech.description + '</p>';
      html = html + '<div  style="text-align: center;"><a href="' + techCrunchTech.url + '" class="btn btn-primary">Read More</a></div>';
      html = html + '</div></div></div>';
      $(".techCrunch").append(html);
    }
    // $(".techCrunch").fadeIn(2000);
  });
});

//////////////////////////TechRadar/////////////////////////

$(function() {
  let apiKey = "2ff33f902a8344b999cd4142e0e75c47";
  let url = "https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".techRadar").empty();
      let techRadarTech = data.articles[0];{
      let html = '<div class="col-fluid">';
      // html = html + '<div id="techRadar" class="card">';
      html = html + '<img class="card-img-top" src="'+ techRadarTech.urlToImage +'">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + techRadarTech.title + '</h4>';
      html = html + '<p class="source"><em>TechRadar</em></p>';
      html = html + '<p class="card-text">' + techRadarTech.description + '</p>';
      html = html + '<div  style="text-align: center;"><a href="' + techRadarTech.url + '" class="btn btn-primary">Read More</a></div>';
      html = html + '</div></div></div>';
      $(".techRadar").append(html);
    }
    // $(".techRadar").fadeIn(2000);
  });
});


//////////////////////////Recode/////////////////////////

$(function() {
  let apiKey = "2ff33f902a8344b999cd4142e0e75c47";
  let url = "https://newsapi.org/v2/top-headlines?sources=recode&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".recode").empty();
      let recodeTech = data.articles[0];{
      let html = '<div class="col-fluid">';
      // html = html + '<div id="recode" class="card">';
      html = html + '<img class="card-img-top" src="'+ recodeTech.urlToImage +'">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + recodeTech.title + '</h4>';
      html = html + '<p class="source"><em>Recode</em></p>';
      html = html + '<p class="card-text">' + recodeTech.description + '</p>';
      html = html + '<div  style="text-align: center;"><a href="' + recodeTech.url + '" class="btn btn-primary">Read More</a></div>';
      html = html + '</div></div></div>';
      $(".recode").append(html);
    }
    // $(".recode").fadeIn(2000);
  });
});


/////////////////////////////the Guardian///////////////////////////
$(function() {
  let apiKey = "e1b6cf98-234c-4e48-b085-9a645a970fcf";
  let url = "https://content.guardianapis.com/search?q=technology&show-fields=thumbnail&show-blocks=all&api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".guardian").empty();
      let guardianTech = data.response.results[0];{
      let html = '<div class="row  align-items-start">';
      html = html + '<div class="col-sm-3">';
      html = html + '<h1 class="topStory">Today&apos;s Top Story</h1>';
      html = html + '</div>';
      html = html + '<div class:"guardianTop" class="col-sm-9">';
      html = html + '<img class="card-img-top" src="'+ guardianTech.fields.thumbnail +'">';
      html = html + '<h3 class="card-title">' + guardianTech.webTitle + '</h3>';
      html = html + '<p class="source"><em>The Guardian</em></p>';
      html = html + '</div>';
      html = html + '<div class="guardianColumn">';
      html = html + '<div class="col">';
      let guardianBody = guardianTech.blocks.body[0];
      html = html + '<p class="card-text">' + guardianBody.bodyTextSummary + '</p>';
      html = html + '<div  style="text-align: center;"><a href="' + guardianTech.webUrl + '">Read More</a></div>';
      html = html + '</div></div>';
      $(".guardian").append(html);
    }
    // $(".guardian").fadeIn(2000);
  });
});


////////////////////////////Date/////////////////////////////

let d = new Date();
console.log(d.toDateString());
$('.date').html('<div class="date">' + d + ' // Front Page')


///////////////////////////Weather//////////////////////////

let updateWidget = function(data) {

  console.log("Got weather data: ", data)

  let weatherData = Math.round(data.main["temp"])
  let weatherTemp = $('.card-textWeather')
  weatherTemp.html('<p class="card-textWeather">' + weatherData + " degrees" + '</p>')

  let weatherImage = data.weather[0]
  let weather_url = "http://openweathermap.org/img/w/" + weatherImage.icon + ".png"
  $("#weather img").attr("src", weather_url)

  let weatherName = data.name
  let weatherLocation = $('.card-titleWeather')
  weatherLocation.html('<p class="card-titleWeather">' + weatherName + '</p>')
}

let getWeather = function(info) {
  let latitude = info.coords.latitude.toFixed(4)
  let longitude = info.coords.longitude.toFixed(4)

  let apiKey = '5493a82a7d5f7d8a241d3f8deb12e3dc';

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'


  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);

}

window.onload = handlePosition = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
}


$("#get_forecast").on("click", handlePosition)
window.onload.handlePosition

/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
