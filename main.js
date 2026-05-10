setInterval(() => {
  const activeImg = document.querySelector('.container img.active');
  let nextImg = activeImg.nextElementSibling;
  
  // 次の画像がなければ最初に戻る
  if (!nextImg) {
    nextImg = document.querySelector('.container img:first-child');
  }
  
  activeImg.classList.remove('active'); // 古い画像を非表示
  nextImg.classList.add('active'); // 新しい画像を表示
}, 3000); // 3秒ごとに切り替え


const osusume = document.getElementById('osusume-img');

window.addEventListener('scroll', () =>{

const scrollValue = document.scrollingElement.scrollTop;

if(scrollValue >= 200){
  osusume.style.display = 'inline';
}else{
  osusume.style.opacity = 'none';
}

});

// 画像フェードイン、複数枚のスクリプト
const fadeElements = document.querySelectorAll('.fadein');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

fadeElements.forEach(el => observer.observe(el));





