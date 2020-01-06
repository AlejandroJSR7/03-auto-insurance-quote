// Insurance Constructor
function Insurance(brand, year, type) {
  this.brand = brand;
  this.year = year;
  this.type = type;
}

function Interface() {
}
Interface.prototype.showMessage = (message, type) => {
  const messageDiv = document.createElement('div');
  // If Error
  if (type === 'error') {
    messageDiv.classList.add('mensaje', 'error');
  } else if (type === 'success') {
    messageDiv.classList.add('mensaje', 'correcto');
  }
  messageDiv.innerHTML = `${message}`;
  form.insertBefore(messageDiv, document.querySelector('.form-group'))
  setTimeout(() => {
    document.querySelector('.mensaje').remove();
  }, 3000);
}

// EventListeners
const form = document.getElementById('cotizar-seguro');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Select Brand
  const brand = document.getElementById('marca');
  const brandSelected = brand.options[brand.selectedIndex].value;

  // Select Year
  const year = document.getElementById('anio');
  const yearSelected = year.options[year.selectedIndex].value;

  // Radio Button
  const insuranceType = document.querySelector('input[name="tipo"]:checked').value;

  // Interface
  const interface = new Interface();

  // Check form
  if (brandSelected === '' || yearSelected === '' || insuranceType === '') {
    // Instance of Interface showing an error
    interface.showMessage('Faltan datos, verifica e intenta de nuevo', 'error');
  } else {
    // Instance of Interface showing the insurance information
    console.log('All Ok!')
  }

});

const max = new Date().getFullYear(),
  min = max - 20;

const selectYear = document.getElementById('anio');

for (let i = max; i >= min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectYear.appendChild(option);
}