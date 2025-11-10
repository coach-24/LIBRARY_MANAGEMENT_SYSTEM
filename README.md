# LIBRARY_MANAGEMENT_SYSTEM
# LibroSphere — Library Management System (Vanilla HTML/CSS/JS)

A browser‑only library app with **Student** and **Librarian** flows. No backend required — data is stored in `localStorage`. Includes login/register, book search & department filter, borrow/return with due dates, and basic fine management.

---

## ✨ Features

* **Role select:** Student or Librarian landing.
* **Auth (demo):** Register & login stored in `localStorage` (plaintext for demo only).
* **Preloaded data:** Sample catalog across departments (Literature, Science, CS, History, Mathematics, Fiction).
* **Search & filter:** Keyword search by title/author + department filter.
* **Borrow/Return:**

  * Max **3 active loans** per user.
  * **14‑day** due date per loan.
  * Prevents borrowing the same ISBN twice by the same user.
* **Borrowed list:** Per‑user list with formatted due dates.
* **Fines:** $0.50/day overdue. Add/deduct tools for librarians.
* **Notifications:** In‑app toasts for actions, reminders (UI only).
* **Librarian dashboard:** Add/Edit/Delete books, bulk display, create departments.
* **Session UI:** Dynamic sections; logout button shows when logged in.

> **Note:** Logout currently clears all `localStorage` data for this origin (users, books, fines).

---

## 🧱 Tech Stack

* **HTML5**, **CSS3** (Google Fonts, modern UI), **JavaScript (ES6)**
* **Icons:** Font Awesome 6 (CDN)
* **State:** `localStorage`

---

## 📁 Project Structure

```
.
├─ index.html         # UI layout & sections
├─ style.css          # Theme, layout, responsive styles
└─ script.js          # App logic (auth, books, borrow/return, fines)
```

---

## 🚀 Getting Started

### 1) Clone

```bash
git clone https://github.com/coach-24/<repo-name>.git
cd <repo-name>
```

### 2) Run locally

Open `index.html` directly, **or** use a static server (recommended for CORS and routing):

```bash
# Node http-server
npx http-server -p 5173
# or
npx serve .
```

Then visit the shown URL (e.g. `http://localhost:5173`).

---

## 🔐 Demo Credentials & Roles

* **Librarians:** usernames → `23BCE9582`, `23BCE9342`
  **Password:** `librarian@123`
* **Students (preloaded):**

  * `23BCE9354`, `23BCE9464`, `23BCE9568`, `23BCE9573`, `23BCE9579`,
    `23BCE9590`, `23BCE9600`, `23BCE9604`, `23BCE9582`
    **Password for all:** `user@123`
* **Register:** Students can self‑register (librarian usernames are reserved).

> Passwords are **plaintext** and for demo only. Do **not** use real credentials.

---

## 📚 Catalog & Departments

* Initial catalog is seeded on first run (and persisted).
* Departments shown as horizontally scrollable lists per department.
* Librarians can add new departments; they appear in **Add/Edit** forms and **Filters**.

---

## 🔎 Search & Filter

* Enter a keyword to match **title** or **author**.
* Use the **department dropdown** to narrow results.

---

## 📖 Borrow/Return Rules

* **ISBN required** to borrow/return.
* **Limit:** up to **3** active loans.
* **Due date:** current date + **14 days**.
* **Duplicate prevention:** same user can’t borrow the same ISBN twice.

---

## 💸 Fines

* Overdue fee: **$0.50/day** beyond due date.
* Students can view their current fine.
* Librarian tools to **Add**/**Deduct** fines for any username.

---

## 🔔 Notifications

* Toast messages for actions and reminders (front‑end only).
  (In a real app, wire these to email/SMS or the Notifications API.)

---

## 🧪 Validation & Utilities

* **ISBN checks:** accepts 10 or 13 digits (basic regex).
* **Data safety:** simple guards for empty fields and duplicates.

---

## ⚠️ Security & Data Notes

* All data (users, books, fines) is kept in **`localStorage`**.
* **Logout clears `localStorage`** (resets demo state next visit).
* No encryption, hashing, RBAC, or server‑side enforcement — by design for a front‑end demo.

---

---
## 🗺️ Roadmap / Next Steps

* Hash passwords (e.g., Web Crypto) and avoid storing raw creds.
* Track **book availability** and who currently holds a copy.
* Borrow caps per department / per copy, reservations & waitlists.
* Import/Export as JSON; CSV upload for bulk catalog.
* Real reminders (Notifications API, service worker) & PWA offline.
* Backend adapter (REST/Firebase/Supabase) with proper auth (JWT) & roles.
* Unit tests for borrow/return, fines, and storage.

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feat/<short-name>`
3. Commit: `git commit -m "feat: <message>"`
4. Push: `git push origin feat/<short-name>`
5. Open a PR

---

## 📄 License

Copyright (c) 2025 COACH

---

## 🙋 FAQ

**Why don’t I see my data after logout?**
The app clears `localStorage` on logout by design.

**Why can’t I borrow more books?**
There’s a max of **3** active loans per student.

**How are fines calculated?**
$0.50 × overdue days (ceil). Displayed in the student fine view and editable by librarians.
