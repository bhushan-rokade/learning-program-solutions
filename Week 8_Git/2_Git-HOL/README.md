# Lab: Using `.gitignore` to Ignore Unwanted Files in Git

This document explains each command executed in the terminal to create `.log` files, a `log` directory, set up `.gitignore`, and push changes to GitHub.

---

## 1. Create a Directory (log)
```bash
mkdir log
```
Creates a folder named **log** in the current repository.

---

## 2. Create/Edit a Log File in Root Directory
```bash
notepad error.log
```
Opens Notepad to create or edit **error.log** in the root directory.

---

## 3. Navigate to the `log` Directory
```bash
cd log
```
Changes the current working directory to **log**.

---

## 4. Create a Log File in the `log` Directory
```bash
notepad error.log
```
Opens Notepad to create/edit **error.log** inside the **log** folder.

Or, using echo:
```bash
echo "This is log file" > error.log
```
Creates **error.log** and writes "This is log file" inside it.

---

## 5. Go Back to the Repository Root
```bash
cd ..
```
Navigates one level up to the root of the repository.

---

## 6. Create/Edit `.gitignore`
```bash
notepad .gitignore
```
Opens `.gitignore` in Notepad.  
The following lines were added to ignore `.log` files and the `log` directory:
```
*.log
log/
```

---

## 7. Check Git Status
```bash
git status
```
Displays the current status of the repository. At this point, `.gitignore` was untracked.

---

## 8. Stage Files for Commit
```bash
git add .
```
Stages all new and modified files, excluding files ignored by `.gitignore`.

---

## 9. Commit the Changes
```bash
git commit -m "Added the .gitignore file"
```
Commits the staged changes with the message "Added the .gitignore file".

---

## 10. Push Changes to GitHub
```bash
git push
```
Uploads the committed changes from the local repository to the remote repository on GitHub.

---

## Summary
- Created `.log` files and a `log` folder.
- Added `.gitignore` rules to exclude them from Git tracking.
- Staged, committed, and pushed changes to GitHub successfully.
