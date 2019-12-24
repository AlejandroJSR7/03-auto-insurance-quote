function Insurance() {
}

const max = new Date().getFullYear(),
  min = max - 20;

const selectYear = document.getElementById('anio');

for (let i = max; i >= min; i--) {
  console.log(i)
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectYear.appendChild(option);
}