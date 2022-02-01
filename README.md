# todolist

## Pre-requisite

- node@16.13.2
- yarn@3.1.1

1. nvm을 설치합니다.(nvm으로 node를 설치가 필수입니다.)
2. 해당 레포를 내려 받은 뒤 터미널에서 node 버전을 세팅해줍니다.
   ```sh
   nvm install 16.13.2
   nvm use
   ```
3. yarn v2+를 사용하기 위해 corepack을 enable 해줍니다.
   ```sh
   corepack enable
   ```
4. [vscode extension ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)를 설치합니다
5. vscode sdk를 설치합니다.
   ```sh
   yarn dlx @yarnpkg/sdks vscode
   ```
6. Show All Commands(cmd+shift+p) 로 타입스크립트 버전을 워크스페이스의 버전으로 사용합니다.

## 협업 방식

### Commit convention

[Udacity Git Commit Message Style Guide](http://udacity.github.io/git-styleguide/)을 따릅니다.

### Workflow

[Github flow](https://docs.github.com/en/get-started/quickstart/github-flow)를 따릅니다.

### Branch strategy

[Git flow](https://nvie.com/posts/a-successful-git-branching-model/)를 참고로 하되
단순히 master, feature로 나눕니다.

### Branch naming

이 프로젝트는 mono repo 이고, 여러 package로 이루어져 있습니다.
feature 브랜치를 작성할 땐 package명이 일종의 namespace가 되게 합니다.

```
{package-name | "all"}/i{issue-number}
{package-name | "all"}/{feature-name}

i.e.
# 패키지/이슈번호
web/i321
# 패키지/기능이름
api/add-signup-mutation
# 특정 패키지만의 작업이 아닐 경우
all/add-templates
```

### Merge convention

- master 로 merge할 땐 squash-merge 합니다.
- feature 브랜치로 merge할 땐 merge a commit 합니다.
