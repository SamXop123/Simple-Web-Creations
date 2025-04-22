function addBookmark() {
    const name = document.getElementById("siteName").value;
    const url = document.getElementById("siteURL").value;

    if (!name || !url) return;

    const list = document.getElementById("bookmarksList");
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = name;

    const div = document.createElement("div");
    div.appendChild(link);
    list.appendChild(div);

    document.getElementById("siteName").value = "";
    document.getElementById("siteURL").value = "";
  }