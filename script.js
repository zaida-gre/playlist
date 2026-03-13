let playlist = ['Liar', 'All They Wanted','I Dont Wanna Love','Cure for Pain'];
alert("Your current playlist contains: "+playlist);
let addsong = prompt("Would you like to add a song?");
playlist.push(addsong);
alert("Your current playlist contains: "+playlist);
let removed=playlist.pop()
alert(removed +' was removed from the playlist.');
let search = prompt("Search by Name")
if(playlist.includes(search)){
    alert("Song Found")
    let i = playlist.indexOf(search)
    deleted = prompt("Would you like to delete this song?")
    let z =(deleted=="yes")? playlist.splice(i,1): console.log('Nothing Deleted');
} else {
    alert("Song not found :(");
}
alert("Your current playlist contains: "+playlist);