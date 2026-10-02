const cards = [["カピバラ", "癒し・安心・ご縁", "のんびり、穏やかに。", "今日は安心できる人や場所を大切に。頑張るより、心地よさを選んでみよう。"], ["ナマケモノ", "休息・余白・マイペース", "ゆっくりでいいよ。", "すぐに答えを出さなくて大丈夫。今日は少し立ち止まって、自分のペースを取り戻そう。"], ["パンダ", "楽しみ・自由・自己肯定", "好きなことを楽しもう。", "今日は「やらなきゃ」より「やりたい」をひとつ優先してみて。"], ["コアラ", "安心・休む・心の安定", "安心できる場所へ。", "無理に動かなくても大丈夫。自分がほっとできる時間を作ろう。"], ["ラッコ", "流れ・柔軟性・楽しみ", "流れにまかせて。", "予定どおりにいかなくても大丈夫。今日は少し柔らかく、流れを楽しんでみよう。"], ["ハシビロコウ", "静観・見極め・自分のペース", "今は、じっと整える時。", "すぐに動かなくても大丈夫。じっくり見て、心が決まったら動けばいい。"]];
let busy = false;
let drawn = null;

const deck = document.getElementById("deck");
const card = document.getElementById("card");
const result = document.getElementById("result");
const hint = document.getElementById("hint");

function drawCard() {
  if (busy) return;
  busy = true;

  result.classList.remove("show");
  hint.textContent = "シャッフル中…";
  card.classList.remove("flipped");

  // 何枚か混ぜているように感じるための短い待ち時間
  setTimeout(() => {
    drawn = cards[Math.floor(Math.random() * cards.length)];

    const fileNames = ["capybara", "sloth", "panda", "koala", "otter", "shoebill"];
    const index = cards.findIndex(c => c[0] === drawn[0]);
    document.getElementById("cardImg").src = "images/" + fileNames[index] + ".jpg";
    document.getElementById("cardImg").alt = drawn[0];
    document.getElementById("cardName").textContent = drawn[0];
    document.getElementById("cardKeys").textContent = drawn[1];

    card.classList.add("flipped");
    hint.textContent = "今日のあなたのカード";

    document.getElementById("resultAnimal").textContent = drawn[0];
    document.getElementById("resultTitle").textContent = drawn[2];
    document.getElementById("resultBody").textContent = drawn[3];

    setTimeout(() => {
      result.classList.add("show");
      result.scrollIntoView({ behavior:"smooth", block:"center" });
      busy = false;
    }, 550);
  }, 700);
}

deck.addEventListener("click", drawCard);
document.getElementById("shuffle").addEventListener("click", drawCard);

document.getElementById("again").addEventListener("click", () => {
  window.scrollTo({ top:0, behavior:"smooth" });
  setTimeout(drawCard, 350);
});
