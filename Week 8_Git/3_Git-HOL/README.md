# Executed Git Commands and Explanations

This file contains only the commands you executed during the branching & merging session and a short explanation for each command.

---

### 1. Create and switch to a new branch
```bash
git checkout -b GitNewBranch
```
Creates a new branch named `GitNewBranch` and switches to it immediately.

---

### 2. List local and remote branches
```bash
git branch -a
```
Shows all local branches and remote-tracking branches. The current branch is marked with `*`.

---

### 3. Create a new file in the branch
```bash
echo "new file for GitNewBranch" > newfile.txt
```
Creates `newfile.txt` with the given content in the current directory.

---

### 4. Check repository status
```bash
git status
```
Displays the current branch and shows untracked, staged, and modified files.

---

### 5. Stage changes
```bash
git add .
```
Stages all new and modified files in the repository (except those ignored by `.gitignore`).

---

### 6. Commit staged changes
```bash
git commit -m "1st commit to new branch"
```
Creates a commit in `GitNewBranch` with the provided message.

---

### 7. Push branch to remote and set upstream
```bash
git push --set-upstream origin GitNewBranch
```
Pushes the local branch to the remote `origin` and sets `origin/GitNewBranch` as the upstream for easier future pushes/pulls.

---

### 8. Switch back to the main branch
```bash
git switch main
```
Switches the working tree to the `main` branch (use `master` if your repo uses `master`).

---

### 9. Show textual differences between branches
```bash
git diff main..GitNewBranch
```
Displays the line-by-line differences between the `main` branch and `GitNewBranch` in the terminal.

---

### 10. Configure P4Merge as the merge tool
```bash
git config --global merge.tool p4merge
git config --global mergetool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
git config --global mergetool.keepBackup false
```
Sets P4Merge as the merge tool, tells Git where `p4merge.exe` is located, and disables creation of backup `.orig` files after merge resolution.

---

### 11. Launch the configured merge tool (if conflicts exist)
```bash
git mergetool
```
Opens the configured merge tool to resolve conflicts. If there are no conflicts, Git reports `No files need merging`.

---

### 12. Configure P4Merge as the diff tool
```bash
git config --global diff.tool p4merge
git config --global difftool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
```
Enables using P4Merge for visual diffs.

---

### 13. Open a directory-style visual diff between branches
```bash
git difftool --dir-diff main..GitNewBranch
```
Launches P4Merge showing the files that differ between the two branches in a side-by-side view.

---

### 14. Merge the branch into main with a merge commit
```bash
git merge --no-ff GitNewBranch -m "Merge GitNewBranch into main"
```
Merges `GitNewBranch` into `main`, creating an explicit merge commit (even if fast-forward is possible).

---

### 15. Delete the local branch after merging
```bash
git branch -d GitNewBranch
```
Deletes the local branch. This is safe if the branch was already merged; otherwise Git warns and refuses.

---

### 16. Delete the remote branch
```bash
git push origin --delete GitNewBranch
```
Removes the branch from the remote repository (`origin`).

---

### 17. Final status check
```bash
git status
```
Shows working tree state and whether local `main` is ahead/behind the remote.

---

### 18. List branches again to confirm cleanup
```bash
git branch -a
```
Confirms the remaining local and remote branches after deletion.
