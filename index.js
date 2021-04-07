// 绑定事件
const li = document.querySelectorAll(".dock li");
resetScale();
li.forEach((el) => {
  const children = el.children;
  el.addEventListener("mousemove", (e) => {
    const item = e.target;
    const prev = item.previousElementSibling || null;
    const next = item.nextElementSibling || null;
    let scale = 0.6;
    const rect = item.getBoundingClientRect();
    const offset = (e.clientX - rect.left) / rect.width;
    if (prev) {
      prev.style.setProperty("--scale", 1 + scale * Math.abs(offset - 1));
    }

    item.style.setProperty("--scale", 1 + scale);

    if (next) {
      next.style.setProperty("--scale", 1 + scale * offset);
    }
  }, true);
});
resetScale();
document.querySelector('.dock').addEventListener('mouseleave', () => {
  resetScale();
})
function resetScale() {
  li.forEach((el) => {
    el.style.setProperty("--scale", 1);
  });
}
