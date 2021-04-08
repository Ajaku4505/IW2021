window.setTimeout(dispMsg, 5000);

function dispMsg(){
	const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

// 100vhでもスクロールしないやつ

// ビューポートの高さを取得し、それを1％で乗算して、vh単位の値を取得
let vh = window.innerHeight * 0.01;
// --vhの値をドキュメントのルートに設定
document.documentElement.style.setProperty('--vh', `${vh}px`);

// サイズ変更イベント
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$('.slick01').slick( {

	// 自動再生。trueで自動再生される。
	autoplay: true,
	// 自動再生で切り替えをする時間
	autoplaySpeed: 3000,
	// 左右の次へ、前へボタンを表示するかどうか
	arrows: false,
	// タッチスワイプに対応するかどうか
	swipe: true,

}

);

