var playBtn;
var sngname;
var artname;
var tts;
var app;
var body;
var thumbnail;
var songs = [
    {id: 1, songName: "Darkside", artist: "Alan Walker", link: "https://dl.dropbox.com/s/3y3w79lqvy4mwxh/Alan%20Walker%20-%20Darkside.mp3?raw=1", thumbnail: "https://dl.dropbox.com/s/brlk8ano6w6qzd9/wp2383971-alan-walker-logo-wallpapers.jpg?raw=1"},
    
    {id: 2, songName: "Sing Me To Sleep", artist: "Alan Walker", link: "https://dl.dropbox.com/s/8eml5r6ky35pwsc/Alan%20Walker%20-%20Sing%20Me%20to%20Sleep%20-%20MP3%20320.mp3?raw=1", thumbnail: "https://dl.dropbox.com/s/enuh5g9zfli7plm/wp2383907-alan-walker-logo-wallpapers.jpg?raw=1"},
    
    {id: 3, songName: "On My Way", artist: "Alan Walker", link: "https://dl.dropbox.com/s/8jngsfgicfwcz3i/Alan%20Walker%2C%20Sabrina%20Carpenter%20%26%20Farruko%20%20-%20On%20My%20Way.mp3?raw=1", thumbnail: "https://dl.dropbox.com/s/hz64cpmd7icftc8/wp4236603-alan-walker-on-my-way-wallpapers.jpg?raw=1"},
    
     {id: 4, songName: "Faded", artist: "Alan Walker", link: "https://dl.dropbox.com/s/akk34b59swgauvu/Faded%20%28Alan%20Walker%29%20320Kbps-%28GanaMirchi.in%29.mp3?raw=1", thumbnail: "http://a10.gaanacdn.com/images/albums/62/1846262/crop_480x480_1846262.jpg"},
     
      {id: 5, songName: "Ignite", artist: "Alan Walker", link: "https://dl.dropbox.com/s/zh6msl6zz46qb3e/K-391%20%20Alan%20Walker%20-%20Ignite%20%28feat.%20Julie%20Bergan%20%20Seungri%29.mp3?raw=1", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUUmqUuRIOhJJ3WzIhDUUdznTHJjY9ZqEa5ov8vbB9k-zL0rS"},
      
       {id: 6, songName: "Alone", artist: "Alan Walker", link: "https://dl.dropbox.com/s/8zxdi4wgqplyny0/Alone-%28MrPaji.com%29.mp3?raw=1", thumbnail: "https://dl.dropbox.com/s/69u5dxjkxoi0fyq/wp4236570-alan-walker-on-my-way-wallpapers.png?raw=1"}
];

var isPlaying = false;
var songIndex = 0;

var playSong;

var apply = false;
window.onload = () => {
    body = document.getElementById("body");
    var loader = document.getElementById("loader");
    app = document.getElementById("app");
    thumbnail = document.getElementById("thumbnail");
    setTimeout(() => {
        loader.style.display = "none";
        app.style.display = "block";
    }, 2000);
    playBtn = document.getElementById("play");
    sngname = document.getElementById("song-name");
    artname = document.getElementById("artist-name");
    sngname.innerText = songs[songIndex].songName;
    artname.innerText = songs[songIndex].artist;
    thumbnail.src = songs[songIndex].thumbnail;
}
const fav = () => {
    var likebtn = document.getElementById("fav");
    apply = (!apply);
    (apply)?likebtn.style.color = "#CD6155":likebtn.style.color = "red";
    alert("Added To Your Favourite list")
}

const play = () =>{
    if(!isPlaying){
        playSong = new Audio();
        playSong.src = songs[songIndex].link;
        playSong.play();
        
        isPlaying = true;
        playBtn.className = "fa fa-pause";
    }else{
        playSong.pause();
        isPlaying = false;
        playBtn.className = "fa fa-play";
    }
    sngname.innerText = songs[songIndex].songName;
    artname.innerText = songs[songIndex].artist;
    thumbnail.src = songs[songIndex].thumbnail;
}
tts = songs.length;
const next = () => {
    if(isPlaying){playSong.pause();isPlaying = false;}
    if(songIndex < tts-1){
        songIndex++;
    }else{
        songIndex = 0;
    }
    play();
} 

const prev = () => {
    if(isPlaying){playSong.pause();isPlaying = false;}
    if(songIndex > 0){songIndex--};
    play();
}
function Sidebar(){
    document.getElementById("Sidebar").classList.toggle('active');
}
const about = () => {
    alert("1)Developed By : Ekansh Ranapaheli\n2)Sang by : Alan Walker");
}