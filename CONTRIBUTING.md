## Release Strategy
Wavefront strives to avoid breaking changes, although there is always a possibility of breaking changes occuring between consecutive major versions. Any breaking changes will feature 
work-around documentation to solve any migration conflicts.

### Patches
- For the latest major version, we apply patches to it's latest minor version.
- For previous major releases (not the latest), Wavefront will only apply patches to the lastest minor version if required.
- Typically, we will only apply fixes to the two last major versions, in rarer cases we may apply fixes to previous major versions.

### Implementers
Developers using the library should always aim to upgrade to the latest stable version. If this is not possible, they should 
upgrade to the latest minor and patch version of their desired major version.

### Trailing Release Branches
The purpose of this strategy is to prevent accidentally introducing unwarranted new changes to older releases.
- [main](https://github.com/julienetie/wavefront/tree/main) represents the active branch. Tags are cut onto the main branch. 
- When a new major release is ready, a trailing release branch is created to represent the previous release.
- A fix to a previous major release may or may not be merged into later releases, as the fix may adhere to breaking changes.

### Releases
Below are strategies for feature releases:
- Alpha: An Internal testing branch (No tags).
- Beta: A public pre-release, may contain bugs, and may still be under development.
- Standard release: Considered stable and production-ready.

### Branches
Branches are: 

- Rebased to keep up to date
- Squashed and merged into main when finished

There are 3 types of branches:
- feat: Feature branch
- fix: Bugfix
- release: Trailing release branch

Branches should not be deleted until the feature or fix is known to be stable.
Release branches are not deleted.

### Tags
Release tags follow [semver](https://semver.org/) versioning.
