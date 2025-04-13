function handleAlbumClick(id) {
    const album = document.querySelector(`#${id}`);
    const vinyl = album.querySelector(".vinyl");
    const albumCover = album.querySelector(".albumCover");
    const albumTitle = album.querySelector(".album_title");
    const spotify = album.querySelector(".spotify");
  
    vinyl.style.visibility = "visible";
    albumCover.style.visibility = "hidden";
    albumTitle.style.visibility = "hidden";
    spotify.style.display = "block";
  
    console.log(`${id} album clicked`);
  }
  
  function handleVinylClick(vinyl) {
    const album = vinyl.closest(".Album");
    const albumCover = album.querySelector(".albumCover");
    const albumTitle = album.querySelector(".album_title");
    const spotify = album.querySelector(".spotify");
  
    if (vinyl.classList.contains("spin")) {
      console.log("Reverting album...");
  
      vinyl.classList.remove("spin");
      vinyl.style.visibility = "hidden";
      albumCover.style.visibility = "visible";
      albumTitle.style.visibility = "visible";
      spotify.style.display = "none";
    } else {
      console.log("Playing album...");
  
      vinyl.classList.add("spin");
      spotify.style.display = "block";
    }
  }
  
  // Attach album click handlers
  ["one", "two", "three", "four", "five", "six", "seven", "eight",
   "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"]
  .forEach(id => {
    document.querySelector(`#${id}`).addEventListener("click", () => handleAlbumClick(id));
  });
  
  // Attach vinyl click handlers
  document.querySelectorAll(".vinyl").forEach(vinyl => {
    vinyl.addEventListener("click", event => {
      event.stopPropagation(); // Prevent click from bubbling up to the album
      handleVinylClick(vinyl);
    });
  });

// Select random album 
document.querySelector("#random").addEventListener("click", function () {
  const allAlbums = document.querySelectorAll(".Album");

  // Hide all albums
  allAlbums.forEach(album => {
    album.style.display = "none";
  });

  // Pick a random one
  const randomIndex = Math.floor(Math.random() * allAlbums.length);
  const randomAlbum = allAlbums[randomIndex];

  // Show the selected one
  randomAlbum.style.display = "block";
});