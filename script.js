// vertical-lineが伸びるアニメーション
document.addEventListener('scroll', function() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var verticalLine = document.querySelector('.vertical-line');
  var height = scrollTop + 220; // 縦線の高さをスクロール量に応じて変更
  verticalLine.style.height = height + 'px';
});

const minus1 = document.getElementById('minus1');

function fadeIn() {
  let opacity = 0;
  const interval = setInterval(function() {
    opacity += 0.01; // 増加させる値を調整可能
    minus1.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(interval); // アニメーション停止
    }
  }, 20); // アニメーション速度を調整可能
}

fadeIn(); // ページ読み込み後にアニメーションを開始する

// TweenMax ではなく、gsap を使用する
const { gsap } = window;

// テキスト要素を取得
const catchCopy1 = document.querySelector('.catch-copy1');
const catchCopy2 = document.querySelector('.catch-copy2');

// テキストを分割して文字ごとに span 要素で囲む関数
function splitText(textElement) {
  const text = textElement.innerText;
  const splitText = text.split('');
  const wrappedText = splitText
    .map(char => `<span class="letter">${char}</span>`)
    .join('');
  textElement.innerHTML = wrappedText;
}

// テキスト要素を分割して文字ごとに span 要素で囲む
splitText(catchCopy1);
splitText(catchCopy2);

// 各文字をフェードインしながら跳ねさせるアニメーション
function animateText(textElement) {
  gsap.from(textElement.children, {
    y: 'random(-20, 20)',
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out',
  });
}

gsap.from(catchCopy2.children, {
  y: 'random(-20, 20)',
  opacity: 0,
  duration: 0.7,
  stagger: 0.25,
  ease: 'power3.out',
  delay: 1.2 // アニメーションの再生を2秒遅らせる
});

// アニメーションを実行
animateText(catchCopy1);
animateText(catchCopy2);

const sections = document.querySelectorAll('.section-title');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

// 下からモーダルの記述
const modal = document.querySelectorAll('.modal');
const modalOpen = document.querySelectorAll('.modal-open');
const modalClose = document.querySelectorAll('.modal-close');
const overlay = document.querySelector('.overlay');

// モーダルウィンドウを開く
for (let i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener('click', () => {
    const modalId = modalOpen[i].getAttribute('data-target');
    const targetModal = document.getElementById(modalId);
    targetModal.style.display = 'block';
    overlay.style.display = 'block'; // オーバーレイを表示
  });
}

// モーダルウィンドウを閉じる
for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', () => {
    const parentModal = modalClose[i].closest('.modal');
    parentModal.style.display = 'none';
    overlay.style.display = 'none'; // オーバーレイを非表示
  });
}

// モーダルの外側をクリックして閉じる
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    overlay.style.display = 'none'; // オーバーレイを非表示
  }
});


//トップに戻るアニメーション

$(document).ready(function() {
  var pagetop = $('.page-top');
  pagetop.fadeOut(); // 画面読み込み時にボタンを非表示にする

  $(window).scroll(function () {
     if ($(this).scrollTop() > 4000) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });

  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

// ふわっと要素が出てくるアニメーション
function scroll_effect() {
  var element = document.getElementsByClassName('scroll-up');
  if(!element) return;
                      
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
  var showTiming = 200; // 要素を表示するタイミング
  for(var i = 0; i < element.length; i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is-show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); // スクロール時に実行





window.onload = function () {
  var nav = document.getElementById('nav-wrapper');
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
  });
  blackBg.addEventListener('click', function () {
      nav.classList.remove('open');
  });
};


window.onload = function () {
  var nav = document.getElementById('nav-wrapper');
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');
  var links = document.querySelectorAll('.sp-nav ul a'); // リンク要素を取得

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  blackBg.addEventListener('click', function () {
    nav.classList.remove('open');
  });

  // リンクがクリックされたときにスライドメニューを閉じる
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
    });
  });
};


// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. 監視対象の要素（.profile-img）を取得
  const target = document.querySelector('.profile-img');

  // もし要素が見つからなかったら、何もしない
  if (!target) return;

  // 2. 監視（IntersectionObserver）の設定
  const observer = new IntersectionObserver((entries, observer) => {
    // 監視対象の要素(entries[0])が画面内に入ったか(isIntersecting)判定
    if (entries[0].isIntersecting) {
      
      // 画面内に入ったら .is-visible クラスを追加
      target.classList.add('is-visible');
      
      // 監視を停止（一度表示されたら、もう監視する必要はないため）
      observer.unobserve(target);
    }
  });

  // 3. 監視を開始
  observer.observe(target);
});


