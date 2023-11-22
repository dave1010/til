# Tidy up remote branches in git

Remove branches that have been merged on the remote (skipping `master`)

    git branch -r --merged | grep -v master | sed 's/origin\///' | xargs -n 1 git push --delete origin

Or if you use `main`:

    git branch -r --merged | grep -v main | sed 's/origin\///' | xargs -n 1 git push --delete origin
