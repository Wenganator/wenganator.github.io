const genres = {
    Theology: [
        { cover: 'assets/images/books/knowing-god.jpg', title: 'Knowing God', author: 'J. I. Packer', notes: 'Notes for Theology Book 1' },
        { cover: 'assets/images/books/desiring-god.jpg', title: 'Desiring God: Meditations of a Christian Hedonist', author: 'John Piper', notes: 'Notes for Theology Book 2' },
        { cover: 'assets/images/books/the-cross-of-christ.jpg', title: 'The Cross of Christ', author: 'John Stott', notes: 'Notes for Theology Book 3' },
        { cover: 'assets/images/books/celebration-of-discipline.jpg', title: 'Celebration of Discipline: The Path to Spiritual Growth', author: 'Richard Foster', notes: 'Notes for Theology Book 4' },
        { cover: 'assets/images/books/jensens-survey-of-the-new-testament.jpg', title: 'Jensen\'s Survey of the New Testament', author: 'Irving L. Jensen', notes: 'Notes for Theology Book 5' },
        { cover: 'assets/images/books/systematic-theology.jpg', title: 'Systematic Theology: An Introduction to Biblical Doctrine', author: 'Wayne Grudem', notes: 'Notes for Theology Book 6' },
        { cover: 'assets/images/books/the-only-wise-god.jpg', title: 'The Only Wise God: The Compatibility of Divine Foreknowledge & Human Freedom', author: 'William Lane Craig', notes: 'Notes for Theology Book 7' },
        { cover: 'assets/images/books/confessions.jpg', title: 'Confessions', author: 'Augustine', notes: 'Notes for Theology Book 8' },
        { cover: 'assets/images/books/the-valley-of-vision.jpg', title: 'The Valley of Vision: A Collection of Puritan Prayers & Devotions', author: 'Ed. Arthur Bennett', notes: 'Notes for Theology Book 9' },
    ],
    Nonfiction: [
        { cover: 'placeholder.jpg', title: 'Nonfiction Book 1', author: 'Author A', notes: 'Notes for Nonfiction Book 1' },
        { cover: 'placeholder.jpg', title: 'Nonfiction Book 2', author: 'Author B', notes: 'Notes for Nonfiction Book 2' },
        { cover: 'placeholder.jpg', title: 'Nonfiction Book 3', author: 'Author C', notes: 'Notes for Nonfiction Book 3' },
        { cover: 'placeholder.jpg', title: 'Nonfiction Book 4', author: 'Author D', notes: 'Notes for Nonfiction Book 4' },
        { cover: 'placeholder.jpg', title: 'Nonfiction Book 5', author: 'Author E', notes: 'Notes for Nonfiction Book 5' },
        { cover: 'placeholder.jpg', title: 'Nonfiction Book 6', author: 'Author F', notes: 'Notes for Nonfiction Book 6' },
        { cover: 'placeholder.jpg', title: 'Nonfiction Book 7', author: 'Author G', notes: 'Notes for Nonfiction Book 7' },
        { cover: 'placeholder.jpg', title: 'Nonfiction Book 8', author: 'Author H', notes: 'Notes for Nonfiction Book 8' }
    ],
    Fiction: [
        { cover: 'assets/images/books/station-eleven.jpg', title: 'Station Eleven', author: 'Emily St. John Mandel', notes: 'Notes for Fiction Book 1' },
        { cover: 'placeholder.jpg', title: 'Fiction Book 2', author: 'Author G', notes: 'Notes for Fiction Book 2' },
        { cover: 'placeholder.jpg', title: 'Fiction Book 3', author: 'Author H', notes: 'Notes for Fiction Book 3' },
        { cover: 'placeholder.jpg', title: 'Fiction Book 4', author: 'Author I', notes: 'Notes for Fiction Book 4' },
        { cover: 'placeholder.jpg', title: 'Fiction Book 5', author: 'Author J', notes: 'Notes for Fiction Book 5' },
        { cover: 'placeholder.jpg', title: 'Fiction Book 6', author: 'Author K', notes: 'Notes for Fiction Book 6' },
        { cover: 'placeholder.jpg', title: 'Fiction Book 7', author: 'Author L', notes: 'Notes for Fiction Book 7' },
        { cover: 'placeholder.jpg', title: 'Fiction Book 8', author: 'Author M', notes: 'Notes for Fiction Book 8' }
    ],
    Other: [
        { cover: 'placeholder.jpg', title: 'Other Book 1', author: 'Author P', notes: 'Notes for Other Book 1' },
        { cover: 'placeholder.jpg', title: 'Other Book 2', author: 'Author Q', notes: 'Notes for Other Book 2' },
        { cover: 'placeholder.jpg', title: 'Other Book 3', author: 'Author R', notes: 'Notes for Other Book 3' },
        { cover: 'placeholder.jpg', title: 'Other Book 4', author: 'Author S', notes: 'Notes for Other Book 4' },
        { cover: 'placeholder.jpg', title: 'Other Book 5', author: 'Author T', notes: 'Notes for Other Book 5' },
        { cover: 'placeholder.jpg', title: 'Other Book 6', author: 'Author U', notes: 'Notes for Other Book 6' },
        { cover: 'placeholder.jpg', title: 'Other Book 7', author: 'Author V', notes: 'Notes for Other Book 7' },
        { cover: 'placeholder.jpg', title: 'Other Book 8', author: 'Author W', notes: 'Notes for Other Book 8' }
    ]
};

function setupWheel(genre, elementId) {
    const wheel = document.getElementById(elementId);
    const books = genres[genre];
    const angle = 360 / books.length;

    books.forEach((book, index) => {
        const img = document.createElement('img');
        img.src = book.cover;
        img.style.transform = `rotateY(${index * angle}deg) translateZ(250px)`;
        img.dataset.title = book.title;
        img.dataset.author = book.author;
        img.dataset.notes = book.notes;
        img.onclick = () => showOverlay(book);
        wheel.appendChild(img);
    });

    let isDragging = false;
    let startX = 0;
    let currentRotation = 0;
    let spinVelocity = 0;
    let animationFrame;

    wheel.onmousedown = (event) => {
        event.preventDefault();
        isDragging = true;
        startX = event.clientX;
        cancelAnimationFrame(animationFrame);
    };

    wheel.onmousemove = (event) => {
        if (!isDragging) return;
        const deltaX = event.clientX - startX;
        startX = event.clientX;
        currentRotation += deltaX * 0.5;
        wheel.style.transform = `rotateY(${currentRotation}deg)`;
        spinVelocity = deltaX;
    };

    wheel.onmouseup = () => {
        isDragging = false;
        let lastTime;
        function animate(time) {
            if (!lastTime) lastTime = time;
            const deltaTime = time - lastTime;
            lastTime = time;

            if (Math.abs(spinVelocity) > 0.1) {
                currentRotation += spinVelocity * (deltaTime / 16);
                wheel.style.transform = `rotateY(${currentRotation}deg)`;
                spinVelocity *= 0.95;
                animationFrame = requestAnimationFrame(animate);
            } else {
                animationFrame = null;
            }
        }
        animationFrame = requestAnimationFrame(animate);
    };

    wheel.onmouseleave = wheel.onmouseup;
}

function showOverlay(book) {
    const overlay = document.getElementById('book-overlay');
    document.getElementById('overlay-cover').src = book.cover;
    document.getElementById('overlay-title').textContent = book.title;
    document.getElementById('overlay-author').textContent = book.author;
    document.getElementById('overlay-notes').textContent = book.notes;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    document.getElementById('book-overlay').style.display = 'none';
}

setupWheel('Theology', 'wheel-theology');
setupWheel('Nonfiction', 'wheel-nonfiction');
setupWheel('Fiction', 'wheel-fiction');
setupWheel('Other', 'wheel-other');