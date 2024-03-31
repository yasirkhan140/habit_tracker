const showHideWeeek = (e) => {
  const divShowHide = document.getElementById(`showhide-${e}`);
  const divShowBtn = document.getElementById(`btn-${e}`);
  const divDisplay = divShowHide.style.getPropertyValue("display");
  if (divDisplay === "none") {
    divShowHide.style.display = "block";
    divShowBtn.innerText = "Hide";
  } else {
    divShowHide.style.display = "none";
    divShowBtn.innerText = "Show";
  }
};
