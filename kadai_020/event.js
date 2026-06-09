// btnというidを持つHTML要素を取得し、定数Btnに代入する
const Btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数Textに代入する
const Text = document.getElementById('text');

// Btnがクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
  
  // Textの値を更新する
  Text.textContent = 'ボタンをクリックしました';
});
