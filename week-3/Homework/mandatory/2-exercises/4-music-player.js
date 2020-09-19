
        let songCont=document.getElementsByClassName("song");
        let cont=document.getElementsByClassName("container");
        let p=document.createElement("p");

class MusicPlayer {
    // Add your code here
    playList = new Array();
    add(song,author){
        
        this.playList.push({song:song,author:author});
    }
    play(no){
        this.index=no;
        p.innerHTML=`Currently playing: ${this.playList[this.index].song} by ${this.playList[this.index].author}`;
        songCont[0].appendChild(p);
        cont[0].appendChild(songCont[0])
    }
    skip(){
         this.index=this.index+1;
        
         p.innerHTML="";
        
         if(this.index>2){
              this.index=0;
          }
       
        p.innerHTML=`Currently playing:${this.playList[this.index].song} by ${this.playList[this.index].author}`;
    }
     previous(){
        this.index=this.index-1;
         if(this.index===-1){
            this.index=2;
         }
         p.innerHTML="";
        //console.log(`Currently playing: ${this.playList[this.index].song} by ${this.playList[this.index].author}`);
        p.innerHTML=`Currently playing:${this.playList[this.index].song} by ${this.playList[this.index].author}`;

     }
}

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

// Add some songs to your playlist
myMusicPlayer.add("Bohemian Rhapsody","Queen");
myMusicPlayer.add("Yesterday","The Beatles");
myMusicPlayer.add("Vogue","Madonna");
  
document.getElementById("play").addEventListener("click",function(){
    no=Math.floor(Math.random() * 3);
    myMusicPlayer.play(no);
})
document.getElementById("skip").addEventListener("click",function(){
    myMusicPlayer.skip();
});
document.getElementById("pre").addEventListener("click",function(){
    myMusicPlayer.previous();
})
/*


Task 1: Complete the above code to create a music player that will run through a playlist of songs and output to the console as described in the comments.

Task 2: Add some extra logic to handle these 2 scenarios:
- Trying to call myMusicPlayer.play() if there are no songs in the playlist
- Trying to call myMusicPlayer.skip() when there are no songs left to play



Optional 1: Your music player stops once you have reached the end of the playlist.
Can you implement the 'repeat' functionality so that it starts again from the beginning instead of stopping?


Optional 2: Can you implement the shuffle functionality for your music player?
This means the order the songs are played in will be random, 
but each song will only play once.

 */








