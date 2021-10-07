/*
js処理をこちらに記述
**/
$(function () {

  /* 1.headerのパララックスデザイン*/
  // =========================================
  // 処理の流れ
  // =========================================
  // windowsをスクロールしたらイベントセット
  // heroバナーの高さを取得
  //　windowのスクロール量を取得し、heroバナーの高さを超えるかどうか判定
  // 超えたらis-activeをつける


  // windowsをスクロールしたらイベントセット
  $(window).on('scroll', function () {

    // heroバナーの高さを取得
    var heroHeight = $('.js-hero').height();
    //　windowのスクロール量を取得し、heroバナーの高さを超えるかどうか判定
    // 超えたらis-activeをつけ
    $('.js-float-menu').toggleClass("is-active", $(this).scrollTop() > heroHeight);

  });


  /* 2.ハンバーガーメニュー*/
  // =========================================
  // 処理の流れ
  // =========================================
  // 「三」をクリックしたらイベントセット
  // is-activeをつける・外すを処理
  // 再度クリックしたらis-activeクラスを外す
  $('.js-hamburgerMenu').on('click', function () {

    // 「三」へのアニメーション
    $(this).toggleClass('is-active');
    // navをspメニューで表示
    $('.js-spMenu').toggleClass('is-active');

  });

  /* 3.ハンバーガーメニューを閉じる*/
  // =========================================
  // 処理の流れ
  // =========================================
  // （前提）ハンバーガーメニューが表示されている状態
  // メニューのどれかをクリックしたら、イベントセット
  // L 「×」になっているメニューを閉じる（is-activeクラスを外す）
  // L 開いているハンバーガーメニューを閉じる（is-activeクラスを外す）

  $('.js-close-spMenu').on('click', function () {

    // 「×」を「三」に戻す
    $('.js-hamburgerMenu').removeClass('is-active');
    // spメニューを左に戻す
    $('.js-spMenu').removeClass('is-active');



  });

});

/* 4.スクロールしたらふわっと表示されるボタン*/
// =========================================
// 処理の流れ
// =========================================
// 「三」をクリックしたらイベントセット
// is-activeをつける・外すを処理
// 再度クリックしたらis-activeクラスを外す
$(document).ready(function () {
  $(".js-click-topBtn").hide();　//ボタンを非表示にする
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) { //ページの上から100pxスクロールした時
      $(".js-click-topBtn").fadeIn("fast"); //ボタンがフェードインする
    } else {
      $(".js-click-topBtn").fadeOut("fast");　//ボタンがフェードアウトする
    }
    scrollHeight = $(document).height(); //ドキュメントの高さ
    scrollPosition = $(window).height() + $(window).scrollTop(); //現在地
    footHeight = $("footer").innerHeight(); //止めたい位置の高さ(今回はfooter)
    if (scrollHeight - scrollPosition <= footHeight) { //ドキュメントの高さと現在地の差がfooterの高さ以下の時
      $(".js-click-topBtn").css({
        "position": "absolute", //pisitionをabsoluteに変更
      });
    } else { //それ以外の場合は
      $(".js-click-topBtn").css({
        "position": "fixed", //固定表示
      });
    }
  });


  //スムーススクロール設定
  $('.js-click-topBtn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);　//スムーススクロールの速度
    return false;
  });
});

/* 5.モーダルウィンドウ */
// =========================================
// 処理の流れ
// =========================================
// js-click-modalをクリックしたらイベントセット
// 画面リロードの防止
// 非表示になっているmodal-widthを表示
// 閉じるを押すと非表示にする。
// modaltargetにmarginleftをつけて中央表示

$('.js-click-modal').on('click', function (event) {
  event.preventDefault();

  // DOMを取得する
  // DOMの兄弟要素を取得する（モーダル全体）
  // モーダルカバー
  // モーダルのコンテンツ
  let $clickTarget = this;
  let modalTarget = $clickTarget.nextElementSibling;
  let modalCover = modalTarget.firstElementChild;
  let modalContent = modalCover.firstElementChild;

  $(modalContent).slideToggle();
  $(modalCover).show();
});

$('.js-close-modal').on('click', function () {

  let dom = this;
  let modalContent = dom.closest('.p-works__modalContent');
  let modalCover = dom.closest('.p-works__modalCover');

  $(modalContent).slideToggle();
  $(modalCover).hide();

});
