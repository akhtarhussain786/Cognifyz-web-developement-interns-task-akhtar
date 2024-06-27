document.addEventListener('DOMContentLoaded', function() {
    const blockct = document.querySelector(".sm-block");
    const hamburger = document.querySelector("#dash");

    function clickfn() {
        const computedStyle = window.getComputedStyle(blockct);
        const isHidden = computedStyle.display === 'none';

        if (isHidden) {
            if (window.innerWidth <= 600) {
                blockct.style.display = 'block';
                hamburger.classList.remove("fa-bars");
                hamburger.classList.add("fa-times");  // Font Awesome close icon is fa-times
            }
        } else {
            blockct.style.display = 'none';
            hamburger.classList.remove("fa-times");
            hamburger.classList.add("fa-bars");
        }
    }

    hamburger.addEventListener('click', clickfn);

    // Ensure menu is hidden on load if window is small
    if (window.innerWidth <= 600) {
        blockct.style.display = 'none';
    } else {
        blockct.style.display = '';
    }

    // Update display style on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            blockct.style.display = '';
            hamburger.classList.remove("fa-times");
            hamburger.classList.add("fa-bars");
        } else {
            blockct.style.display = 'none';
        }
    });
});
