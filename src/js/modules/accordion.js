function accordion() {
  const mobileLinksParentBtn = document.querySelectorAll(
    ".mobile-links__parent-btn"
  );

  mobileLinksParentBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mobileSub = btn.nextElementSibling;

      const isOpen = btn.classList.toggle("mobile-sub--open");
      if (isOpen) {
        mobileSub.style.maxHeight = mobileSub.scrollHeight + "px";
      } else {
        mobileSub.style.maxHeight = 0;
      }
    });
  });
}

export default accordion;
