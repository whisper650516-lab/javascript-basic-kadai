const today = new Date();

// 「年・月・日」の形式をオプションで指定
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('ja-JP', options);

console.log(formattedDate); 