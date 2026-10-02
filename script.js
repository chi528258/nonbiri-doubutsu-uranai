const cards = [
  {
    name: "カピバラ",
    keys: "癒し・安心・ご縁",
    title: "のんびり、穏やかに。",
    body: "今日は安心できる人や場所を大切に。頑張るより、心地よさを選んでみよう。",
    tip: "今日は、ひとつだけ「楽だな」と思えることを選んでみよう。"
  },
  {
    name: "ナマケモノ",
    keys: "休息・余白・マイペース",
    title: "ゆっくりでいいよ。",
    body: "すぐに答えを出さなくて大丈夫。今日は少し立ち止まって、自分のペースを取り戻そう。",
    tip: "今日は予定を詰めすぎず、何もしない時間も大切にしてみよう。"
  },
  {
    name: "パンダ",
    keys: "楽しみ・自由・自己肯定",
    title: "好きなことを楽しもう。",
    body: "今日は「やらなきゃ」より「やりたい」をひとつ優先してみて。",
    tip: "今日は、自分が思わず笑顔になることをひとつやってみよう。"
  },
  {
    name: "コアラ",
    keys: "安心・休む・心の安定",
    title: "安心できる場所へ。",
    body: "無理に動かなくても大丈夫。自分がほっとできる時間を作ろう。",
    tip: "今日は、ほっとできる場所や人との時間を少し長めにとってみよう。"
  },
  {
    name: "ラッコ",
    keys: "流れ・柔軟性・楽しみ",
    title: "流れにまかせて。",
    body: "予定どおりにいかなくても大丈夫。今日は少し柔らかく、流れを楽しんでみよう。",
    tip: "今日は「こうしなきゃ」をひとつ手放して、流れにまかせてみよう。"
  },
  {
    name: "ハシビロコウ",
    keys: "静観・見極め・自分のペース",
    title: "今は、じっと整える時。",
    body: "すぐに動かなくても大丈夫。じっくり見て、心が決まったら動けばいい。",
    tip: "今日は焦って答えを出さず、自分の気持ちをゆっくり確認してみよう。"
  }
];

const fileNames = [
  "capybara",
  "sloth",
  "panda",
  "koala",
  "otter",
  "shoebill"
];

let busy = false;
let drawn = null;

const deck = document.getElementById("deck");
const card = document.getElementById("card");
const result = document.getElementById("result");
const hint = document.getElementById("hint");
const shuffleButton = document.getElementById("shuffle");
const againButton = document.getElementById("again");


// ==============================
// カードを1枚引く
// ==============================
function drawCard() {

  if (busy) return;

  busy = true;

  result.classList.remove("show");

  hint.textContent = "シャッフル中…";

  card.classList.remove("flipped");

  setTimeout(() => {

    const index = Math.floor(Math.random() * cards.length);

    drawn = cards[index];

    // カード画像
    const cardImg = document.getElementById("cardImg");

    cardImg.src = fileNames[index] + ".jpg";

    cardImg.alt = drawn.name;

    // カード表面の文字
    document.getElementById("cardName").textContent = drawn.name;

    document.getElementById("cardKeys").textContent = drawn.keys;

    // カードをめくる
    card.classList.add("flipped");

    hint.textContent = "今日のあなたのカード";


    // ==============================
    // 結果を表示
    // ==============================

    document.getElementById("resultAnimal").textContent =
      drawn.name;

    document.getElementById("resultTitle").textContent =
      drawn.title;

    document.getElementById("resultBody").textContent =
      drawn.body;


    // 動物ごとの「今日の一言」
    document.querySelector(".tip").innerHTML =
      `🌱 <strong>今日の一言</strong><br>${drawn.tip}`;


    // ==============================
    // 1回引いたらシャッフルボタンを消す
    // ==============================

    shuffleButton.style.display = "none";


    setTimeout(() => {

      result.classList.add("show");

      result.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      busy = false;

    }, 550);

  }, 700);
}



// ==============================
// ホーム画面に戻る
// ==============================
function returnHome() {

  if (busy) return;

  busy = true;


  // 結果を消す
  result.classList.remove("show");


  // カードを裏面に戻す
  card.classList.remove("flipped");


  // カードの中身をリセット
  document.getElementById("cardImg").src = "";

  document.getElementById("cardImg").alt = "";

  document.getElementById("cardName").textContent = "";

  document.getElementById("cardKeys").textContent = "";


  // シャッフルボタンを復活
  shuffleButton.style.display = "";


  // 最初の表示に戻す
  hint.textContent =
    "カードをタップして、今日の1枚を引いてみよう";


  // ページの一番上へ戻る
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  setTimeout(() => {

    busy = false;

  }, 600);
}



// ==============================
// カードをタップ
// ==============================

deck.addEventListener("click", drawCard);



// ==============================
// シャッフルボタン
// ==============================

shuffleButton.addEventListener("click", drawCard);



// ==============================
// 「もう一度、1枚引く」
// ==============================

againButton.addEventListener("click", returnHome);
