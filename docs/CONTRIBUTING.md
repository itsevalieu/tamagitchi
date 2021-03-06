# How to contribute

[[submitting-features-or-changes]]
Submitting features or changes

```

If you've been added as a collaborator, clone the project to your local
machine:

....
git clone https://github.com/{project-owner}/{project-name}.git
....

Otherwise, fork the project
(https://github.com/\{project-owner}/\{project-name}/fork), then clone
your forked project to your local machine:

....
git clone https://github.com/{your-username}/{project-name}.git
....

Checkout `dev` branch to create a new feature branch. Use the branch
naming scheme, `dash-separated-feature-title-issue-no`:

....
git checkout dev
git checkout -b issue#42-add-logarithms
....

Stage and commit your changes with a present tense commit message -
preferably one that's no more than 50 characters in length and all
lowercased (unless warranted, otherwise):

....
git add <files-to-be-staged>
git commit -m "add logarithms"
....

Push new feature branch to origin:

....
git push origin issue#42-add-logarithms
....

If you already have an in-progress feature branch in origin and your
`dev` branch becomes out of date, fetch and rebase your working branch
off `origin/dev`, then force push with lease:

___________________________________________________________________________________________________________________________________________________
Note: if you forked your project, you will first need to
link:#Updating-the-origin-of-your-forked-project[update the origin of
your forked project]
___________________________________________________________________________________________________________________________________________________

....
git fetch origin
git rebase origin/dev
git push origin issue#42-add-logarithms --force-with-lease
....

[[updating-the-origin-of-your-forked-project]]
Updating the origin of your forked project
```

Update the origin of your forked project by first configuring a remote
that points to the original repository which we will call `upstream`:

....
git remote add upstream https://github.com/{project-owner}/{project-name}.git
....

Fetch all changes from `upstream`, checkout `dev` branch, then rebase
off `upstream/dev` to update your local `dev` branch:

....
git fetch upstream
git checkout dev
git rebase upstream/dev
....

Force push changes to your forked origin:

....
git push -f origin dev
....

[[submitting-a-pull-request-pr]]
Submitting a pull request (PR)

```

1.  Submit a PR on GitHub, by setting your feature branch as the `head`
branch and `dev` as the `base` branch.
2.  Connect PR to its corresponding issue that it closes.
3.  Assign a reviewer.
4.  Reviewer will delete feature branch once it's been merged.

[[coming-soon...]]
Coming soon...
~~~~~~~~~~~~~~

Continuous Integration (CI) will be setup to verify whether `dev` can be
merged into `master`, to ensure only commits with working builds remain
in the `master` branch.
```
