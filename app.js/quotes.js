const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "산다는 것 그것은 치열한 전투이다",
    author: "로망로랑",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후 에 지구 한바퀴를 돌 수 있다",
    author: "사무엘 존슨",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "피할 수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해",
    author: "찰리 채플린",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
    author: "괴테",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다, 반드시 실천하여야 한다",
    author: "이소룡",
  },
  {
    quote: "최고에 도달하려면 최저에서 시작하라",
    author: "P.시루스",
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다",
    author: "하버트 개서",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
