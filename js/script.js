console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
// let audioElement = document.querySelector("audio");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
//Kal Ho Naa Ho - Shahrukh Khan
// 
let songs = [
    { SongName: "Raataan Lambiyan", filePath: "Songs/1.mp3", coverPath: "Covers/1.jpg" },
    { SongName: "Jab Koi Bat Bigad Jaye", filePath: "Songs/2.mp3", coverPath: "covers/2.jpg" },
    { SongName: "Dil Galti Kar Baitha Hai", filePath: "Song/3.mp3", coverPath: "cover/3.jpg" },
    { SongName: "Galti Se Mistake", filePath: "Songs/4.mp3", coverPath: "covers/4.jpg" },
    { SongName: "Kal Ho Naa Ho", filePath: "Songs/5.mp3", coverPath: "covers/5.jpg" },
    { SongName: "Kuch Kuch Hota Hai", filePath: "Songs/6.mp3", coverPath: "covers/6.jpg" },
    { SongName: "Main Hoon Na", filePath: "Songs/7.mp3", coverPath: "covers/7.jpg" },
    { SongName: "Raabta-Arijit Singh", filePath: "Songs/8.mp3", coverPath: "covers/8.jpg" },
    { SongName: "Suraj Hua Madham", filePath: "Songs/9.mp3", coverPath: "covers/9.jpg" },
    { SongName: "Tumhi Dekho Na", filePath: "Songs/10.mp3", coverPath: "covers/10.jpg" },
    { SongName: "Kaho Naa Pyar Hai", filePath: "Songs/11.mp3", coverPath: "covers/11.jpg" },
    { SongName: "Khairiyat-Chhichhore ", filePath: "Songs/12.mp3", coverPath: "covers/12.jpg" }
]

songItems.forEach((element, i)=>{ 
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].SongName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})