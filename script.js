document.addEventListener('DOMContentLoaded', function() {


    
    // --- Constants ---
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const FINE_PER_DAY = 0.50;
    const MAX_BORROWED_BOOKS = 3;

    // --- Section Elements ---
    const userSelectionSection = document.getElementById('user-selection');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const bookSearchSection = document.getElementById('book-search');
    const bookListSection = document.getElementById('book-list');
    const borrowReturnSection = document.getElementById('borrow-return');
    const librarianDashboardSection = document.getElementById('librarian-dashboard');
    const fineManagementSection = document.getElementById('fine-management');
    const notificationSection = document.getElementById('notification');
    const borrowedBooksSection = document.getElementById('borrowed-books');

    // --- Button Elements ---
    const studentButton = document.getElementById('student-button');
    const librarianButton = document.getElementById('librarian-button');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const searchButton = document.getElementById('search-button');
    const borrowButton = document.getElementById('borrow-button');
    const returnButton = document.getElementById('return-button');
    const addBookButton = document.getElementById('add-book-button');
    const editBookButton = document.getElementById('edit-book-button');
    const deleteBookButton = document.getElementById('delete-book-button');
    const checkFinesButton = document.getElementById('check-fines-button');
    const homeLink = document.getElementById('home-link');
    const logoutButton = document.getElementById('logout-button');
    const logoutLi = document.getElementById('logout-li');
    const displayBooksButton = document.getElementById('display-books-button');
    const addDepartmentButton = document.getElementById('add-department-button');
    const addFineButton = document.getElementById('add-fine-button');
    const deductFineButton = document.getElementById('deduct-fine-button');

    // Fine Manage Buttons

    // Add department filter select element
    const departmentFilter = document.getElementById('department-filter');

    const addDepartmentSelect = document.getElementById('add-department');
    const editDepartmentSelect = document.getElementById('edit-department');

    // Other Elements
    const searchResultsDiv = document.getElementById('search-results');
    const bookListContainer = document.getElementById('book-list-container'); // Changed from bookListUl
    const notificationMessage = document.getElementById('notification-message');
    const fineAmount = document.getElementById('fine-amount');
    const displayBooksArea = document.getElementById('display-books-area');
    const borrowedBooksList = document.getElementById('borrowed-books-list');

    // --- State Variables ---
    let isLoggedIn = false;
    let isLibrarian = false;
    let loggedInUser = null;

    // const departments = ["Literature", "Science", "Computer Science", "History", "Mathematics", "Fiction"];
    //Initial books data
    const initialBooks = [{
            title: "Book 1 Literature",
            author: "Author 1",
            isbn: "1111111111",
            department: "Literature"
        },
        {
            title: "Book 2 Literature",
            author: "Author 2",
            isbn: "1111111112",
            department: "Literature"
        },
        {
            title: "Book 3 Literature",
            author: "Author 3",
            isbn: "1111111113",
            department: "Literature"
        },
        {
            title: "Book 4 Literature",
            author: "Author 4",
            isbn: "1111111114",
            department: "Literature"
        },
        {
            title: "Book 5 Literature",
            author: "Author 5",
            isbn: "1111111115",
            department: "Literature"
        },
        {
            title: "Book 1 Science",
            author: "Author 1",
            isbn: "2222222211",
            department: "Science"
        },
        {
            title: "Book 2 Science",
            author: "Author 2",
            isbn: "2222222212",
            department: "Science"
        },
        {
            title: "Book 3 Science",
            author: "Author 3",
            isbn: "2222222213",
            department: "Science"
        },
        {
            title: "Book 4 Science",
            author: "Author 4",
            isbn: "2222222214",
            department: "Science"
        },
        {
            title: "Book 5 Science",
            author: "Author 5",
            isbn: "2222222215",
            department: "Science"
        },
        {
            title: "Book 1 Computer Science",
            author: "Author 1",
            isbn: "3333333311",
            department: "Computer Science"
        },
        {
            title: "Book 2 Computer Science",
            author: "Author 2",
            isbn: "3333333312",
            department: "Computer Science"
        },
        {
            title: "Book 3 Computer Science",
            author: "Author 3",
            isbn: "3333333313",
            department: "Computer Science"
        },
        {
            title: "Book 4 Computer Science",
            author: "Author 4",
            isbn: "3333333314",
            department: "Computer Science"
        },
        {
            title: "Book 5 Computer Science",
            author: "Author 5",
            isbn: "3333333315",
            department: "Computer Science"
        },
        {
            title: "Book 1 History",
            author: "Author 1",
            isbn: "4444444411",
            department: "History"
        },
        {
            title: "Book 2 History",
            author: "Author 2",
            isbn: "4444444412",
            department: "History"
        },
        {
            title: "Book 3 History",
            author: "Author 3",
            isbn: "4444444413",
            department: "History"
        },
        {
            title: "Book 4 History",
            author: "Author 4",
            isbn: "4444444414",
            department: "History"
        },
        {
            title: "Book 5 History",
            author: "Author 5",
            isbn: "4444444415",
            department: "History"
        },
        {
            title: "Book 1 Mathematics",
            author: "Author 1",
            isbn: "5555555511",
            department: "Mathematics"
        },
        {
            title: "Book 2 Mathematics",
            author: "Author 2",
            isbn: "5555555512",
            department: "Mathematics"
        },
        {
            title: "Book 3 Mathematics",
            author: "Author 3",
            isbn: "5555555513",
            department: "Mathematics"
        },
        {
            title: "Book 4 Mathematics",
            author: "Author 4",
            isbn: "5555555514",
            department: "Mathematics"
        },
        {
            title: "Book 5 Mathematics",
            author: "Author 5",
            isbn: "5555555515",
            department: "Mathematics"
        },
        {
            title: "Book 1 Fiction",
            author: "Author 1",
            isbn: "6666666611",
            department: "Fiction"
        },
        {
            title: "Book 2 Fiction",
            author: "Author 2",
            isbn: "6666666612",
            department: "Fiction"
        },
        {
            title: "Book 3 Fiction",
            author: "Author 3",
            isbn: "6666666613",
            department: "Fiction"
        },
        {
            title: "Book 4 Fiction",
            author: "Author 4",
            isbn: "6666666614",
            department: "Fiction"
        },
        {
            title: "Book 5 Fiction",
            author: "Author 5",
            isbn: "6666666615",
            department: "Fiction"
        }
    ];

    // Initialize allBooks.  If local storage is empty, add the predefined users.
    let allBooks = JSON.parse(localStorage.getItem('books')) || initialBooks;
    if (allBooks.length === 0) {
        allBooks = initialBooks;
        localStorage.setItem('books', JSON.stringify(allBooks));
    }

    //Departments array
    const departments = ["Literature", "Science", "Computer Science", "History", "Mathematics", "Fiction"];

    // Predefined users
    const predefinedUsers = [
        "23BCE9354",
        "23BCE9464",
        "23BCE9568",
        "23BCE9573",
        "23BCE9579",
        "23BCE9590",
        "23BCE9600",
        "23BCE9604",
        "23BCE9582"
    ];

    // Initialize allUsers.  If local storage is empty, add the predefined users.
    let allUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (allUsers.length === 0) {
        allUsers = predefinedUsers.map(username => ({
            username: username,
            password: "user@123", // VERY IMPORTANT:  Use hashing in a real app!
            name: username, // Or some default name
            contact: "N/A", // Default contact info
            borrowedBooks: [],
            fine: 0
        }));
        localStorage.setItem('users', JSON.stringify(allUsers));
    }

    // Predefined librarian usernames
    const librarianUsernames = ["23BCE9582", "23BCE9342"];

    // --- Helper Functions ---

    // Helper function to save users to Local Storage
    function saveUsersToLocalStorage() {
        localStorage.setItem('users', JSON.stringify(allUsers));
    }

    // Save books to local storage whenever the allBooks array changes
    function saveBooksToLocalStorage() {
        localStorage.setItem('books', JSON.stringify(allBooks));
    }

    function hideAllSections() {
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => section.classList.add('hidden'));
    }

    function showNotification(message) {
        const notificationMessage = document.getElementById('notification-message');
        const notificationSection = document.getElementById('notification');

        notificationMessage.textContent = message;
        notificationSection.classList.remove('hidden');
        setTimeout(() => notificationSection.classList.add('hidden'), 3000);
    }

    function updateNavigation() {
        const logoutLi = document.getElementById('logout-li');
        if (isLoggedIn) {
            logoutLi.classList.remove('hidden');
        } else {
            logoutLi.classList.add('hidden');
        }
    }

    function displayBooks(books, targetElement) {
        // Clear the existing container
        targetElement.innerHTML = '';

        // Group books by department
        const groupedBooks = {};
        books.forEach(book => {
            if (!groupedBooks[book.department]) {
                groupedBooks[book.department] = [];
            }
            groupedBooks[book.department].push(book);
        });

        // Loop through each department and create the horizontal list
        for (const department in groupedBooks) {
            if (groupedBooks.hasOwnProperty(department)) {
                const bookList = groupedBooks[department];

                // Create department container
                const departmentContainer = document.createElement('div');
                departmentContainer.classList.add('department-container');

                // Create department title
                const departmentTitle = document.createElement('h3');
                departmentTitle.classList.add('department-title');
                departmentTitle.textContent = department;
                departmentContainer.appendChild(departmentTitle);

                // Create horizontal book list
                const bookListHorizontal = document.createElement('div');
                bookListHorizontal.classList.add('book-list-horizontal');

                // Loop through each book and create the book item
                bookList.forEach(book => {
                    const bookItem = document.createElement('div');
                    bookItem.classList.add('book-item');
                    bookItem.innerHTML = `
                            <p><strong>Title:</strong> ${book.title}</p>
                            <p><strong>Author:</strong> ${book.author}</p>
                            <p><strong>ISBN:</strong> ${book.isbn}</p>
                        `;
                    bookListHorizontal.appendChild(bookItem);
                });

                departmentContainer.appendChild(bookListHorizontal);
                targetElement.appendChild(departmentContainer);
            }
        }
    }

    function isValidISBN(isbn) {
        // Basic ISBN validation (can be improved)
        return /^\d{13}$/.test(isbn) || /^\d{10}$/.test(isbn);
    }

    function calculateDueDate() {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14); // Default due date: 2 weeks
        return dueDate;
    }

    function displayBorrowedBooks(user) {
        const borrowedBooksList = document.getElementById('borrowed-books-list');
        borrowedBooksList.innerHTML = ""; // Clear the list

        if (!user || !user.borrowedBooks || user.borrowedBooks.length === 0) {
            borrowedBooksList.innerHTML = "<p>No books borrowed.</p>";
            return;
        }

        user.borrowedBooks.forEach(borrowedBook => {
            const dueDate = new Date(borrowedBook.dueDate); // Convert dueDate to Date object
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                    Title: ${borrowedBook.title}<br>
                    ISBN: ${borrowedBook.isbn}<br>
                    Due Date: ${dueDate.toLocaleDateString()}<br><br>
                `;
            borrowedBooksList.appendChild(listItem);
        });
    }

    function checkOverdueBooks() {
        allUsers.forEach(user => {
            if (user.borrowedBooks) {
                user.borrowedBooks.forEach(borrowedBook => {
                    const dueDate = new Date(borrowedBook.dueDate);

                    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
                    const FINE_PER_DAY = 0.50;

                    if (now.getTime() > dueDate.getTime()) {
                        // Book is overdue
                        const overdueDays = Math.ceil((now.getTime() - dueDate.getTime()) / MILLISECONDS_PER_DAY);
                        const fine = overdueDays * FINE_PER_DAY;
                        user.fine = (user.fine || 0) + fine; // Accumulate the fine

                        showNotification(`Book "${borrowedBook.title}" is overdue. Fine: $${fine.toFixed(2)}`);
                        console.log(`Book "${borrowedBook.title}" is overdue. Fine: $${fine.toFixed(2)}`);
                    } else {
                        // Check if the book is due in 24 hours
                        const timeDiff = dueDate.getTime() - now.getTime();
                        const hoursUntilDue = timeDiff / (1000 * 60 * 60);

                        if (hoursUntilDue <= 24) {
                            // Send a notification (in real app, this would be a SMS or email)
                            showNotification(`Reminder: Book "${borrowedBook.title}" is due soon.`);
                            console.log(`Reminder: Book "${borrowedBook.title}" is due soon.`);
                        }
                    }
                });
            }
        });
    }

    function scheduleNotificationsForAllUsers() {
        allUsers.forEach(user => {
            if (user.borrowedBooks) {
                user.borrowedBooks.forEach(borrowedBook => {
                    const dueDate = new Date(borrowedBook.dueDate);

                    // Schedule notification 24 hours before due date
                    const reminderTime = dueDate.getTime() - 24 * 60 * 60 * 1000;

                    //If user is not logged in don't bother to send out a reminder
                    if (loggedInUser === null) {
                        return;
                    }
                    //Don't send a notification if the user is librarian
                    if (loggedInUser.isLibrarian) {
                        return;
                    }

                    //Only send a reminder to the current loged in user only
                    if (loggedInUser.username !== user.username) {
                        return;
                    }

                    setTimeout(() => {
                        // Send notification (in real app, this would be a SMS or email)
                        showNotification(`Reminder: Book "${borrowedBook.title}" is due soon.`);
                    }, reminderTime - Date.now());
                });
            }
        });
    }

    function checkAndApplyFinesForAllUsers() {
        allUsers.forEach(user => {
            if (user.borrowedBooks) {
                user.borrowedBooks.forEach(borrowedBook => {
                    const dueDate = new Date(borrowedBook.dueDate);

                    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
                    const FINE_PER_DAY = 0.50;

                    //If the current time is after the due date calculate the overdue fee
                    if (Date.now() > dueDate.getTime()) {
                        const overdueDays = Math.ceil((Date.now() - dueDate.getTime()) / MILLISECONDS_PER_DAY);
                        const fine = overdueDays * FINE_PER_DAY;
                        user.fine = (user.fine || 0) + fine; // Accumulate the fine

                        showNotification(`Book "${borrowedBook.title}" is overdue. Fine: $${fine.toFixed(2)}`);
                        console.log(`Book "${borrowedBook.title}" is overdue. Fine: $${fine.toFixed(2)}`);
                    }
                });
            }
        });
    }

    // --- Event Listeners ---

    studentButton.addEventListener('click', function() {
        hideAllSections();
        loginSection.classList.remove('hidden');
        registerSection.classList.remove('hidden');
        isLibrarian = false;
    });

    librarianButton.addEventListener('click', function() {
        hideAllSections();
        loginSection.classList.remove('hidden');
        registerSection.classList.remove('hidden');
        isLibrarian = true;
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        console.log("Login attempt:");
        console.log("Username:", username);
        console.log("Password:", password);

        // Retrieve users from local storage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        console.log("Users from local storage:", users);

        const isEnteredLibrarian = librarianUsernames.includes(username);
        console.log("Is librarian:", isEnteredLibrarian);

        let user;

        if (isEnteredLibrarian) {
            if (password === "librarian@123") {
                user = {
                    username: username,
                    name: "Librarian", // Default librarian name
                    isLibrarian: true,
                    borrowedBooks: [],
                    fine: 0
                };
                isLibrarian = true;
                console.log("Librarian user created:", user);
            } else {
                showNotification("Invalid librarian password.");
                return;
            }
        } else {
            user = users.find(u => u.username === username && u.password === password);
            console.log("Regular user found:", user);
        }

        if (user) {
            isLoggedIn = true;
            loggedInUser = user;
            hideAllSections();

            if (isEnteredLibrarian) {
                librarianDashboardSection.classList.remove('hidden');
                showNotification("Librarian logged in!");
                isLibrarian = true;
            } else {
                bookSearchSection.classList.remove('hidden');
                bookListSection.classList.remove('hidden');
                borrowReturnSection.classList.remove('hidden');
                borrowedBooksSection.classList.remove('hidden');
                displayBorrowedBooks(user);
                displayBooks(allBooks, bookListContainer);
                showNotification(`Welcome, ${user.name}!`);
            }
            updateNavigation();
        } else {
            showNotification("Invalid username or password.");
        }
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value; //TODO hash this
        const name = document.getElementById('register-name').value;
        const contact = document.getElementById('register-contact').value;

        console.log("Register attempt:");
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Name:", name);
        console.log("Contact:", contact);

        // Retrieve users from local storage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        console.log("users localStorage before:", users);

        // Check if username already exists
        if (users.find(u => u.username === username)) {
            showNotification("Username already exists.");
            return;
        }

        // Only allow registration for regular users (non-librarians)
        if (librarianUsernames.includes(username)) {
            showNotification("This username is reserved for librarians.");
            return;
        }

        // Check if the entered username is in the allowedUsernames list


        const newUser = {
            username: username,
            password: password, //TODO hash this
            name: name,
            contact: contact,
            borrowedBooks: [],
            fine: 0
        };

        users.push(newUser);

        // Save users to local storage
        localStorage.setItem('users', JSON.stringify(users));

        console.log("users localStorage after:", users);

        // Auto-login after registration
        isLoggedIn = true;
        loggedInUser = newUser;
        hideAllSections();
        bookSearchSection.classList.remove('hidden');
        bookListSection.classList.remove('hidden');
        borrowReturnSection.classList.remove('hidden');
        borrowedBooksSection.classList.remove('hidden');
        displayBorrowedBooks(newUser);
        displayBooks(allBooks, bookListContainer);
        showNotification(`Welcome, ${newUser.name}!`);
        updateNavigation();
    });

    searchButton.addEventListener('click', function() {
        const searchTerm = document.getElementById('search-term').value.toLowerCase();
        const filteredBooks = allBooks.filter(book =>
            book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
        );
        displayBooks(filteredBooks, bookListContainer); // Display filtered books
    });

    borrowButton.addEventListener('click', function() {
        const isbn = document.getElementById('borrow-isbn').value;

        if (!isLoggedIn) {
            showNotification("You must be logged in to borrow books.");
            return;
        }

        if (!loggedInUser) {
            showNotification("No user is logged in.");
            return;
        }

        if (loggedInUser.borrowedBooks.length >= MAX_BORROWED_BOOKS) {
            showNotification(`You have reached the maximum limit of ${MAX_BORROWED_BOOKS} borrowed books.`);
            return;
        }

        if (loggedInUser.fine > 0) {
            showNotification("You have pending fines. Please pay them before borrowing a book.");
            return;
        }

        const bookToBorrow = allBooks.find(book => book.isbn === isbn);
        if (!bookToBorrow) {
            showNotification("Book not found.");
            return;
        }

        //Check if the book is already borrowed
        const isAlreadyBorrowed = loggedInUser.borrowedBooks.some(borrowedBook => borrowedBook.isbn === isbn);
        if (isAlreadyBorrowed) {
            showNotification("You have already borrowed this book");
            return;
        }
        const dueDate = calculateDueDate();

        loggedInUser.borrowedBooks.push({
            title: bookToBorrow.title,
            isbn: bookToBorrow.isbn,
            dueDate: dueDate
        });

        //After borrow, the allUsers needs to be updated as well and saved to localStorage
        allUsers = allUsers.map(user => {
            if (user.username === loggedInUser.username) {
                user = loggedInUser
            }
            return user
        })
        saveUsersToLocalStorage();

        showNotification(`Book "${bookToBorrow.title}" borrowed. Due date: ${dueDate.toLocaleDateString()}`);
        displayBorrowedBooks(loggedInUser);
        borrowReturnSection.classList.remove('hidden');
    });

    returnButton.addEventListener('click', function() {
        const isbn = document.getElementById('borrow-isbn').value;
        if (!isLoggedIn) {
            showNotification("You must be logged in as a student to return books.");
            return;
        }

        if (!loggedInUser) {
            showNotification("No user is logged in.");
            return;
        }

        const bookIndex = loggedInUser.borrowedBooks.findIndex(book => book.isbn === isbn);

        if (bookIndex === -1) {
            showNotification("You haven't borrowed this book.");
            return;
        }

        loggedInUser.borrowedBooks.splice(bookIndex, 1);

        //After return, the allUsers needs to be updated as well and saved to localStorage
        allUsers = allUsers.map(user => {
            if (user.username === loggedInUser.username) {
                user = loggedInUser
            }
            return user
        })
        saveUsersToLocalStorage();

        showNotification("Book returned successfully.");
        displayBorrowedBooks(loggedInUser);
        borrowReturnSection.classList.remove('hidden');
    });

    addBookButton.addEventListener('click', function() {
        const title = document.getElementById('add-title').value;
        const author = document.getElementById('add-author').value;
        const isbn = document.getElementById('add-isbn').value;
        const department = addDepartmentSelect.value;

        if (!title || !author || !isbn || !department) {
            alert("Please fill all fields");
            return;
        }

        if (!isValidISBN(isbn)) {
            showNotification("Invalid ISBN format.");
            return;
        }

        if (allBooks.find(book => book.isbn === isbn)) {
            showNotification("Book with this ISBN already exists.");
            return;
        }

        const newBook = {
            title,
            author,
            isbn,
            department
        };
        allBooks.push(newBook);
        saveBooksToLocalStorage();
        displayBooks(allBooks, displayBooksArea);
        showNotification("Book added!");
    });

    editBookButton.addEventListener('click', function() {
        const isbnToEdit = document.getElementById('edit-isbn').value;
        const newTitle = document.getElementById('edit-title').value;
        const newAuthor = document.getElementById('edit-author').value;
        const newDepartment = editDepartmentSelect.value;

        const bookIndex = allBooks.findIndex(book => book.isbn === isbnToEdit);
        if (bookIndex !== -1) {
            if (newTitle) allBooks[bookIndex].title = newTitle;
            if (newAuthor) allBooks[bookIndex].author = newAuthor;
            if (newDepartment) allBooks[bookIndex].department = newDepartment;
            saveBooksToLocalStorage();
            displayBooks(allBooks, displayBooksArea);
            showNotification("Book edited!");
        } else {
            alert("Book not found");
        }
    });

    deleteBookButton.addEventListener('click', function() {
        const isbnToDelete = document.getElementById('delete-isbn').value;
        const bookIndex = allBooks.findIndex(book => book.isbn === isbnToDelete);
        if (bookIndex !== -1) {
            allBooks.splice(bookIndex, 1);
            saveBooksToLocalStorage();
            displayBooks(allBooks, displayBooksArea);
            showNotification("Book deleted!");
        } else {
            alert("Book not found");
        }
    });

    checkFinesButton.addEventListener('click', function() {
        const userId = document.getElementById('user-id').value;

        // --- IMPLEMENT BACKEND API CALL TO CHECK FINES ---
        const fineAmount = document.getElementById('fine-amount');
        if (!isLoggedIn) {
            showNotification("User must be logged in!");
            return;
        }

        if (isLibrarian) {
            showNotification("Librarians do not have fines!");
            return;
        }

        fineAmount.textContent = `Fine Amount: $${loggedInUser.fine.toFixed(2)}`; //Example Fine
        showNotification("Fine checked!");
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        hideAllSections();
        userSelectionSection.classList.remove('hidden');
        isLoggedIn = false;
        isLibrarian = false;
        updateNavigation();
    });

    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        hideAllSections();
        userSelectionSection.classList.remove('hidden');
        isLoggedIn = false;
        isLibrarian = false;
        loggedInUser = null;

        // Clear the search bar input
        const searchTermInput = document.getElementById('search-term');
        if (searchTermInput) {
            searchTermInput.focus();
            searchTermInput.value = "";
        }

        localStorage.clear();

        updateNavigation();
        showNotification("Logged out");
    });

    displayBooksButton.addEventListener('click', function() {
        displayBooks(allBooks, displayBooksArea);
    });

    departmentFilter.addEventListener('change', function() {
        const selectedDepartment = departmentFilter.value;
        let filteredBooks;

        const bookListContainer = document.getElementById('book-list-container');
        if (selectedDepartment === "") {
            filteredBooks = allBooks;
        } else {
            filteredBooks = allBooks.filter(book => book.department === selectedDepartment);
        }

        displayBooks(filteredBooks, bookListContainer);
    });

    addDepartmentButton.addEventListener('click', function() {
        const addDepartmentSelect = document.getElementById('add-department');
        const editDepartmentSelect = document.getElementById('edit-department');
        const departmentFilterSelect = document.getElementById('department-filter');
        const newDepartmentName = document.getElementById('add-department-name').value;

        if (newDepartmentName && !departments.includes(newDepartmentName)) {
            departments.push(newDepartmentName);

            // Update select options for add and edit book forms
            const addSelect = document.getElementById('add-department');
            const editSelect = document.getElementById('edit-department');

            const newOption = `<option value="${newDepartmentName}">${newDepartmentName}</option>`;
            addSelect.innerHTML += newOption;
            editSelect.innerHTML += newOption;

            // Update department filter options
            const departmentFilterSelect = document.getElementById('department-filter');
            departmentFilterSelect.innerHTML += newOption;

            showNotification(`Department "${newDepartmentName}" added successfully!`);
        } else {
            showNotification("Invalid or duplicate department name.");
        }
    });


    //ADD FINE BUTTON
    if (addFineButton) {
        addFineButton.addEventListener('click', () => {
            const username = document.getElementById('manage-fine-username').value;
            const fineAmountToAdd = parseFloat(document.getElementById('manage-fine-amount').value);

            if (!username || isNaN(fineAmountToAdd)) {
                showNotification('Please enter a username and a valid fine amount.');
                return;
            }

            const userToUpdate = allUsers.find(user => user.username === username);
            if (!userToUpdate) {
                showNotification('User not found.');
                return;
            }

            userToUpdate.fine = (userToUpdate.fine || 0) + fineAmountToAdd;

            // Save users to local storage
            saveUsersToLocalStorage()

            showNotification(`$${fineAmountToAdd} added to ${username}'s fine. New fine: $${userToUpdate.fine}`);
        });
    }

    //DEDUCT FINE BUTTON
    if (deductFineButton) {
        deductFineButton.addEventListener('click', () => {
            const username = document.getElementById('manage-fine-username').value;
            const fineAmountToDeduct = parseFloat(document.getElementById('manage-fine-amount').value);

            if (!username || isNaN(fineAmountToDeduct)) {
                showNotification('Please enter a username and a valid fine amount.');
                return;
            }

            const userToUpdate = allUsers.find(user => user.username === username);
            if (!userToUpdate) {
                showNotification('User not found.');
                return;
            }

            if (fineAmountToDeduct > userToUpdate.fine) {
                showNotification('Cannot deduct more than the current fine.');
                return;
            }

            userToUpdate.fine -= fineAmountToDeduct;

            // Save users to local storage
            saveUsersToLocalStorage()

            showNotification(`$${fineAmountToDeduct} deducted from ${username}'s fine. New fine: $${userToUpdate.fine}`);
        });
    }

    //Functions to initial load value
    function loadInitialValue() {
        // scheduleNotificationsForAllUsers();

                //Call the checkAndApplyFinesForAllUsers function
                checkAndApplyFinesForAllUsers();

                function createDepartmentOptions(selectElement) {
                    departments.forEach(department => {
                        const option = document.createElement("option");
                        option.value = department;
                        option.textContent = department;
                        selectElement.appendChild(option);
                    });
                }

                //Call the function to load initial value
                createDepartmentOptions(addDepartmentSelect);
                createDepartmentOptions(editDepartmentSelect);
                createDepartmentOptions(departmentFilter);
            }

            // --- Initial Setup ---
            hideAllSections();
            userSelectionSection.classList.remove('hidden');
            updateNavigation();

            //Load initial Value when loaded
            loadInitialValue();
        });
