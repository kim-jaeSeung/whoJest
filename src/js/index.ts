import apiFunc from "../js/api/api.js";
import { CareerData } from "../js/interface.js";
import { carrerInfo } from "../js/interface.js";
import { certificateData } from "../js/interface.js";
import { introduce } from "../js/interface.js";
import { portfolio } from "../js/interface.js";
import { training } from "../js/interface.js";
// console.log(apiFunc);

//* 경력
apiFunc<CareerData>("career").then((data) => {
  console.log("경력", data);
});

apiFunc<carrerInfo>("careerInfo").then((data) => {
  console.log("경력기술서", data);
});

apiFunc<certificateData>("certificate").then((data) => {
  console.log("자격증", data);
});

apiFunc<introduce>("introduce").then((data) => {
  console.log("자소서", data);
});

apiFunc<portfolio>("portfolio").then((data) => {
  console.log("포트폴리오", data);
});

apiFunc<training>("training").then((data) => {
  console.log("경력이수", data);
});

const mainElement = document.querySelector("main"); // main 태그
const sections = document.querySelectorAll("section[id]"); // id가 있는 모든 section
const navLinks = document.querySelectorAll("nav ul li a"); // 모든 a 태그

if (mainElement) {
  // main 태그에서 스크롤 이벤트 감지
  mainElement.addEventListener("scroll", () => {
    let currentSection = "";

    // 현재 스크롤 위치와 각 섹션의 위치를 비교
    sections.forEach((section) => {
      const sectionElement = section as HTMLElement;
      const sectionTop = sectionElement.offsetTop - mainElement.offsetTop; // main 위치
      const sectionHeight = sectionElement.offsetHeight;

      if (mainElement.scrollTop >= sectionTop - sectionHeight / 3) {
        currentSection = sectionElement.getAttribute("id") || "";
      }
    });

    // 현재 섹션에 해당하는 a 태그에 스타일 적용
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}
