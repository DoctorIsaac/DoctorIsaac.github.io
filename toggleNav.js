function toggleNav() {
    var nav = document.getElementById("nav-links");
    nav.classList.toggle("show");
}

var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }
    
    window.addEventListener('scroll', function() {
        const aboutMeSection = document.querySelector('.about-me');
        const sectionPosition = aboutMeSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        // If the section enters the viewport, add the 'active' class
        if (sectionPosition < screenPosition) {
            aboutMeSection.classList.add('active');
        }
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('.header1');
        const aboutMe = document.querySelector('.about-me');

        // Adjust the scroll position threshold as necessary
        if (scrollPosition > 50) { // Change this value for when you want the about section to show
            header.classList.add('blurred'); // Apply blur effect
            aboutMe.classList.add('show'); // Show about section
        } else {
            header.classList.remove('blurred'); // Remove blur effect
            aboutMe.classList.remove('show'); // Hide about section
        }
    });