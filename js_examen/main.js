const agePollForm = document.getElementById('age-poll');
const showResultsBtn = document.getElementById('show-results');
const resultsDiv = document.getElementById('results');

agePollForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedAge = document.querySelector('input[name="age"]:checked').value;
  let ageCounts = localStorage.getItem('ageCounts') ? JSON.parse(localStorage.getItem('ageCounts')) : {};
  ageCounts[selectedAge] = ageCounts[selectedAge] ? ageCounts[selectedAge] + 1 : 1;
  localStorage.setItem('ageCounts', JSON.stringify(ageCounts));
});

showResultsBtn.addEventListener('click', () => {
  const ageCounts = JSON.parse(localStorage.getItem('ageCounts'));
  let results = '<center><nav style="color: white;font-family: Arial, Helvetica, sans-serif; margin-bottom: 20px;background: #000000;padding: 10px;"><h2>Results</h2></nav></center>';
  for (const ageGroup in ageCounts) {
    results += `<center><p>${ageGroup}: ${ageCounts[ageGroup]}</p></center>`;
  }
  resultsDiv.innerHTML = results;
  const win = window.open('', '_blank', 'width=600,height=600');
  win.document.write(results);
  win.document.close();
});
