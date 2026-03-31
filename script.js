const root = document.documentElement;

const h = document.querySelector("#h");
const c = document.querySelector("#c");
const l = document.querySelector("#l");

const hOut = document.querySelector("#hOut");
const cOut = document.querySelector("#cOut");
const lOut = document.querySelector("#lOut");

const autoInk = document.querySelector("#autoInk");

function sync() {
	root.style.setProperty("--h", h.value);
	root.style.setProperty("--c", c.value);
	root.style.setProperty("--l", l.value);

	hOut.value = h.value;
	cOut.value = (+c.value).toFixed(2);
	lOut.value = (+l.value).toFixed(2);
}

function syncAutoInk() {
	root.dataset.autoInk = autoInk.checked ? "1" : "0";
}

[h, c, l].forEach((el) => el.addEventListener("input", sync));
autoInk.addEventListener("change", syncAutoInk);

sync();
syncAutoInk();
