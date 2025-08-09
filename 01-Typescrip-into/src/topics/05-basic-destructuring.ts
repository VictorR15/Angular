interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}
interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const {
  song: anotherSong,
  songDuration: duration,
  details: { author },
} = audioPlayer;

console.log(anotherSong, duration, author);

const [, , trunks = "not found"]: string[] = ["Goku", "Vegueta"];

console.error("Personaje3: ", trunks);
