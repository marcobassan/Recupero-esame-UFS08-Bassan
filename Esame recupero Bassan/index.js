    async function getArtworkInfo(idArtwork) {
        try {
          const response = await fetch(`https://api.artic.edu/api/v1/artworks/${idArtwork}`);
          const data = await response.json();
          return data.data;
        } catch (error) {
          console.log('Si è verificato un errore:', error);
        }
      }
  
      function displayArtworkInfo(artwork, containerId) {
        const container = document.getElementById(containerId);
  
        const artworkContainer = document.createElement('div');
        artworkContainer.classList.add('artwork-container');
  
        const artworkImage = document.createElement('img');
        artworkImage.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/300,/0/default.jpg`;
  
        const artworkTitle = document.createElement('h2');
        artworkTitle.textContent = artwork.title;
  
        const artistName = document.createElement('p');
        artistName.textContent = artwork.artist_title;
  
        artworkContainer.appendChild(artworkImage);
        artworkContainer.appendChild(artworkTitle);
        artworkContainer.appendChild(artistName);
        container.appendChild(artworkContainer);
      }
  
      const artworkIds = [51719, 13914, 16858, 78503];
      const lastArtworkId = artworkIds.pop(); 
  
      artworkIds.forEach(async (id) => {
        const artwork = await getArtworkInfo(id);
        displayArtworkInfo(artwork, 'artworks-container');
      });
  
      async function displayLastArtwork() {
        const artwork = await getArtworkInfo(lastArtworkId);
        displayArtworkInfo(artwork, 'last-artwork-container');
      }
  
      displayLastArtwork();