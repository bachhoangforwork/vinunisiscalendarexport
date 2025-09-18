document.getElementById("export").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(tab.id, { action: "export" }, (response) => {
    document.getElementById("status").innerText =
      response?.status || "Exporting...";
  });
});
