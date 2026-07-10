# Nexora Corporate Web

React와 TypeScript로 구현한 기업형 반응형 웹사이트입니다.

가상의 디지털 서비스 기업인 Nexora를 주제로, 실제 기업 홈페이지에서 자주 사용하는 화면 구성과 사용자 경험을 직접 설계했습니다. 특정 기업의 문구나 에셋을 사용하지 않았으며, 프로젝트에 포함된 콘텐츠와 UI는 모두 별도로 작성했습니다.

## 프로젝트 소개

Nexora Corporate Web은 기업 소개, 지속가능성, 비즈니스 포트폴리오, 미디어, 투자 정보 등 여러 콘텐츠를 하나의 홈페이지에 구성한 프론트엔드 프로젝트입니다.

단순한 정적 화면 구현에 그치지 않고 컴포넌트 분리, 데이터 기반 렌더링, 반응형 레이아웃, 테마 전환, 스크롤 모션 등 실제 서비스 개발에서 필요한 구조를 함께 적용했습니다.

## 사용 기술

- React
- TypeScript
- Vite
- CSS
- React Icons
- Git
- GitHub

## 주요 기능

- 데스크톱 및 모바일 반응형 레이아웃
- 스크롤 시 형태가 변경되는 플로팅 헤더
- 현재 섹션에 따른 상단 메뉴 활성 상태 표시
- 모바일 내비게이션 메뉴
- 라이트·다크 테마 전환
- 시스템 테마 감지 및 사용자 설정 저장
- 초기 렌더링 시 테마 깜빡임 방지
- 히어로 배경 애니메이션 및 플로팅 카드
- 스크롤 진행 상태 표시
- 섹션 진입 모션
- 데이터 기반 비즈니스 포트폴리오 카드
- 파트너 기술 스택 슬라이더
- 보도자료 및 SNS 콘텐츠 영역
- 투자 정보 카드
- 반응형 푸터
- 모션 감소 설정 대응

## 프로젝트 구조

```text
nexora-corporate-web/
├─ README.md
├─ docs/
│  └─ deployment.md
└─ web/
   ├─ public/
   ├─ src/
   │  ├─ assets/
   │  ├─ components/
   │  ├─ data/
   │  ├─ hooks/
   │  ├─ lib/
   │  ├─ styles/
   │  ├─ App.tsx
   │  ├─ App.css
   │  ├─ index.css
   │  └─ main.tsx
   ├─ index.html
   ├─ package.json
   └─ vite.config.ts
```

## 로컬 실행

저장소를 내려받은 뒤 `web` 디렉터리에서 의존성을 설치하고 개발 서버를 실행합니다.

```bash
cd web
npm install
npm run dev
```

터미널에 표시되는 로컬 주소로 접속해 화면을 확인할 수 있습니다.

## 프로덕션 빌드

```bash
cd web
npm run build
```

빌드가 완료되면 결과물이 `web/dist` 디렉터리에 생성됩니다.

## 빌드 결과 미리보기

```bash
cd web
npm run preview
```

프로덕션 빌드 결과를 로컬 환경에서 확인할 때 사용합니다.

## 배포

배포 설정과 확인 항목은 아래 문서에 정리되어 있습니다.

```text
docs/deployment.md
```

프론트엔드 배포 시 기본 설정은 다음과 같습니다.

```text
Base directory: web
Build command: npm run build
Publish directory: dist
```

## 작업 목적

기업형 웹사이트의 화면 구성과 콘텐츠 흐름을 직접 설계하고, 이를 유지보수하기 쉬운 React 구조로 구현하는 것을 목표로 진행한 프로젝트입니다.

컴포넌트 분리, 구조화된 데이터 관리, 반응형 스타일, 사용자 설정 저장, 접근성 속성, 프로덕션 빌드 확인까지 실제 개발 과정에서 필요한 작업을 단계별로 반영했습니다.
