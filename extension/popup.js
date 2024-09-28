const checkTaxBtn = document.getElementById('checkTaxBtn');
const motHistoryBtn = document.getElementById('motHistoryBtn');
const resultPanel = document.getElementById('details-panel');
const registrationInput = document.getElementById('reg-input');

const detailsPanel = document.getElementById('details-panel');
const taxPanel = document.getElementById('details-tax-panel');
const motPanel = document.getElementById('details-mot-panel');

// capitalize registration
function capitalizeRegistration(reg) {
  return reg.toUpperCase();
}

// hides panels - stops clutter
function hideAllPanels() {
  detailsPanel.classList.add('hidden');
  taxPanel.classList.add('hidden');
  motPanel.classList.add('hidden');
}

// "Get Details" button
getDetailsBtn.addEventListener('click', function() {
  const reg = registrationInput.value.trim();
  const capitalizedReg = capitalizeRegistration(reg);

  hideAllPanels();

  // TODO - awaiting GOV.UK API access
  detailsPanel.innerHTML = `
    <p>Vehicle make: ${capitalizedReg}</p>
    <p>Date of first registration: -</p>
    <p>Year of manufacture: -</p>
    <p>Cylinder capacity: - cc</p>
    <p>CO₂ emissions: - g/km</p>
    <p>Fuel type: -</p>
    <p>Euro status: Not Available</p>
    <p>Real Driving Emissions (RDE): Not Available</p>
    <p>Export marker: -</p>
    <p>Vehicle status: -</p>
    <p>Vehicle colour: -</p>
    <p>Vehicle type approval: -</p>
    <p>Wheelplan: -</p>
    <p>Revenue weight: - kg</p>
    <p>Date of last V5C (logbook) issued: -</p>
  `;
  detailsPanel.classList.remove('hidden'); // un-hide details panel - should now be the only panel showing
});

// "Check Tax" button
checkTaxBtn.addEventListener('click', function() {
  const reg = registrationInput.value.trim();
  const capitalizedReg = capitalizeRegistration(reg);

  hideAllPanels();

  // TODO - awaiting GOV.UK API access
  taxPanel.innerHTML = `<p>${capitalizedReg} [is/is NOT] taxed.</p>`;
  taxPanel.classList.remove('hidden'); // unhide tax panel
});

// "MOT History" button
motHistoryBtn.addEventListener('click', function() {

  hideAllPanels();

  // TODO - awaiting GOV.UK API access
  motPanel.innerHTML = `
    <p>[year] [pass/fail] [miles] This is a placeholder entry.</p>
    <p>[year] [pass/fail] [miles] This is a placeholder entry.</p>
    <p>[year] [pass/fail] [miles] This is also a placeholder entry.</p>
  `;
  motPanel.classList.remove('hidden'); // un-hide mot panel
});