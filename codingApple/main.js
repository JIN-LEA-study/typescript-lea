"use strict";
let 제목 = document.querySelector("#title");
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
// Html narrowing 방법2 instanceof (가장 많이 사용)
let 제목2 = document.querySelector("#title");
if (제목2 instanceof Element) {
    제목2.innerHTML = "반가워요";
}
// 방법3 as Element
let 제목3 = document.querySelector("#title");
제목3.innerHTML = "반가워요";
// 방법4 오브젝트에 붙이는 ?.
let 제목4 = document.querySelector("#title");
if (제목4 === null || 제목4 === void 0 ? void 0 : 제목4.innerHTML) {
    제목4.innerHTML = "반가워요";
}
