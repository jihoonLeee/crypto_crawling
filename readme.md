# 거래소 공지사항 크롤링 서버

이 프로젝트는 Node.js와 Puppeteer를 이용해 거래소 공지사항과 관련 블로그의 정보를 크롤링하는 서버를 구축하는 것입니다. Redis와 Queue를 활용해 공지사항이 새로 업데이트 될 때마다 크롤링이 실행되도록 하는 잡 스케줄러를 만들었습니다.

## 주요 기능

1. 거래소 공지사항과 관련 블로그 크롤링
2. 크롤링한 내용 저장
3. 공지사항 업데이트 감지 및 크롤링 재실행

## 사용 기술

* Node.js
* Puppeteer
* Redis
* Queue

## 설치 및 실행 방법

1. 프로젝트를 클론합니다: `git clone https://github.com/your_username/your_project_name.git`
2. 디렉토리로 이동합니다: `cd your_project_name`
3. 필요한 패키지를 설치합니다: `npm install`
4. 서버를 실행합니다: `npm start`
