let localReports = [];

// Auto-fill location (dummy for now)
function autoFillLocation() {
  document.getElementById('location').value = "Kathmandu, Nepal";
}

// Auto-fill description using AI (dummy suggestion)
function autoFillAI() {
  document.getElementById('description').value =
    "There is a visible issue at this location requiring attention.";
}

// Handle form submission
function submitIssue() {
  const photo = document.getElementById('photo').files[0];
  const location = document.getElementById('location').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

  if (!photo || !location || !description || !category) {
    alert("⚠️ Please fill all fields and upload a photo");
    return;
  }

  const report = {
    photoName: photo.name,
    location,
    description,
    category
  };

  // Save locally in array
  localReports.push(report);
  updateLocalList();

  alert("✅ Issue submitted locally!");

  // Reset form
  document.getElementById('photo').value = "";
  document.getElementById('location').value = "";
  document.getElementById('description').value = "";
  document.getElementById('category').selectedIndex = 0;
}

// Update local reports list
function updateLocalList() {
  const list = document.getElementById('local-list');
  if (!list) return; // If list container not found, skip

  list.innerHTML = "";
  localReports.forEach((report, index) => {
    const li = document.createElement('li');
    li.textContent =
      `${index + 1}. [${report.category}] ${report.description} @ ${report.location} (Photo: ${report.photoName})`;
    list.appendChild(li);
  });
}
