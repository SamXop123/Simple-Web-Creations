
let editingBookmark = null;

function addBookmark() {
    const name = document.getElementById("siteName").value;
    const url = document.getElementById("siteURL").value;

    if (!name || !url) return;

    const list = document.getElementById("bookmarksList");
    const div = document.createElement("div");
    div.className = "bookmark";

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = name;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editBookmark(div, link);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => div.remove();

    div.appendChild(link);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    list.appendChild(div);

    document.getElementById("siteName").value = "";
    document.getElementById("siteURL").value = "";
}

function editBookmark(div, link) {
    editingBookmark = { div, link };
    document.getElementById("siteName").value = link.textContent;
    document.getElementById("siteURL").value = link.href;
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("saveBtn").style.display = "block";
}

