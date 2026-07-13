# Nexora Web

Nexora Corporate Web의 프론트엔드 애플리케이션입니다.

React와 TypeScript를 기반으로 구성했으며, Vite를 개발 서버와 빌드 도구로 사용합니다. 이 문서는 `web` 디렉터리에서 개발 환경을 실행하고 빌드하는 방법을 정리합니다.

## 사용 기술

- React
- TypeScript
- Vite
- CSS
- React Icons
- i18next
- Oxlint

## 요구 환경

Vite 실행을 위해 아래 버전 이상의 Node.js가 필요합니다.

```text
Node.js 20.19 이상
또는
Node.js 22.12 이상
```

현재 버전은 다음 명령으로 확인할 수 있습니다.

```bash
node -v
npm -v
```

## 의존성 설치

저장소 루트에서 `web` 디렉터리로 이동한 뒤 의존성을 설치합니다.

```bash
cd web
npm install
```

## 개발 서버 실행

```bash
npm run dev
```

터미널에 표시되는 로컬 주소로 접속하면 개발 화면을 확인할 수 있습니다.

기본 주소는 보통 다음과 같습니다.

```text
http://localhost:5173
```

## 프로덕션 빌드

```bash
npm run build
```

빌드가 완료되면 결과물이 아래 디렉터리에 생성됩니다.

```text
web/dist
```

## 빌드 결과 미리보기

```bash
npm run preview
```

프로덕션 빌드 결과를 로컬 환경에서 확인할 때 사용합니다.

## 코드 검사

```bash
npm run lint
```

Oxlint를 사용해 코드 스타일과 주요 오류를 검사합니다.

## 주요 디렉터리

```text
web/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ data/
│  ├─ hooks/
│  ├─ i18n/
│  ├─ lib/
│  ├─ styles/
│  ├─ App.tsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## Vite 및 React 설정

현재 프로젝트는 Vite의 React 구성을 사용합니다.

공식 플러그인은 다음 두 가지가 있습니다.

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc)

이 프로젝트에서는 현재 설정된 플러그인을 그대로 사용합니다. 플러그인 변경은 빌드 결과와 개발 환경을 확인한 뒤 진행해야 합니다.

## React Compiler

React Compiler는 현재 활성화하지 않았습니다.

프로젝트 규모와 빌드 성능을 고려해 기본 React 및 TypeScript 구성으로 유지하고 있습니다. React Compiler를 도입할 경우에는 공식 문서를 참고해 별도 검증 후 적용합니다.

- [React Compiler 설치 안내](https://react.dev/learn/react-compiler/installation)

## Oxlint 설정 확장

현재 저장소에는 기본 Oxlint 설정이 포함되어 있습니다.

타입 정보를 활용한 규칙이 필요하다면 `oxlint-tsgolint`를 추가하고 `.oxlintrc.json`을 다음과 같이 확장할 수 있습니다.

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": [
      "warn",
      {
        "allowConstantExport": true
      }
    ]
  }
}
```

전체 규칙은 Oxlint 공식 문서에서 확인할 수 있습니다.

- [Oxlint 규칙 문서](https://oxc.rs/docs/guide/usage/linter/rules)

## 상위 문서

프로젝트 전체 소개, 주요 기능, 화면 구성과 배포 정보는 저장소 루트의 `README.md`에서 확인할 수 있습니다.
