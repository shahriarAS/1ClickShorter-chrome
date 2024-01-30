async function setToClipboard(text) {
  await navigator.clipboard.writeText(text).then(function (x) {
    console.log("Link copied to clipboard.");
  });
}

async function getShortened() {
  const storageURL = await chrome.storage.local.get("currentURL");
  const url = storageURL.currentURL || window.location.href;
  fetch(`https://csclub.uwaterloo.ca/~phthakka/1pt/addURL.php?url=${url}`).then(
    async (response) => {
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(null);
        const shorterURL = `https://1pt.co/${data.short}`;
        setToClipboard(shorterURL);
        return response;
      } else {
        throw Error(response.statusText);
      }
    }
  );
}
getShortened();
