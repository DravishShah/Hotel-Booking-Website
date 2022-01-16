const btnListView = document.querySelector(".btnListView");
const btnMapView = document.querySelector(".btnMapView");

const listView = document.querySelector(".list-hotel");
const mapView = document.querySelector(".map-view");

btnListView.addEventListener("click", () => {
  listView.classList.add("active");
  //   console.log("ButtonPressed");
  mapView.classList.remove("active");
});

btnMapView.addEventListener("click", () => {
  mapView.classList.add("active");
  //   console.log("ButtonPressed");
  listView.classList.remove("active");
});
