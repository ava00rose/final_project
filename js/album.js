
if (document.querySelector(".vinyl")) {

  function handleAlbumClick(id) {
    const album = document.querySelector(`#${id}`);
    const vinyl = album.querySelector(".vinyl");
    const albumCover = album.querySelector(".albumCover");
    const albumTitle = album.querySelector(".album_title");
    const name = album.querySelector(".name_pick");
    const spotify = album.querySelector(".spotify");
  
    vinyl.style.visibility = "visible";
    albumCover.style.visibility = "hidden";
    albumTitle.style.visibility = "hidden";
    name.style.visibility = "hidden";
    spotify.style.display = "block";
  
    console.log(`${id} album clicked`);
  }
  
  function handleVinylClick(vinyl) {
    const album = vinyl.closest(".Album");
    const albumCover = album.querySelector(".albumCover");
    const albumTitle = album.querySelector(".album_title");
    const spotify = album.querySelector(".spotify");
    const name = album.querySelector(".name_pick");

    if (vinyl.classList.contains("spin")) {
      console.log("Reverting album...");
  
      vinyl.classList.remove("spin");
      vinyl.style.visibility = "hidden";
      albumCover.style.visibility = "visible";
      albumTitle.style.visibility = "visible";
      name.style.visibility = "visible";
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

}

const albumIdWords = [
  "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen",
];

  document.getElementById("random").addEventListener("click", function () {
    console.log("Random Clicked...");

    const randomIndex = Math.floor(Math.random() * albumIdWords.length);
    const randomAlbumId = albumIdWords[randomIndex];

    console.log("Selected Album ID:", randomAlbumId);
    const iframe = document.getElementById('myIframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    //otherPage = iframe.contentDocument || iframe.contentWindow.document;

    const albumDiv = iframeDoc.querySelector(`.Album#${randomAlbumId}`);

    if (albumDiv) {
      // Hide the buttons
      document.querySelector('.buttons').style.display = 'none';

      // Clone the album div so we don't affect the original
      const clonedAlbumDiv = albumDiv.cloneNode(true);
      const target = document.getElementById('target-element');
      target.innerHTML = ''; // Clear previous
  
      // Ensure styles are nice
      clonedAlbumDiv.style.display = 'flex';
      clonedAlbumDiv.style.flexDirection = 'column'; 
      clonedAlbumDiv.style.alignItems = 'center';
      clonedAlbumDiv.style.visibility = 'visible';
      clonedAlbumDiv.Album.style.backgroundColor = 'none';

      const albumCover = clonedAlbumDiv.querySelector('.albumCover');
      if (albumCover) {
        albumCover.style.width = '100%';
        albumCover.style.height = 'auto';
        albumCover.style.display = 'block';
        clonedAlbumDiv.Album.style.backgroundColor = 'none';
        clonedAlbumDiv.album_title.style.display = 'none';
      }

      const spotify = clonedAlbumDiv.querySelector('.spotify');
      if (spotify) {
        spotify.style.display = 'block';
        spotify.style.visibility = 'visible';
        spotify.style.bottom = '0';
        spotify.style.right = '0';
        spotify.style.position = 'relative';
        spotify.style.width = '50%';
      }
      const iframe = spotify.querySelector('iframe');
      if (iframe) {
        iframe.style.height = '50%'; 
      }
  
      clonedAlbumDiv.style.backgroundColor = 'none'; 
      target.appendChild(clonedAlbumDiv);

      // Optionally resize the record too
      document.querySelector('.PRP').style.width = '100%';
      document.querySelector('.PRP').style.maxWidth = '700px';
    }
  });

