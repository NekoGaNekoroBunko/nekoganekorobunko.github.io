/* ============================================================
   ねこが寝転文庫（Neko Ga NekoroBunko） script.js
   ★ 普段いちばん編集するのは、すぐ下の「商品データ」です。
   ★ 商品を増やす：{ ... } を1セットコピーして追加
   ★ 商品を減らす：不要な { ... } を1セット削除
   ============================================================ */

// ==================== ★商品データ：ここを編集★ ====================
// 商品はここを書き換えるだけで増減できます。
// image に画像ファイルのパス、url に販売ページのURLを入れてください。
// { name: "", price: "400円", tag: "魔王", credit: "絵：よしん", image: "images/.jpg", url: "" },
const goods = [
  { name: "徳利とおちょこ", price: "徳利1200円/おちょこ600円/セット2200円", tag: "酒器", credit: "絵：ぽこ", image: "images/徳利とおちょこ.jpg", url: "#" },
  { name: "酒はほどほどに Tシャツ", price: "2500円", tag: "酒ほど猫", credit: "絵：ぽこ", image: "images/酒はほどほどにTシャツ.jpg", url: "https://yoxinsyoten.booth.pm/items/8057518" },
  { name: "酒はほどほどに猫 アクリルスタンド", price: "800円", tag: "酒ほど猫", credit: "絵：ぽこ", image: "images/酒はほどほどに猫アクリルスタンド.jpg", url: "#" },
  { name: "買える「顰蹙」シリーズ", price: "1000円", tag: "文字グッズ", credit: "字：ぽこ", image: "images/買える「顰蹙」シリーズ.jpg", url: "https://yoxinsyoten.booth.pm/items/8489512" },
  { name: "借りられる「猫」", price: "1000円", tag: "文字グッズ", credit: "写真：ぽこ", image: "images/借りられる「猫」.jpg", url: "https://yoxinsyoten.booth.pm/items/8489612" },
  { name: "喜怒哀楽ねこちゃんステッカー<br>5種詰め合わせ", price: "500円", tag: "喜怒哀楽ねこちゃん", credit: "絵：ぽこ", image: "images/喜怒哀楽ねこちゃんステッカー5種詰め合わせ.jpg", url: "https://poco0508.booth.pm/items/8560275" },
  { name: "猫は絶好調", price: "500円", tag: "月餅", credit: "写真：ぽこ", image: "images/ねこは絶好調.jpg", url: "#" },
  { name: "ポストカード4種セット", price: "400円", tag: "ダジャレ", credit: "写真：ぽこ", image: "images/ポストカード4種セット.png", url: "https://poco0508.booth.pm/items/8057329" },
  { name: "アクリルキーホルダー(カステラ)", price: "300円", tag: "カステラ", credit: "絵：ぽこ", image: "images/アクリルキーホルダー(カステラ).png", url: "https://poco0508.booth.pm/items/8057421" },
  { name: "アクリルキーホルダー(月餅)", price: "300円 在庫なし", tag: "月餅", credit: "絵：ぽこ", image: "images/アクリルキーホルダー(月餅).png", url: "https://poco0508.booth.pm/items/8057381" },
  { name: "カステラ(ねこ)アクスタ", price: "300円", tag: "カステラ", credit: "絵：ぽこ", image: "images/カステラ(ねこ)アクスタ.png", url: "https://poco0508.booth.pm/items/8560444" },
  { name: "月餅(ねこ)アクスタ", price: "300円 在庫なし", tag: "月餅", credit: "絵：ぽこ", image: "images/月餅(ねこ)アクスタ.png", url: "https://poco0508.booth.pm/items/8560319" },
  { name: "イラスト本「お酒と猫の女の子」", price: "800円", tag: "お酒と猫の", credit: "絵：よしん", image: "images/イラスト本「お酒と猫の女の子」.jpg", url: "https://yoxinsyoten.booth.pm/items/8057459" },
  { name: "ワインと猫の女の子 クリアしおりセット", price: "200円", tag: "お酒と猫の", credit: "絵：よしん", image: "images/ワインと猫の女の子 クリアしおりセット.jpg", url: "https://yoxinsyoten.booth.pm/items/8187556" },
  { name: "お酒と猫のフレークシール", price: "500円", tag: "お酒と猫の", credit: "絵：よしん", image: "images/お酒と猫のフレークシール.jpg", url: "https://yoxinsyoten.booth.pm/items/8057465" },
  { name: "赤ワインと黒猫のしおり", price: "100円", tag: "お酒と猫の", credit: "絵：よしん", image: "images/赤ワインと黒猫のしおり.jpg", url: "https://yoxinsyoten.booth.pm/items/8057467" },
  { name: "ビールと猫のミニレターセット", price: "200円", tag: "お酒と猫の", credit: "絵：よしん", image: "images/ビールと猫のミニレターセット.jpg", url: "https://yoxinsyoten.booth.pm/items/8187599" },
  { name: "梅酒を作ろう！セット", price: "100円", tag: "お酒と猫の", credit: "絵：よしん", image: "images/梅酒を作ろう！セット.jpg", url: "https://yoxinsyoten.booth.pm/items/8478315" },
  { name: "写真集「上海の猫ちゃん」", price: "600円", tag: "上海の猫", credit: "写真：よしん", image: "images/写真集「上海の猫ちゃん」.jpg", url: "https://yoxinsyoten.booth.pm/items/8057468" },
  { name: "【栓抜き】年に2回くらいしか栓抜きを使わない人のための栓抜き缶マグネット", price: "400円", tag: "魔王", credit: "絵：よしん", image: "images/【栓抜き】年に2回くらいしか栓抜きを使わない人のための栓抜き缶マグネット.jpg", url: "https://yoxinsyoten.booth.pm/items/8187613" },
];
// ==================== 商品カードを画面に作る処理 ====================
// 基本的にはここから下は触らなくても大丈夫です。
const goodsGrid = document.querySelector("#goods-grid");
const imageModal = document.querySelector("#image-modal");
const modalImage = document.querySelector("#modal-image");
const modalClose = document.querySelector(".modal-close");

goods.forEach((item) => {
  const card = document.createElement("article");
  card.className = "goods-card";

  const imageButton = document.createElement("button");
  imageButton.className = "goods-image";
  imageButton.type = "button";
  imageButton.setAttribute("aria-label", `${item.name}の画像を拡大`);

  if (item.image) {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imageButton.appendChild(img);

    imageButton.addEventListener("click", () => {
      modalImage.src = item.image;
      modalImage.alt = item.name;
      imageModal.showModal();
    });
  } else {
    imageButton.classList.add("is-placeholder");
    imageButton.innerHTML = "<span>商品画像</span>";
    imageButton.disabled = true;
  }

  const infoLink = document.createElement("a");
  infoLink.className = "goods-info";
  infoLink.href = item.url;
  infoLink.target = "_blank";
  infoLink.rel = "noopener noreferrer";

  infoLink.innerHTML = `
    <div class="goods-meta">
      <span class="goods-tag">${item.tag}</span>
      <span class="goods-tag">${item.credit || ""}</span>
    </div>

    <p class="goods-name">${item.name}</p>
    <p class="goods-price">${item.price}</p>
  `;

  card.append(imageButton, infoLink);
  goodsGrid.appendChild(card);
});

// ==================== 商品画像の拡大画面を閉じる処理 ====================
modalClose.addEventListener("click", () => imageModal.close());
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) imageModal.close();
});

// ==================== スマホ用メニュー ====================
const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector("#global-nav");

menuButton.addEventListener("click", () => {
  const open = globalNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

globalNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    globalNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
