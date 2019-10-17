## Cloning a repository
`git clone <link_to_repo>`

## Pushing your local changes
`git add <file_name>` or `git add .` to stage (add) all changes

`git commit -m “your message”` (required to have a commit message)

`git push`

## Pulling the latest changes
`git fetch` to fetch changes or to fetch a new branch

`git pull` to fetch and merge changes

## Branching
`git checkout -b <branch_name>` to create a branch (automatically switches to it)

`git checkout <branch_name>` to switch to a branch

`git push origin <branch_name>` to push a new branch with no edits

## Pull Requests: used to keep the dev and master branches separate, ensures that the master branch has the latest working code
`git push origin <branch_name>`

## Deleting a branch:
`git push --delete <remote_name> <branch_name>` remote name is usually origin

## Merging
`git merge <branch_name>` make sure you’re on the branch you’re trying to merge into

## If you don’t want to push your changes just yet but want to pull the latest code:
`git stash`

`git pull`

`git stash apply`

## Resetting
`git revert <commit>` to revert to a previous commit

`git reset --soft <commit>` to reset to a previous commit

`git reset --hard` to undo your local changes and reset to the latest commit you pulled