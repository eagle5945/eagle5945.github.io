document.addEventListener("DOMContentLoaded", () => {
    console.log("Hugo TypeScript Loaded!");

    const badge: HTMLDivElement = document.createElement("div");

    badge.textContent = "TypeScript OK";

    badge.style.position = "fixed";
    badge.style.right = "20px";
    badge.style.bottom = "20px";
    badge.style.padding = "8px 12px";
    badge.style.backgroundColor = "#222";
    badge.style.color = "#fff";
    badge.style.borderRadius = "6px";
    badge.style.fontSize = "12px";
    badge.style.zIndex = "9999";

    document.body.appendChild(badge);
});