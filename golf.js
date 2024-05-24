//const saltLakeCounty = document.getElementById('saltLakeCounty');


fetch("test.json")//json파일 읽어오기
.then((response) => response.json())//읽어온 데이터를 json으로 변환
.then((json) => {
data = json.Sheet1;//json에 있는 items만 받아오기
data.forEach(element => {

    //create currnet course div
    var currentDiv = document.createElement("div")
    currentDiv.classList.add("golfCourse");
    currentDiv.id = element.name;
    console.log(currentDiv.id);

    //name header
    var header = document.createElement("h1");
    header.classList.add("courseName")
    header.textContent = element.name;

    //website Link
    var webLink = document.createElement("a");
    webLink.href = element.website;
    webLink.textContent="Website Link";
    webLink.classList.add("websiteLink");

    //booksite Link
    var bookLink = document.createElement("a");
    bookLink.href = element.bookLink;
    bookLink.textContent="Book Online";
    bookLink.classList.add("bookLink");

    //map link
    var map = document.createElement("iframe");
    map.src = element.map;
    map.classList.add("mapIframe");

    // price div
    var priceDiv = document.createElement("div");
    priceDiv.classList.add("priceDiv");
    priceDiv.id = element.name + "Price";

    // 9 hole price
    var ninePrice = document.createElement("p");
    ninePrice.classList.add("nineHolePrice");
    ninePrice.textContent = "9 holes: $" + element.nineHolePrice + ",  "; 
    
     // 18 hole price
     var eighteenPrice = document.createElement("p");
     eighteenPrice.classList.add("eighteenHolePrice");
     eighteenPrice.textContent = "18 holes: $" + element.eighteenHolePrice; 

     //google stars
     var stars = document.createElement("p");
     stars.classList.add("reviewStars");
     stars.textContent = "Google Ratings: " + element.stars + " stars";

     // number of holes 
     var holes = document.createElement("p");
     holes.classList.add("holes");
     holes.textContent = "Total "+ element.holes + " holes"

    document.getElementById("saltLakeCounty").appendChild(currentDiv);
    document.getElementById(element.name).appendChild(header);
    document.getElementById(element.name).appendChild(webLink);
    document.getElementById(element.name).appendChild(bookLink);
    document.getElementById(element.name).appendChild(holes);
    document.getElementById(element.name).appendChild(stars);
    document.getElementById(element.name).appendChild(priceDiv);
    document.getElementById(priceDiv.id).appendChild(ninePrice);
    document.getElementById(priceDiv.id).appendChild(eighteenPrice);
    
    document.getElementById(element.name).appendChild(map);
})
});
  
