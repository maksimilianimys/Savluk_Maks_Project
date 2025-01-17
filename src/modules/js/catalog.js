document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        const toggleActiveState = function () {
            const content = this.nextElementSibling;
            const parentItem = this.parentElement;

            if (parentItem.classList.contains("active")) {
                return;
            }

            document.querySelectorAll(".accordion-item.active").forEach(item => {
                if (item !== parentItem) {
                    item.classList.remove("active");
                    const itemContent = item.querySelector(".accordion-content");
                    if (itemContent) {
                        const listItems = itemContent.querySelectorAll("li");
                        listItems.forEach(item => {
                            item.removeAttribute("tabindex");
                        });
                    }
                }
            });

            parentItem.classList.add("active");

            const listItems = content.querySelectorAll("li");
            listItems.forEach(item => {
                item.setAttribute("tabindex", "0");
            });
        };

        button.addEventListener("click", toggleActiveState);
        button.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                toggleActiveState.call(this);
            }
        });

        button.addEventListener("mouseenter", function () {
            const parentItem = this.parentElement;

            if (parentItem.classList.contains("active")) {
                return;
            }

            document.querySelectorAll(".accordion-item.active").forEach(item => {
                if (item !== parentItem) {
                    item.classList.remove("active");
                    const itemContent = item.querySelector(".accordion-content");
                    if (itemContent) {
                        const listItems = itemContent.querySelectorAll("li");
                        listItems.forEach(item => {
                            item.removeAttribute("tabindex");
                        });
                    }
                }
            });

            parentItem.classList.add("active");

            const content = this.nextElementSibling;
            const listItems = content.querySelectorAll("li");
            listItems.forEach(item => {
                item.setAttribute("tabindex", "0");
            });
        });
    });

    const accordionContents = document.querySelectorAll(".accordion-content li");

    accordionContents.forEach(item => {
        const activateItem = function () {
            document.querySelectorAll(".accordion-content li.active").forEach(activeItem => {
                activeItem.classList.remove("active");
            });

            this.classList.add("active");
        };

        item.addEventListener("click", activateItem);
        item.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                activateItem.call(this);
            }
        });
    });
});

//tab-focus
document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".catalog-content-item-card");

    listItems.forEach(item => {
        const focusableElements = item.querySelectorAll("img:not(a img), a");

        focusableElements.forEach(element => {
            element.setAttribute("tabindex", "0");
        });
    });
});

//block-href
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".number-page-list a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href") === "#") {
                event.preventDefault();
            }
        });
    });
});

//number-active
document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".number-page-list a");

    listItems.forEach(item => {
        item.addEventListener("click", function () {

            listItems.forEach(item => item.classList.remove("active"));

            this.classList.add("active");
        });
    });
});