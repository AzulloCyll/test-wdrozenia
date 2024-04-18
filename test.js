const CDT = document.getElementById("CDT");
const projectorSummaryWrapper = document.getElementsByClassName(
  "projector_summary_wrapper"
)[0];
const projectorDetails = document.getElementById("projector_details");

const calcWrapper = document.createElement("div");
calcWrapper.style.marginBottom = "20px";

CDT
  ? projectorDetails.insertBefore(calcWrapper, CDT)
  : projectorDetails.insertBefore(calcWrapper, projectorSummaryWrapper);

const calcButton = document.createElement("a");
calcButton.classList.add("btn-large");
calcButton.type = "button";
calcButton.innerHTML = "<i class='icon-tape-measure'></i> Oblicz swój rozmiar";
calcButton.style.backgroundColor = "white";
calcButton.style.color = "#e74011";
calcButton.style.width = "100%";
calcButton.style.caretColor = "transparent";

calcButton.addEventListener("mouseover", () => {
  calcButton.style.color = "black";
});

calcButton.addEventListener("mouseout", () => {
  calcButton.style.color = "#e74011";
});

calcButton.addEventListener("click", () => {
  calcContentWrapper.style.display = "block";
  calcButton.classList.add("hidden");
});

calcWrapper.append(calcButton);

const calcContentWrapper = document.createElement("div");
calcContentWrapper.style.display = "none";
calcContentWrapper.style.padding = "20px";
calcContentWrapper.style.backgroundColor = "#f1f1f1";
calcContentWrapper.style.borderRadius = "5px";

calcWrapper.append(calcContentWrapper);

const appRoot = document.createElement("div");
appRoot.id = "root";

const appJs = document.createElement("script");
appJs.defer = "defer";
appJs.src = "/data/include/cms/apps/bracalc/main.b07af546.js";

const appCss = document.createElement("link");
appCss.href = "/data/include/cms/apps/bracalc/main.d5bdfc1e.css";
appCss.rel = "stylesheet";

calcContentWrapper.append(appJs, appCss, appRoot);
