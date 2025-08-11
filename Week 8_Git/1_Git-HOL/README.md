# Git Initialization and Push to GitHub

This document explains the Git commands used to initialize a local repository, configure Git settings, create a file, commit it, and push it to GitHub.

---

## 1. Check Git Version
```bash
git --version
```
Checks the installed Git version.

---

## 2. Configure Global Git Username
```bash
git config --global user.name "bhushan-rokade"
```
Sets your Git username globally for all repositories.

---

## 3. Configure Global Git Email
```bash
git config --global user.email "rokadebhushan2005@gmail.com"
```
Sets your Git email globally for all repositories.

---

## 4. Set Default Git Editor
```bash
git config --global core.editor "notepad"
```
Sets Notepad as the default Git editor.

---

## 5. View Git Configurations
```bash
git config --list
```
Displays the current Git configuration settings.

---

## 6. Create a New Directory
```bash
mkdir git-hol
```
Creates a new folder named **git-hol**.

---

## 7. Move into the Directory
```bash
cd git-hol
```
Navigates into the **git-hol** directory.

---

## 8. Initialize Git Repository
```bash
git init
```
Initializes a new Git repository in the current folder.

---

## 9. Create a File
```bash
echo "Welcome to Git" > welcome.txt
```
Creates a text file named **welcome.txt** with the content *Welcome to Git*.

---

## 10. View File Contents
```bash
cat welcome.txt
```
Displays the contents of **welcome.txt**.

---

## 11. Stage File for Commit
```bash
git add welcome.txt
```
Adds **welcome.txt** to the staging area.

---

## 12. Commit File
```bash
git commit -m "Intial Commit"
```
Commits the staged file with the message *Initial Commit*.

---

## 13. Check Git Status
```bash
git status
```
Shows the current status of the working directory.

---

## 14. Add Remote Repository
```bash
git remote add origin "https://github.com/bhushan-rokade/git-hol1.git"
```
Links the local repository to the remote GitHub repository.

---

## 15. Rename Branch to `main`
```bash
git branch -M main
```
Renames the current branch from `master` to `main`.

---

## 16. Push to GitHub
```bash
git push -u origin main
```
Pushes the **main** branch to GitHub and sets it as the upstream branch.

---

## 17. Verify Remote URL
```bash
git remote -v
```
Displays the remote repository URLs for fetch and push.

---

## 18. View Final Git Configurations
```bash
git config --list
```
Lists all Git configuration settings again to confirm changes.

---
