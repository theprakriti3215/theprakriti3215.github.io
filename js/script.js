// メニュー開閉
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("slide-menu");
const closeBtn = document.querySelector(".close-btn");

menuIcon.onclick = () => menu.classList.add("open");
closeBtn.onclick = () => menu.classList.remove("open");

// メニューリンククリックで閉じる
document.querySelectorAll("#slide-menu a").forEach(link => {
    link.onclick = () => menu.classList.remove("open");
});

// ---- ピックアップに使うデータ ----
const songs = [
  {
    jacket: "images/fire-flower.jpg",
    quote1: "花火大会よりも　ハードディスク",
    quote2: "消える前に　バックアップkiss",
    title: "fire flower",
    link: "tracks/fire-flower.html"
  },
  {
    jacket: "images/senjoukousuitai.jpg",
    quote1: "たこ焼きの数え方　知ってる？",
    quote2: "得意げにキミはわらう",
    title: "線上降水帯",
    link: "senjoukousuitai.html"
  },
  {
    jacket: "images/aromajewel.jpg",
    quote1: "ラムネを開ける　ポン",
    quote2: "シュワシュワあふれ　あふれ　あふれ",
    title: "alomajewel",
    link: "tracks/alomajewel.html"
  },
  {
    jacket: "images/friends-italian.jpg",
    quote1: "how italian is your italian？",
    quote2: "your italian is really italian ？",
    title: "friend's italian",
    link: "tracks/friends-italian.html"
  }
];

// ---- ランダムで2曲取り出す ----
function getRandomSongs(num) {
  const copy = [...songs];
  return [...Array(num)].map(() => {
    const index = Math.floor(Math.random() * copy.length);
    return copy.splice(index, 1)[0];
  });
}

const pickupContainer = document.getElementById("pickup-container");
const picked = getRandomSongs(2);

picked.forEach((song, i) => {
  const direction = i % 2 === 0 ? "pickup-left" : "pickup-right";

  const item = document.createElement("a");
  item.href = song.link;
  item.className = `pickup-item ${direction}`;
  item.style.textDecoration = "none";  // 下線消す
  item.style.color = "inherit";        // 黒文字を引き継ぐ

  item.innerHTML = `
    <img src="${song.jacket}">
    <div class="pickup-text">
      <p>${song.quote1}</p>
      <p>${song.quote2}</p>
      <div class="pickup-from">from ${song.title}</div>
    </div>
  `;

  pickupContainer.appendChild(item);
});
