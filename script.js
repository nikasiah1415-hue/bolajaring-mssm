console.log("Website MSSM Netball berjaya dibuka");

let currentIndex = 0;
let galleryImages = [];

function loadGallery(folder, files){

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    galleryImages = [];

    let photoCount = 0;
    let videoCount = 0;

    files.forEach((file,index)=>{

        const ext = file.split(".").pop().toLowerCase();

        if(ext=="jpg" || ext=="jpeg" || ext=="png" || ext=="webp"){

            photoCount++;

            const img=document.createElement("img");

            img.src=folder+file;

            img.alt=file;

            img.onclick=function(){

                currentIndex=galleryImages.length;

                openLightbox();

            }

            gallery.appendChild(img);

            galleryImages.push(folder+file);

        }

        else if(ext=="mp4"){

            videoCount++;

            const video=document.createElement("video");

            video.src=folder+file;

            video.controls=true;

            video.className="gallery-video";

            gallery.appendChild(video);

        }

    });

    document.getElementById("photo-count").textContent = photoCount;
    document.getElementById("video-count").textContent = videoCount;

}

function openLightbox(){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=galleryImages[currentIndex];

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function nextImage(){

currentIndex++;

if(currentIndex>=galleryImages.length){

currentIndex=0;

}

document.getElementById("lightbox-img").src=galleryImages[currentIndex];

}

function prevImage(){

currentIndex--;

if(currentIndex<0){

currentIndex=galleryImages.length-1;

}

document.getElementById("lightbox-img").src=galleryImages[currentIndex];

}

document.addEventListener("keydown",function(e){

if(e.key==="Escape") closeLightbox();

if(e.key==="ArrowRight") nextImage();

if(e.key==="ArrowLeft") prevImage();

});