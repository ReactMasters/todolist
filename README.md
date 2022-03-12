# todolist

## 실행 방법

- node@16.13.2

1. nvm을 설치합니다.(nvm으로 node를 설치가 필수입니다.)
2. 해당 레포를 내려 받은 뒤 터미널에서 node 버전을 세팅해줍니다.
   ```sh
   nvm install 16.13.2
   nvm use
   ```
3. 의존성 패키지를 설치해줍니다
   ```sh
   yarn insall
   ```
4. `packages/api/.env` 에 mongodb connection url(\*secret)을 넣어줍시다.
   ```
   MONGODB_URL={secret-connection-url}
   ```
5. 프로젝트 루트에서 `yarn dev`로 api와 web을 동시 실행합니다.
   ```sh
   yarn dev
   ```

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
- Merge commit의 header는 "[package] 내용"의 형식을 따릅니다.
- Merge Request가 approve 되면 MR을 올린 개발자가 직접 merge, test 후 merge 된 브랜치는 삭제합니다.
