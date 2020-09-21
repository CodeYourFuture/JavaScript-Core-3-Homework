class MusicPlayer {
	constructor() {
		this.index = 0;
		this.song = [];
	}
	add(title, singer) {
		this.song.push({ title, singer });
	}
	play() {
		if (this.song === null) {
			console.log("There are no songs in the playlist");
		} else {
			console.log(
				`Currently playing:${this.song[this.index].title} by ${
					this.song[this.index].singer
				} .`
			);
		}
	}

	skip() {
		this.index++;
		if (this.index === this.song.length) {
			this.index--;
			console.log("There are no songs left to play.");
		} else {
			console.log(
				`Currently playing:${this.song[this.index].title} by ${
					this.song[this.index].singer
				} .`
			);
		}
	}
	previous() {
		if (this.index === 0) {
			// this.index++;
			console.log("There are no songs in the playlist.");
		} else {
			this.index--;
			console.log(
				`Currently playing:${this.song[this.index].title} by ${
					this.song[this.index].singer
				}. `
			);
		}
	}
}

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

// Add some songs to your playlist

myMusicPlayer.add("Bohemian Rhapsody", "Queen");
myMusicPlayer.add("Yesterday", "The Beatles");
myMusicPlayer.add("Vogue", "Madonna");

console.log(myMusicPlayer.song);

myMusicPlayer.play(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.previous(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.skip(); // Output: "Currently playing: Vogue by Madonna"

/*


Task 1: Complete the above code to create a music player that will run through a playlist of songs and output to the console as described in the comments.

Task 2: Add some extra logic to handle these 2 scenarios:
- Trying to call myMusicPlayer.play() if there are no songs in the playlist
- Trying to call myMusicPlayer.skip() when there are no songs left to play



Optional 1: Your music player stops once you have reached the end of the playlist.
Can you implement the 'repeat' functionality so that it starts again from the beginning instead of stopping?


Optional 2: Can you implement the shuffle functionality for your music player?
This means the order the songs are played in will be random, but each song will only play once.

 */
