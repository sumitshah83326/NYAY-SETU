// Sample report data
const reports = [
  {
    category: "Pothole",
    location: "New Delhi, India",
    description: "Large pothole near Connaught Place",
    status: "new"
  },
  {
    category: "Garbage",
    location: "Bhubaneswar, India",
    description: "Overflowing garbage bin in main market",
    status: "progress"
  },
  {
    category: "Streetlight",
    location: "Kolkata, India",
    description: "Streetlight not working near Howrah Bridge",
    status: "resolved"
  }
];

// Render reports dynamically
const reportList = document.getElementById("report-list");

reports.forEach(report => {
  const li = document.createElement("li");
  li.className = "report-item";

  li.innerHTML = `
    <div class="report-info">
      <div class="report-category">[${report.category}] ${report.location}</div>
      <div class="report-desc">${report.description}</div>
    </div>
    <div class="status-badge status-${report.status}">
      ${report.status.toUpperCase()}
    </div>
  `;

  reportList.appendChild(li);
});
