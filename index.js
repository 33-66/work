 document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById("image-container");
    

    fetch(`https://picsum.photos/v2/list?limit=100`)
    .then(res => res.json())
    .then((data) => {
        data.forEach(image => {
            const imageElement = document.createElement("img");
            imageElement.src = image.download_url; 
            imageElement.alt = image.author;

            const likeButton = document.createElement('button')
            likeButton.textContent = "like"
            likeButton.addEventListener('click',() => {
                console.log(`liked this image ${image.author}`)
            })
            const imageWrapper = document.createElement('div')
            imageWrapper.appendChild(imageElement)
            imageWrapper.appendChild(likeButton)
            imageContainer.appendChild(imageWrapper)

        });
    })
    .catch((error) => {
        console.error('ERROR', error);
    });
 });





