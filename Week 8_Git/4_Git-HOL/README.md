# Git HOL 4

This document explains the Git commands executed using two branches: `main` and `GitWork`.  
The workflow includes creating branches, adding files, committing changes, comparing branches, resolving merge conflicts, and pushing changes to a remote repository.

---

## 1. Create and Switch to a New Branch

```bash
git checkout -b "GitWork"
```

- Creates a new branch named `GitWork` and switches to it immediately.
- Useful for working on a new feature without affecting the `main` branch.

---

## 2. Create a New File and Add Content

```bash
echo "<greeting>Hello from GitWork branch</greeting>" > hello.xml
echo "<greeting>Hello again from GitWork</greeting>" >> hello.xml
```

- Creates a file `hello.xml` and writes two lines of XML content.
- `>` creates/overwrites a file.
- `>>` appends to the file.

---

## 3. Stage and Commit the File

```bash
git add hello.xml
git commit -m "Add hello.xml in GitWork branch"
```

- `git add` stages the file for the next commit.
- `git commit` saves the staged changes with a message.

---

## 4. Switch to Main Branch

```bash
git checkout main
```

- Switches from `GitWork` to the `main` branch.

---

## 5. Create a Different Version of the File in Main

```bash
echo "<greeting>Hello from master branch</greeting>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml in master branch"
```

- Overwrites `hello.xml` with new content for the `main` branch.
- Stages and commits the change.

---

## 6. Compare Changes Between Branches

```bash
git diff main..GitWork
```

- Shows the difference between the two branches.
- Here, it displayed the different XML content in `hello.xml`.

---

## 7. Merge GitWork into Main

```bash
git merge GitWork
```

- Attempts to merge the `GitWork` branch into `main`.
- A **merge conflict** occurred because `hello.xml` had changes in both branches.

---

## 8. Resolve Merge Conflicts Using a Merge Tool

```bash
git mergetool
```

- Opens the configured merge tool (P4Merge in this case) to manually resolve conflicts.
- After resolving, the changes are saved and committed.

---

## 9. Push the Branch to Remote

```bash
git push --set-upstream origin GitWork
```

- Pushes the `GitWork` branch to the remote repository (`origin`) and sets it as the upstream branch.

---

## 10. Ignore Merge Backup Files

```bash
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Ignore merge backup files"
git push
```

- Updates `.gitignore` to ignore files with `.orig` extension.
- Commits and pushes the change.

---

## 11. Delete the Local Branch

```bash
git switch main
git branch -d GitWork
```

- Switches to `main`.
- Deletes the `GitWork` branch locally (safe delete because the work was pushed to remote).

---

## 12. View Commit History

```bash
git log --oneline --graph --decorate
```

- Displays a simplified commit history with branch and merge visualization.

---

## Summary of the Workflow

1. Created a new branch (`GitWork`).
2. Made changes and committed them.
3. Created a different version of the same file in `main`.
4. Compared branches using `git diff`.
5. Merged branches and resolved conflicts.
6. Pushed changes to the remote repository.
7. Updated `.gitignore`.
8. Deleted the local feature branch after pushing.
9. Viewed the commit history.

This workflow demonstrates **branching**, **merging**, **conflict resolution**, and **collaboration** using Git.
