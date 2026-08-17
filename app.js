const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

// All videos + all hover signs, matched by index //
const videoList = [video1, video2, video3, video4];
const hoverSigns = document.querySelectorAll('.hover-sign');

videoList.forEach(function(video, index){
    if (!video) return;
    video.addEventListener("mouseover", function(){
        video.play();
        if (hoverSigns && hoverSigns[index]) {
            hoverSigns[index].classList.add("active");
        }
    });
    video.addEventListener("mouseout", function(){
        if (hoverSigns && hoverSigns[index]) {
            hoverSigns[index].classList.remove("active");
        }
    });
});

// Sidebar toggle //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

// Show more projects toggle //
const showMoreBtn = document.getElementById('showMoreBtn');
const extraProjects = document.getElementById('extraProjects');

showMoreBtn.addEventListener("click", function(){
    extraProjects.classList.toggle('show');
    showMoreBtn.classList.toggle('rotated');

    if (extraProjects.classList.contains('show')) {
        showMoreBtn.innerHTML = "<i class='bx bx-chevron-up'></i> Show Less";
        if (typeof AOS !== 'undefined') AOS.refresh();
    } else {
        showMoreBtn.innerHTML = "<i class='bx bx-chevron-down'></i> Show More Projects";
    }
});

// Show more certificates toggle //
const showMoreCertBtn = document.getElementById('showMoreCertBtn');
const extraCerts = document.getElementById('extraCerts');

showMoreCertBtn.addEventListener("click", function(){
    extraCerts.classList.toggle('show');
    showMoreCertBtn.classList.toggle('rotated');

    if (extraCerts.classList.contains('show')) {
        showMoreCertBtn.innerHTML = "<i class='bx bx-chevron-up'></i> Show Less";
        if (typeof AOS !== 'undefined') AOS.refresh();
    } else {
        showMoreCertBtn.innerHTML = "<i class='bx bx-chevron-down'></i> Show More Certificates";
    }
});