console.log("JavaScriptの動作確認");

// 処理に必要のな要素の取得================================

// ハンバーガーメニューの要素をJavaScriptでHTMLから取得する
// モバイルナビゲーションの要素をJavaScriptでHTMLから取得する

// ここまで===============================================

// 実際の処理=============================================

// ハンバーガーメニューがクリックされた時の処理を設定する
// モバイルナビゲーションクラスにactiveクラスをつける

// ======================================================

const hamburger = document.getElementById("hamburger")
console.log(hamburger);
const mobileNav = document.getElementById("mobile-nav")
console.log(mobileNav);

hamburger.addEventListener('click',function(){
    mobileNav.classList.toggle('active')
    hamburger.classList.toggle('active')
})

document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
})

// gsap animation
// ヒーローエリア
// ヒーローアニメーション
window.addEventListener("load", () => {
  const tl = gsap.timeline();

  // 背景フェードイン
  tl.to(".hero-bg", {
    opacity: 1,
    duration: 0.5,
    ease: "power1.out",
  })

  // 文字をふわっと表示
  .to(".hero__title", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 0.1,
    ease: "power2.out",
  });
});

// 商品ラインナップ
gsap.from(".product-link",{
    scrollTrigger:{
        trigger:".product",start:"top 20%",
        // markers: true
    },
    opacity:0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
})