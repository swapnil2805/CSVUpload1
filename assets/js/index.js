// search function
function search_files() {
  var input, filter, ol, li, a, i, txtValue;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  ol = document.getElementById("myOl");
  li = ol.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
