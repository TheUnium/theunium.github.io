const blogPosts = [{
    title: "No one writes good code anymore. Why? AI.",
    date: "25/02/26",
    excerpt: "Your brain is a muscle. If you don't train it, it will get weaker. The more AI you use, the dumber you get.",
    tags: ["Writing"],
    link: "https://unium.in/blog/2/02-25-2026/index.html"
}, {
    title: "You won't find a fifth glyph in this post.",
    date: "27/06/25",
    excerpt: "a lipogram chall*ng* 😔",
    tags: ["English", "Writing"],
    link: "https://unium.in/blog/07-27-2025.html"
}, {
    title: "i made an app launcher in <6 hours",
    date: "05/06/25",
    excerpt: "saw raycast, got inspired, made thing, abandoned thing 😔",
    tags: ["C++"],
    link: "https://unium.in/blog/05-7-2025.html"
}, {
    title: "bloggy is out fr (also now yells at your bad markdown)",
    date: "13/04/25",
    excerpt: "this is the update post for bloggy because omg it’s out now",
    tags: ["JavaScript", "Announcement"],
    link: "https://unium.in/blog/04-13-2025.html"
}, {
    title: "Hello bloggy!",
    date: "10/04/25",
    excerpt: "Omggg Hiiiiiiii",
    tags: ["Introduction"],
    link: "https://unium.in/blog/04-10-2025.html"
}];

const projects = [{
    name: "llmpp",
    description: "llm inference engine from scratch in c++ with no ai/ml dependencies",
    link: "https://github.com/TheUnium/llmpp",
    color: "#7d81fc",
    image: "assets/img/projects/llmpp.png",
    tags: ["C++"]
}, {
    name: "ndatmx",
    description: "daemon based project manager, monitors git repos for changes, pulls commits, and runs projects based on its config file",
    link: "https://github.com/TheUnium/ndatmx",
    color: "#F34B7D",
    image: "assets/img/projects/ndatmx.png",
    tags: ["C++"]
}, {
    name: "mathplot",
    description: "math plotting tui with support for multiple functions, finding derivatives and integral, etc using ncurses",
    link: "https://github.com/TheUnium/mathplot",
    color: "#ef4444",
    image: "assets/img/projects/mathplot.png",
    tags: ["C"]
}, {
    name: "3d-nolib",
    description: "a simple 3d tech demo with quake like movement without libc or any other libraries (x11 only)",
    link: "https://github.com/TheUnium/3d-nolib",
    color: "#fecaca",
    image: "assets/img/projects/3d-nolib.png",
    tags: ["C"]
}, {
    name: "hello-world",
    description: "dumb proof of context demonstrating a drm-protected... \"Hello, World!\", and impls several anti-analysis techniques, written without libc",
    link: "https://github.com/TheUnium/hello-world",
    color: "#2dd4bf",
    image: "assets/img/projects/hello-world.png",
    tags: ["C"]
}, {
    name: "celenium forge",
    description: "3d vulkan engine made in cpp with jolt physics (coming soon-ish)",
    link: "#",
    color: "#bbf7d0",
    image: "assets/img/projects/celenium.png",
    tags: ["C++"]
}, {
    name: "glyphin",
    description: "advanced multipurpose discord bot made with discord.js",
    link: "https://glyphin.hamium.xyz/",
    color: "#fde047",
    image: "assets/img/projects/glyphin.png",
    tags: ["JS"]
}, {
    name: "rnux",
    description: "app launcher that actually looks good by default",
    link: "https://github.com/TheUnium/rnux",
    color: "#ef4444",
    image: "assets/img/projects/rnux.png",
    tags: ["C++"]
}, {
    name: "hammerMC",
    description: "ultra customizable simple multipurpose minecraft server plugin",
    link: "https://modrinth.com/plugin/hammermc",
    color: "#bfdbfe",
    image: "assets/img/projects/hammer.png",
    tags: ["Java"]
}, {
    name: "bloggy",
    description: "bloggy is a little markdown -> html converter made for blogs",
    link: "https://www.npmjs.com/package/bloggy-md",
    color: "#86efac",
    image: "assets/img/projects/bloggy.png",
    tags: ["JS"]
}, {
    name: "the seafarer",
    description: "news website for stoneworks mc server (discontinued)",
    link: "#",
    color: "#7dd3fc",
    image: "assets/img/projects/seafarer.png",
    tags: ["JS"]
}];

const viewHome = document.getElementById('view-home');
const viewBlog = document.getElementById('view-blog');
const viewProjects = document.getElementById('view-projects');
const viewAbout = document.getElementById('view-about');
const viewGallery = document.getElementById('view-gallery');
const viewExtras = document.getElementById('view-extras');

const navBlog = document.getElementById('nav-blog');
const navProjects = document.getElementById('nav-projects');
const navAbout = document.getElementById('nav-about');
const navGallery = document.getElementById('nav-gallery');
const navContact = document.getElementById('nav-contact');

const btnBackBlog = document.getElementById('btn-back-blog');
const btnBackProjects = document.getElementById('btn-back-projects');
const btnBackAbout = document.getElementById('btn-back-about');
const btnBackGallery = document.getElementById('btn-back-gallery');
const btnBackExtras = document.getElementById('btn-back-extras');

const blogList = document.getElementById('blog-list');
const projectGrid = document.getElementById('project-grid');
const galleryGrid = document.getElementById('gallery-grid');
const extrasList = document.getElementById('extras-list');
const mainFooter = document.getElementById('main-footer');
const discordBtn = document.getElementById('discord-btn');
const tooltip = document.getElementById('ds-tooltip');
const flashOverlay = document.getElementById('flash-overlay');

const mascotTrigger = document.getElementById('unium-trigger');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxTags = document.getElementById('lightbox-tags');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxOverlay = document.querySelector('.lightbox-overlay');

const extrasItems = [{
    title: "Gallery",
    description: "check out my artwork!!",
    action: () => switchView(viewGallery),
    tags: ["Page"]
}, {
    title: "Shared",
    description: "my git instance for random projects, usually not on github (coming soon-ish.... probably)",
    action: () => switchView(viewHome),
    tags: ["Website"]
}];

function switchView(target) {
    target.scrollTop = 0;

    const allViews = document.querySelectorAll('.view-section');
    allViews.forEach(view => {
        view.classList.remove('active');
    });

    setTimeout(() => {
        target.classList.add('active');

        if (target !== viewHome) {
            mainFooter.classList.add('corner-mode');
            if (target === viewBlog) animateItems('.blog-card');
            if (target === viewProjects) animateItems('.project-card');
            if (target === viewAbout) animateItems('.bento-item');
            if (target === viewGallery) animateItems('.gallery-item');
            if (target === viewExtras) animateItems('.blog-card');
        } else {
            mainFooter.classList.remove('corner-mode');
        }
    }, 50);
}

function animateItems(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
        item.classList.remove('animate-in');
        void item.offsetWidth;

        item.style.animationDelay = `${index * 60}ms`;
        item.classList.add('animate-in');
    });
}

function renderBlog() {
    blogList.innerHTML = '';
    blogPosts.forEach((post) => {
        const a = document.createElement('a');
        a.href = post.link;
        a.className = 'blog-card';
        a.target = "_blank";
        const tagsHtml = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        a.innerHTML = `
        <div class="card-top"><h3 class="card-title">${post.title}</h3><span class="card-date">${post.date}</span></div>
        <p class="card-excerpt">${post.excerpt}</p>
        <div class="card-tags">${tagsHtml}</div>
        `;
        blogList.appendChild(a);
    });
}

function renderExtras() {
    extrasList.innerHTML = '';
    extrasItems.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'blog-card';
        div.style.cursor = 'pointer';

        const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        div.innerHTML = `
        <div class="card-top"><h3 class="card-title">${item.title}</h3></div>
        <p class="card-excerpt">${item.description}</p>
        <div class="card-tags">${tagsHtml}</div>
        `;
        div.addEventListener('click', item.action);
        extrasList.appendChild(div);
    });
}

function renderProjects() {
    projectGrid.innerHTML = '';
    projects.forEach((proj) => {
        const a = document.createElement('a');
        a.href = proj.link;
        a.className = 'project-card';
        a.target = "_blank";
        const color = proj.color || '#FF9696';
        a.style.setProperty('--p-color', color);
        const tagsHtml = proj.tags.map(tag => `<span class="p-tag">${tag}</span>`).join('');
        a.innerHTML = `
        <div class="p-image-container">
            <img class="p-img" src="${proj.image}" alt="${proj.name} preview">
        </div>
        <div class="p-header">
            <h3 class="p-title">${proj.name}</h3>
            <div class="p-arrow">➜</div>
        </div>
        <p class="p-desc">${proj.description}</p>
        <div class="p-tags">${tagsHtml}</div>
        `;
        projectGrid.appendChild(a);
    });
}

function renderGallery() {
    galleryGrid.innerHTML = '';
    artworks.forEach((art, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
        <div class="gallery-item-inner">
        <img src="${art.image}" alt="${art.title}">
        <div class="gallery-peek">👁</div>
        <div class="gallery-overlay">
        <h3>${art.title}</h3>
        <p>${art.description.substring(0, 60)}...</p>
        </div>
        </div>
        `;
        div.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(div);
    });
}

function openLightbox(index) {
    const art = artworks[index];
    lightboxImg.src = art.image;
    lightboxImg.alt = art.title;
    lightboxTitle.textContent = art.title;
    lightboxDesc.textContent = art.description;

    lightboxTags.innerHTML = art.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

renderBlog();
renderProjects();
renderGallery();
renderExtras();

navBlog.addEventListener('click', (e) => {
    e.preventDefault();
    switchView(viewBlog);
});
navProjects.addEventListener('click', (e) => {
    e.preventDefault();
    switchView(viewProjects);
});
navAbout.addEventListener('click', (e) => {
    e.preventDefault();
    switchView(viewAbout);
});
navGallery.addEventListener('click', (e) => {
    e.preventDefault();
    switchView(viewExtras);
});

navContact.addEventListener('click', (e) => {
    e.preventDefault();

    mainFooter.classList.remove('attention-grab');
    void mainFooter.offsetWidth;

    mainFooter.classList.add('attention-grab');

    setTimeout(() => {
        mainFooter.classList.remove('attention-grab');
    }, 800);
});

mascotTrigger.addEventListener('click', () => {
    switchView(viewGallery);
});

btnBackBlog.addEventListener('click', () => switchView(viewHome));
btnBackProjects.addEventListener('click', () => switchView(viewHome));
btnBackAbout.addEventListener('click', () => switchView(viewHome));
btnBackGallery.addEventListener('click', () => switchView(viewHome));
btnBackExtras.addEventListener('click', () => switchView(viewHome));

lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

let timeoutId;
discordBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('leunium').then(() => {
        tooltip.innerText = "copied!";
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            tooltip.innerText = "@leunium";
        }, 2000);
        flashOverlay.classList.remove('flash-active');
        void flashOverlay.offsetWidth;
        flashOverlay.classList.add('flash-active');
    }).catch(err => console.error(err));
});
