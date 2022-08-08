let queryString = window.location.search;

const params = new URLSearchParams(queryString);

const level = params.get("level");

const result = document.getElementById(`result_level_${level}`);

result.style.display = "block";
