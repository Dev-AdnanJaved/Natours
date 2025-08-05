function loadComponent (filePath, divID) {
    fetch(filePath)
    .then ( res => res.text ())
    .then ( html => {
        document.getElementById(divID).innerHTML = html;
    })
};

loadComponent('files/hero-nav.html', 'header-section');
loadComponent('files/section-one.html', 'section-one');
loadComponent('files/simp-cards.html', 'simp-cards');
loadComponent('files/pop-tours.html', 'popular-tours');
loadComponent('files/reviews-sec.html', 'reviews-sec');
loadComponent('files/form-section.html', 'form-section');
loadComponent('files/footer-section.html', 'footer-section');


