        const skills = [{
            name: "C",
            level: "experienced",
            color: "text-blue-200",
            bgColor: "bg-blue-900"
        }, {
            name: "C++",
            level: "experienced",
            color: "text-purple-200",
            bgColor: "bg-purple-900"
        }, {
            name: "PHP",
            level: "experienced",
            color: "text-purple-200",
            bgColor: "bg-purple-900"
        }, {
            name: "Java",
            level: "experienced",
            color: "text-red-200",
            bgColor: "bg-red-900"
        }, {
            name: "HTML/CSS",
            level: "experienced",
            color: "text-orange-200",
            bgColor: "bg-orange-900"
        }, {
            name: "JavaScript",
            level: "experienced",
            color: "text-yellow-200",
            bgColor: "bg-yellow-900"
        }, {
            name: "Kotlin",
            level: "intermediate",
            color: "text-purple-200",
            bgColor: "bg-purple-900"
        }, {
            name: "Python",
            level: "intermediate",
            color: "text-yellow-200",
            bgColor: "bg-yellow-900"
        }, {
            name: "Lua",
            level: "intermediate",
            color: "text-purple-200",
            bgColor: "bg-purple-900"
        }, {
            name: "ASM",
            level: "intermediate",
            color: "text-green-200",
            bgColor: "bg-green-900"
        }, {
            name: "Golang",
            level: "intermediate",
            color: "text-cyan-200",
            bgColor: "bg-cyan-900"
        }, {
            name: "Rust",
            level: "beginner",
            color: "text-orange-200",
            bgColor: "bg-orange-900"
        }, {
            name: "Fortran",
            level: "beginner",
            color: "text-yellow-200",
            bgColor: "bg-yellow-900"
        }];

        const projects = [{
            name: "celenium",
            description: "2D game 'engine' made in C++",
            link: "https://theunium.github.io/celenium",
            color: "text-green-200",
            tags: ["C++", "Game Development"]
        }, {
            name: "htxp",
            description: "Simple multi-threaded web server made in C++",
            link: "#",
            color: "text-blue-200",
            tags: ["C++", "Networking"]
        }, {
            name: "glyphin",
            description: "Advanced multipurpose Discord bot made with discord.js",
            link: "https://glyphin.hamium.xyz/",
            color: "text-yellow-200",
            tags: ["JavaScript", "Discord API"]
        }, {
            name: "hammerMC",
            description: "Ultra-customizable simple multipurpose Minecraft server plugin made in Java",
            link: "https://modrinth.com/plugin/hammermc",
            color: "text-blue-200",
            tags: ["Java", "Minecraft"]
        }, {
            name: "rnux",
            description: "app launcher that actually looks good by default",
            link: "https://github.com/TheUnium/rnux",
            color: "text-red-500",
            tags: ["C++", "X11"]
        },{
            name: "ls2",
            description: "ls but colorful",
            link: "https://github.com/TheUnium/ls2",
            color: "text-red-200",
            tags: ["C++", "CLI"]
        }, {
            name: "tenacity-cpp",
            description: "Personal project management thing(?) made in C++",
            link: "#",
            color: "text-purple-200",
            tags: ["C++", "Project Management"]
        }, {
            name: "the stalker",
            description: "\"\"\"horror\"\"\" mod for fabric mc 1.20.1",
            link: "https://github.com/TheUnium/the-stalker",
            color: "text-teal-400",
            tags: ["Java", "Minecraft", "Modding"]
        }, {
            name: "bloggy",
            description: "bloggy is a little markdown -> html converter made for blogs",
            link: "https://www.npmjs.com/package/bloggy-md",
            color: "text-green-300",
            tags: ["JavaScript", "Web"]
        }, {
            name: "bee (soon)",
            description: "The worst of \"X\" and reddit merged into one horrible forum, made in JS",
            link: "#",
            color: "text-neutral-400",
            tags: ["JavaScript", "Web", "WIP"]
        }, {
            name: "tenacity-app (soon)",
            description: "GUI application for project management, made in Rust with Tauri",
            link: "#",
            color: "text-neutral-400",
            tags: ["Rust", "GUI", "WIP"]
        }];

        const blogPosts = [{
            id: "05-7-2025",
            color: "#FB2C36",
            title: "i made an app launcher in <6 hours",
            date: "July 5, 2025",
            excerpt: "saw raycast, got inspired, made thing, abandoned thing 😔",
            tags: ["C++"],
            link: "https://unium.in/blog/05-7-2025.html"
        },{
            id: "2025-04-13",
            color: "#f25f4c",
            title: "bloggy is out fr (also now yells at your bad markdown)",
            date: "April 13, 2025",
            excerpt: "this is the update post for bloggy because omg it’s out now",
            tags: ["JavaScript", "Announcement"],
            link: "https://unium.in/blog/04-13-2025.html"
        }, {
            id: "2025-04-10",
            color: "#7f5af0",
            title: "Hello bloggy!",
            date: "April 10, 2025",
            excerpt: "Omggg Hiiiiiiii",
            tags: ["Introduction"],
            link: "https://unium.in/blog/04-10-2025.html"
        }];

        function loadBlogPosts() {
            const blogContainer = document.getElementById("blog-posts-container");
            if (!blogContainer) return;

            blogContainer.innerHTML = '';

            blogPosts.forEach(post => {
                const tagsHTML = post.tags.map(tag =>
                    `<span class="inline-block bg-neutral-800 px-2 py-1 text-xs rounded mr-1">${tag}</span>`
                ).join('');

                blogContainer.insertAdjacentHTML('beforeend', `
                    <div class="bg-neutral-900 p-4 rounded-lg project-card transition-all duration-300 hover:bg-neutral-800/50">
                        <h3 class="text-xl font-bold mb-2 text-[${post.color}]">${post.title}</h3>
                        <div class="text-neutral-400 text-sm mb-2">${post.date}</div>
                        <p class="mb-3">${post.excerpt}</p>
                        <div class="mb-3">${tagsHTML}</div>
                        <a href="${post.link}" class="text-blue-400 hover:underline flex items-center gap-1">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                `);
            });
        }

        function typeCommand() {
            if (charIndex < terminalCommands[currentCommand].length) {
                terminalCommandElement.textContent += terminalCommands[currentCommand].charAt(charIndex);
                charIndex++;
                setTimeout(typeCommand, 100)
            } else {
                setTimeout(() => {
                    executeCommand(terminalCommands[currentCommand]);
                    terminalCommandElement.textContent = "";
                    charIndex = 0;
                    currentCommand = (currentCommand + 1) % terminalCommands.length;
                    setTimeout(typeCommand, 2000)
                }, 1000)
            }
        }

        function executeCommand(command) {
            outputElement.innerHTML += `<div><span class="text-green-400">➜</span> <span class="text-blue-400">~/Projects/personal/portfolio</span> ✗ ${command}</div>`;
            let output = "";
            if (command === "ls") {
                output = "index.html projects.html about.html contact.html copyright.md"
            } else if (command === "cat copyright.md") {
                output = `<pre># Copyright Notice\n© 2024 unium. All rights reserved.</pre>`
            } else if (command === "clear") {
                outputElement.innerHTML = "";
                return
            }
            if (output) {
                outputElement.innerHTML += `<div class="text-neutral-300">${output}</div>`
            }
        }

        function showSection(sectionId) {
            document.getElementById('mobile-menu').classList.add('hidden');
            document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
            document.getElementById(sectionId).classList.remove('hidden');
            document.getElementById('current-file').textContent = sectionId + (sectionId === 'copyright' ? '.md' : '.html');

            if (sectionId === 'blog') {
                loadBlogPosts();
            }

            window.scrollTo(0, 0);
        }

        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden')
        }

        function copyToClipboard(text, count) {
            navigator.clipboard.writeText(text).then(() => {
                const message = document.getElementById(count === 1 ? 'copy-message' : 'copy-message2');
                if (!message) return;
                message.classList.remove('hidden');
                message.classList.add('fade-in');
                setTimeout(() => {
                    message.classList.remove('fade-in');
                    message.classList.add('hidden')
                }, 2000)
            }).catch(err => console.error(`Failed to copy text: ${err.message}`))
        }

        function toggleBlogFolder() {
            const folderContent = document.getElementById('blog-folder-content');
            const folderIcon = document.getElementById('blog-folder-icon');

            if (folderContent.classList.contains('hidden')) {
                folderContent.classList.remove('hidden');
                folderIcon.style.transform = 'rotate(90deg)';
            } else {
                folderContent.classList.add('hidden');
                folderIcon.style.transform = 'rotate(0)';
            }
        }