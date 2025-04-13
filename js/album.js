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
  if (window.location.pathname === '/My_Music.html' || window.location.pathname === '/My_Friends_Music.html') {
    // Attach album click handlers
    ["one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"]
    .forEach(id => {
      document.querySelector(`#${id}`).addEventListener("click", () => handleAlbumClick(id));
    });
  } 
  // Attach vinyl click handlers
  document.querySelectorAll(".vinyl").forEach(vinyl => {
    vinyl.addEventListener("click", event => {
      event.stopPropagation(); // Prevent click from bubbling up to the album
      handleVinylClick(vinyl);
    });
  });


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
      document.getElementById('target-element').innerHTML = albumDiv.outerHTML;
      const albumCover = albumDiv.querySelector('.albumCover');
      albumCover.style.width = '50%'; 
      console.log("changed width");
      albumCover.style.height = 'auto'; 
      console.log("changed height");
      albumCover.style.justify_content = 'center'; 
      console.log("centered");

      //width 80% 
      //center

    } else {
      console.warn("Album not found in iframe:", randomAlbumId);
      document.getElementById('target-element').innerHTML = `<p>Album "${randomAlbumId}" not found.</p>`;
    }
  });

