# Solution

## 0. 기술 스택

- Typescript / Emotion / RTK

## 1. 상태 관리

- Resource(Url, Image) 의 데이터를 RTK를 통해 글로벌 상태로 관리했습니다.
- 리소스의 삭제, 수정은 redux의 dispatch 함수를 통해 이루어집니다.

## 2. 전체 리소스 관리

- Url과 Image는 수정이 가능하며 각각 input 태그와 dropzone을 이용해 리소스를 수정할 수 있게 만들었습니다.

## 2. image 리소스 관리

- 'react-dropzone' library를 사용해 이미지를 업로드 할 수 있게 만들었습니다.
- 300 ~ 1000ms의 랜덤 딜레이는 async/await로 구현했습니다.

## 3. validation

- src/utils/randomUtils.js의 getRandomValidation 함수를 통해 리소스의 등록 성공률을 구현했습니다.

## 4. 토스트

- 'react-toastify' library를 사용해 구현했습니다.
