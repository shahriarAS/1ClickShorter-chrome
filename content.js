async function setToClipboard(text) {
  navigator.clipboard.writeText(text).then(function (x) {
    console.log("Link copied to clipboard.");
  });
}

async function getShortened() {
  const currentURL = window.location.href;
  fetch(
    `https://csclub.uwaterloo.ca/~phthakka/1pt/addURL.php?url=${currentURL}`
  ).then(async (response) => {
    if (response.ok) {
      const data = await response.json();
      console.log(null);
      const shorterURL = `https://1pt.co/${data.short}`;
      setToClipboard(shorterURL);
      return response;
    } else {
      throw Error(response.statusText);
    }
  });
}
getShortened();