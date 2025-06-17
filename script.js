
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert("Code copied!");
}

function copyRef() {
  const ref = document.getElementById("refLink");
  ref.select();
  document.execCommand("copy");
  alert("Referral link copied!");
}
