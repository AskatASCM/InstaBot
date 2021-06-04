// Section About Tab
const tabsBtn = document.querySelectorAll('.tabs-nav-btn');
tabsContent = document.querySelectorAll('.tabs-item')

tabsBtn.forEach(function (item) {
    item.addEventListener('click', (e) => {
        let tabId = e.target.getAttribute('data-tab');
        for (let i of tabsBtn) {
            i.classList.remove('active');
        };
        for (let i of tabsContent) {
            i.classList.remove('active');
        };

        e.target.classList.add('active');
        document.querySelector(tabId).classList.add('active');
    });
});

// Section About Tab

// Section FAQ Accordion
const accordions = document.querySelectorAll('.faq-accordion-item');

accordions.forEach(function (item) {
    item.addEventListener('click', (e) => {
        // for (let el of accordions) {
        //     if (el.classList.contains('active')) {
        //         el.classList.remove('active');
        //     }
        // }
        const self = e.currentTarget;
        const content = self.querySelector('.accordion-content');
        self.classList.toggle('active');
        if (self.classList.contains('active')) {
            // self.classList.remove('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        };

    })
})

// Section FAQ Accordion

// Section Reviews
const reviewItems = document.querySelectorAll('.reviews-item');

if (document.querySelector('.structure-btn').style.display != ('none')) {

    document.querySelector('.structure-btn').addEventListener('click', () => {
        for (let i of reviewItems) {
            i.classList.add('structured');
        };
        document.querySelector('.structured-status').style.display = ('block');
        document.querySelector('.structure-btn').style.display = ('none');
    });
};
// Section Reviews

//Mobile Menu
const closeBtn = document.querySelector('.menu-close-btn'),
    openBtn = document.querySelector('.menu-open-btn');

openBtn.addEventListener('click', () => {
    if (document.querySelector('.header-right-side').classList.contains('closen')) {
        document.querySelector('.header-right-side').classList.remove('closen');
        document.body.style.overflow = ('hidden');
        document.querySelector('.header-right-side').style.overflow = ('hidden');

    };
    //document.querySelector('.header-right-side').classList.remove('closen');
});
closeBtn.addEventListener('click', () => {
    if (!document.querySelector('.header-right-side').classList.contains('closen')) {
        document.querySelector('.header-right-side').classList.add('closen');
        document.body.style.overflow = ('visible');
        document.querySelector('.header-right-side').style.overflow = ('visible')
    };
    //document.querySelector('.header-right-side').classList.add('closen');
});
document.querySelector('.header-right-side').addEventListener(
    'click', () => {
        document.querySelector('.header-right-side').classList.add('closen');
        document.body.style.overflow = ('visible');
    }
)


//Mobile Menu

//Scroll Top
const scrollTopBtn = document.querySelector('.scroll-top-btn');

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
})
//Scroll Top

// Lazy Loading
const lazyImgs = document.querySelectorAll('img[data-src]');
const windowHeight = document.documentElement.clientHeight;

let lazyImgsPos = [];
if (lazyImgs.length > 0) {
    lazyImgs.forEach(img => {
        if (img.dataset.src) {
            lazyImgsPos.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck()
        }
    });
}

// window.addEventListener('scroll', lazyScroll);

// function lazyScroll() {
//     if (lazyImgs.length > 0) {
//         lazyScrollCheck();
//     }
// };

function lazyScrollCheck() {
    let itemIndex = lazyImgsPos.findIndex(
        item => pageYOffset > item - windowHeight
    );
    if (itemIndex >= 0) {
        if (lazyImgs[itemIndex].dataset.src) {
            lazyImgs[itemIndex].src = lazyImgs[itemIndex].dataset.src;
            lazyImgs[itemIndex].removeAttribute('data-src');
        }
        delete lazyImgsPos[itemIndex];
    }
}
// Lazy Loading

// Navigation Check
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.header-nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        for (let i of navLinks) {
            i.classList.remove('active');
        };
        e.target.classList.add('active')
    })
});

let sectionsPosTop = [];
if (sections.length > 0) {
    sections.forEach(sec => {
        sectionsPosTop.push(sec.getBoundingClientRect().top + pageYOffset);
        SectionScrollCheck();
    });
};

// window.addEventListener('scroll', sectionScroll);

// function sectionScroll() {
//     SectionScrollCheck()
// }

function SectionScrollCheck() {
    let itemIndex;
    if (!sectionsPosTop.length == 0) {
        itemIndex = sectionsPosTop.findIndex(
            item => pageYOffset > item - windowHeight
        );
        if (itemIndex >= 0) {
            for (let i of navLinks) {
                i.classList.remove('active');
            };
            navLinks[itemIndex].classList.add('active');
        };
        delete sectionsPosTop[itemIndex]
    };
};
// Navigation Check

// Sticky Header
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 150) {
        header.classList.add('sticky');
        document.querySelector('.sticky-header-helper').style.padding = ('40px');
    } else {
        header.classList.remove('sticky');
        document.querySelector('.sticky-header-helper').style.padding = ('0px');
    };

    // SectionScroll
    SectionScrollCheck()
    // SectionScroll
    //LazyScroll
    if (lazyImgs.length > 0) {
        lazyScrollCheck();
    }
    //LazyScroll

});
// Sticky Header