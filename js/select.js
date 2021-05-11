document.querySelectorAll(".select").forEach((e) => {
  const list = e.querySelector(".select-list"),
    items = e.querySelectorAll(".select-list-item"),
    input = e.querySelector(".select-input"),
    select = e.querySelector(".select-block"),
    back = e.querySelector(".select-back");

  select.addEventListener("click", () => {
    list.classList.toggle("block");
    back.classList.toggle("block");
  });

  select.addEventListener("keydown", function (event) {
    if (event.code == "Enter" || event.code == "Space") {
        list.classList.toggle("block");
        back.classList.toggle("block");
    }
  });

  back.addEventListener("click", () => {
    list.classList.toggle("block");
    back.classList.toggle("block");
  });

  items.forEach((el) => {
    el.addEventListener("click", () => {
      select.innerHTML = el.textContent;
      input.value = el.value;
      list.classList.toggle("block");
      back.classList.toggle("block");
    });
  });
});
