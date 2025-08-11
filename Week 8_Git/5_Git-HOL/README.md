# Git HOL 5

## Objectives

- Demonstrate how to commit and push changes to a remote Git repository.

## Steps Performed

1. **Created README.md file**
    ```bash
    echo "# GitDemo5" > README.md
    ```

2. **Added the file to the staging area**
    ```bash
    git add README.md
    ```

3. **Committed the file with a message**
    ```bash
    git commit -m "added readme.md"
    ```

4. **Pushed the changes to the `main` branch of the remote repository**
    ```bash
    git push origin main
    ```

## Output Logs

```
[main 4a21a68] added readme.md
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 285 bytes | 285.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/bhushan-rokade/git-hol1.git
   30a8bad..4a21a68  main -> main
```

## Conclusion

In this hands-on lab, we successfully created a new README.md file, committed it to the local repository, and pushed the changes to the remote GitHub repository.
