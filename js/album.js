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
  
      //buttons hidden
      document.querySelector('.buttons').style.display = 'none';

      const target = document.getElementById('target-element');
      target.innerHTML = '';
      const clonedAlbumDiv = albumDiv.cloneNode(true);
      target.appendChild(clonedAlbumDiv);

      // Style the target container to be a flex row layout
      target.style.display = 'flex';
      target.style.flexDirection = 'row';
      target.style.justifyContent = 'space-between';
      target.style.alignItems = 'center';
      target.style.padding = '2rem';

      // Select album cover and style it to the left half
      const albumCover = clonedAlbumDiv.querySelector('.albumCover');
      if (albumCover) {
        albumCover.style.width = '100%';
        albumCover.style.maxWidth = '90%';
        albumCover.style.height = 'auto';
        albumCover.style.margin = '0 auto';
      }

      // Wrap albumCover and rest of album content in two divs for layout
      const leftDiv = document.createElement('div');
      const rightDiv = document.createElement('div');

      leftDiv.style.flex = '1';
      rightDiv.style.flex = '1';

      // Move albumCover into leftDiv
      if (albumCover) {
        leftDiv.appendChild(albumCover);
      }

      // Move the rest of the content into rightDiv (excluding albumCover)
      [...clonedAlbumDiv.children].forEach(child => {
        if (!child.contains(albumCover)) {
          rightDiv.appendChild(child);
        }
      });

      // Add animation to rightDiv
      rightDiv.style.animation = 'slideIn 1s ease-out forwards';
      rightDiv.style.opacity = '0'; // Start hidden

      // Clear and re-add the two halves
      target.innerHTML = '';
      target.appendChild(leftDiv);
      target.appendChild(rightDiv);

      // Add animation keyframes if not already present
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);

    } else {
      console.warn("Album not found in iframe:", randomAlbumId);
      document.getElementById('target-element').innerHTML = `<p>Album "${randomAlbumId}" not found.</p>`;
    }
  });

