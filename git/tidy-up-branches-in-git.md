# Tidy up local and remote branches in git

## Your remote tracking branches

This cleans up the big origin list you get when you do `git branch --remote`

```
git remote prune origin
```

## Local branches that have been merged

This removes your local branches that have been merged into the *current* branch.

```
git branch --merged | grep -v \* | xargs git branch -D
```


## Branches *on* the remote

Remove branches that have been merged on the remote (skipping `master`)

```
git branch -r --merged | grep -v master | sed 's/origin\///' | xargs -n 1 git push --delete origin
```

Or if you use `main`:

```
git branch -r --merged | grep -v main | sed 's/origin\///' | xargs -n 1 git push --delete origin
```
