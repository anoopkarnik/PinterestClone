// var home = document.querySelector("#home")
// home.style.color = "red";
// home.style.backgroundColor = "green";

// home.innerHTML = "<i> HOME</i>";
// home.textContent = "HOME";

// home.addEventListener("mouseenter", function(){
//     home.style.color = "blue";
//     home.style.backgroundColor = "yellow";
// });

// home.addEventListener("mouseleave", function(){
//     home.style.color = "red";
//     home.style.backgroundColor = "green";
// });

var arr = [
    {
        "name" : "One Piece",
        "image": "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    },
    {
        "name" : "Naruto",
        "image": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    },
    {
        "name" : "Attack on Titan",
        "image": "https://img.etimg.com/thumb/width-1600,height-900,imgsize-2996858,resizemode-75,msid-106601149/news/international/us/attack-on-titan-english-dub-series-finale-release-date-and-streaming-details-unveiled.jpg",
    },
    {
        "name" : "One Punch",
        "image": "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    },
    {
        "name" : "One Piece",
        "image": "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    },
    {
        "name" : "Naruto",
        "image": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    },
    {
        "name" : "Attack on Titan",
        "image": "https://img.etimg.com/thumb/width-1600,height-900,imgsize-2996858,resizemode-75,msid-106601149/news/international/us/attack-on-titan-english-dub-series-finale-release-date-and-streaming-details-unveiled.jpg",
    },
    {
        "name" : "One Punch",
        "image": "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    },
    {
        "name" : "One Piece",
        "image": "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    },
    {
        "name" : "Naruto",
        "image": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    },
    {
        "name" : "Attack on Titan",
        "image": "https://img.etimg.com/thumb/width-1600,height-900,imgsize-2996858,resizemode-75,msid-106601149/news/international/us/attack-on-titan-english-dub-series-finale-release-date-and-streaming-details-unveiled.jpg",
    },
    {
        "name" : "One Punch",
        "image": "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    }
];

function showTheCards(){
    var clutter = ""
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="${obj.name}" />
        <div class="caption">${obj.name}</div>
        </div>`;
    });
    document.querySelector('.container').innerHTML = clutter;

}

showTheCards();

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    input.addEventListener("focus", function(){
        document.querySelector(".overlay").style.display="block";
    });
    
    input.addEventListener("blur", function(){
        document.querySelector(".overlay").style.display="none";
    });

    input.addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        console.log(filteredArray);
        var clutter = ""
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5" ></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
        });
        console.log(clutter);
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;

    });
}

handleSearchFunctionality();