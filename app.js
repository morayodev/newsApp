
async function getNews() {
  let response = await fetch(
   
    "https://gnews.io/api/v4/search?q=example&token=a18170ebbaad1b1f2b330a6b74e257c3",
  
  )
  //return reponse json
  return response.json();
}
//calling the asyn function
getNews()
  .then(data => {
    data.articles.forEach((news, index, array) => {
      //to test forEach
     //console.log(news, index, array)
    
     
      display = `
              <div class="box1">
                <p>${news.title}</p>
                <section class="flex">
                 <a href="${news.url}">Read more</a>
                 <p>${getCurrentTime(news.publishedAt)} hours ago</p>
                 </section>
              </div>

      `;
      document.querySelector(".container").innerHTML += display

    })
    //console.log(data)
  })


  .catch(error => console.log(error))

function getCurrentTime(period) {
  let d = new Date();
  d.getHours()
  //console.log(period)
  
  let newPeriod = new Date(period)
  //console.log(newPeriod.getHours())
   return (d.getHours() - newPeriod.getHours())

}
let drop = document.querySelector(".navbarlist ul");
document.querySelector('#burger').addEventListener('click', function () {
  if (drop.style.display === "flex") {
    drop.style.display = "none";
  } else {
    drop.style.display = "flex";
  }
  
})


















