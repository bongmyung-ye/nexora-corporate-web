# 배포 가이드

Nexora Corporate Web 프론트엔드의 로컬 실행, 프로덕션 빌드, 배포 설정을 정리한 문서입니다.

## 프로젝트 구조

프론트엔드 애플리케이션은 `web` 디렉터리에 있습니다.

```text
nexora-corporate-web/
├─ docs/
│  └─ deployment.md
├─ web/
│  ├─ public/
│  ├─ src/
│  ├─ package.json
│  └─ vite.config.ts
└─ README.md
```

## 로컬 실행

저장소 루트에서 `web` 디렉터리로 이동한 뒤 의존성을 설치하고 개발 서버를 실행합니다.

```bash
cd web
npm install
npm run dev
```

개발 서버는 Vite를 통해 실행됩니다. 터미널에 표시되는 로컬 주소로 접속해 화면을 확인할 수 있습니다.

## 프로덕션 빌드

```bash
cd web
npm run build
```

빌드가 완료되면 결과물이 다음 경로에 생성됩니다.

```text
web/dist
```

## 빌드 결과 미리보기

프로덕션 빌드 결과를 로컬에서 확인할 때 사용합니다.

```bash
cd web
npm run preview
```

터미널에 표시되는 주소로 접속해 실제 배포 환경에 가까운 결과를 확인할 수 있습니다.

## 배포 설정

배포 서비스에서는 `web` 디렉터리를 프론트엔드 프로젝트의 기준 경로로 설정합니다.

### Netlify

```text
Base directory: web
Build command: npm run build
Publish directory: dist
```

### Vercel

```text
Root Directory: web
Build Command: npm run build
Output Directory: dist
```

## 배포 전 확인

- `npm run build`가 오류 없이 완료되는지 확인
- 필요한 경우 `npm run preview`로 빌드 결과 확인
- 상단 메뉴와 섹션 이동 링크 확인
- 라이트·다크 테마 전환 확인
- 새로고침 후 선택한 테마가 유지되는지 확인
- 데스크톱과 모바일 화면의 레이아웃 확인
- 외부 링크가 올바른 주소로 연결되는지 확인