# street-manager-client

Contains NodeJS Client that is used to communicate with the `street-manager-api` project.

It is used within the `street-manager-frontend` project.

## To make changes to this repo

First, make sure that you have the following shell scripts. If not, ask a member of the dev team to provide them:
* make-local-changes.sh
* finish-local-changes.sh

Place these on the same level as your street-manager repos ( [see here]([https://github.com/departmentfortransport/street-manager/wiki/dft-street-manager-developer-environment-setup-and-on-boarding#cloning-development-repos) for example )

Then:
1. Run `make-local-changes.sh` - this will replace all references to the `street-manager-client` dependency in any `package.json` that references it with a local filepath i.e. `file:../street-manager-client`
2. Code your changes
3. Run `npm run build` to publish your latest changes
4. To use the latest changes in another repo i.e. `street-manager-frontend`, in the desired repo first run `npm install` to pull in the latest changes and then run `npm run build` to build your project
5. In the repo where you have made your changes, commit your changes. This will assign your latest working version a _commit hash_
6. Run `finish-local-changes.sh` to revert all references to the `street-manager-client` dependency in any `package.json` that references it with a Github URL plus the latest commit hash (generated in part 5)
7. Commit and push the updated `package.json` of each repo and open a Pull Request against each repo. Ensure that the merging of these Pull Requests are co-ordinated to avoid any branches becoming out of sync.