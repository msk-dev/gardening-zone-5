const tableData = [
  {
    plant: "Garlic",
    sowMethod: "Clove planting (fall or early spring)",
    sowMonth: "Oct or Apr",
    harvest: "Jul (fall-sown) or Aug (spring-sown)",
    water: "Weekly (light)",
    fertilizer: "Compost before planting",
    sun: "Full sun",
    trellis: "No",
    temp: "cool"
  },
  {
    plant: "Snow Pea",
    sowMethod: "Direct sow",
    sowMonth: "Apr–May",
    harvest: "Jun–Jul",
    water: "2–3 days",
    fertilizer: "Light compost",
    sun: "Full sun",
    trellis: "Yes",
    temp: "cool"
  },
  {
    plant: "Carrots",
    sowMethod: "Direct sow",
    sowMonth: "Apr–Jun",
    harvest: "Jul–Sep",
    water: "2–3 days",
    fertilizer: "Low, compost before sowing",
    sun: "Full sun",
    trellis: "No",
    temp: "cool"
  },
  {
    plant: "Swiss Chard",
    sowMethod: "Direct sow or transplant",
    sowMonth: "Apr–Jul",
    harvest: "Jun–Oct (cut-and-come-again)",
    water: "2–3 days",
    fertilizer: "Moderate, compost",
    sun: "Full sun/partial shade",
    trellis: "No",
    temp: "moderate"
  },
  {
    plant: "Onion",
    sowMethod: "Sets/transplants",
    sowMonth: "Apr–May",
    harvest: "Aug–Sep",
    water: "Weekly deep watering",
    fertilizer: "Compost + phosphorus",
    sun: "Full sun",
    trellis: "No",
    temp: "moderate"
  },
  {
    plant: "Coriander",
    sowMethod: "Direct sow",
    sowMonth: "Apr–Sep",
    harvest: "May–Jul (leaf), Aug–Sep (seed)",
    water: "2–3 days",
    fertilizer: "Light compost",
    sun: "Full sun/partial shade",
    trellis: "No",
    temp: "cool"
  },
  {
    plant: "Tomato",
    sowMethod: "Transplant (indoors Mar, outdoors May)",
    sowMonth: "May",
    harvest: "Jul–Sep",
    water: "2–3 days",
    fertilizer: "High – compost + NPK",
    sun: "Full sun",
    trellis: "Yes",
    temp: "warm"
  },
  {
    plant: "Eggplant",
    sowMethod: "Transplant (indoors Mar, outdoors May)",
    sowMonth: "May",
    harvest: "Aug–Sep",
    water: "2–3 days",
    fertilizer: "High – compost, potassium rich",
    sun: "Full sun",
    trellis: "Yes",
    temp: "warm"
  },
  {
    plant: "Chillies",
    sowMethod: "Transplant (indoors Mar, outdoors May)",
    sowMonth: "May",
    harvest: "Jul–Sep",
    water: "2–3 days",
    fertilizer: "Moderate–high",
    sun: "Full sun",
    trellis: "No",
    temp: "warm"
  },
  {
    plant: "Beans",
    sowMethod: "Direct sow",
    sowMonth: "May–Jun",
    harvest: "Jul–Sep",
    water: "2–3 days",
    fertilizer: "Moderate, compost",
    sun: "Full sun",
    trellis: "Yes (pole beans)",
    temp: "moderate"
  },
  {
    plant: "Cucumber",
    sowMethod: "Direct sow/transplant",
    sowMonth: "May–Jun",
    harvest: "Jul–Sep",
    water: "2–3 days",
    fertilizer: "Nitrogen + compost",
    sun: "Full sun",
    trellis: "Yes",
    temp: "warm"
  },
  {
    plant: "Okra",
    sowMethod: "Direct sow",
    sowMonth: "May–Jun",
    harvest: "Jul–Sep",
    water: "2–3 days",
    fertilizer: "Nitrogen & compost",
    sun: "Full sun",
    trellis: "No",
    temp: "warm"
  },
  {
    plant: "Bitter Gourd",
    sowMethod: "Direct sow",
    sowMonth: "May–Jun",
    harvest: "Aug–Sep",
    water: "2–3 days",
    fertilizer: "Compost + potassium",
    sun: "Full sun",
    trellis: "Yes",
    temp: "warm"
  },
  {
    plant: "Butternut Squash",
    sowMethod: "Direct sow/transplant",
    sowMonth: "May–Jun",
    harvest: "Sep–Oct",
    water: "2–3 days",
    fertilizer: "Compost + phosphorus",
    sun: "Full sun",
    trellis: "Optional",
    temp: "warm"
  },
  {
    plant: "Pumpkin",
    sowMethod: "Direct sow",
    sowMonth: "May–Jun",
    harvest: "Sep–Oct",
    water: "2–3 days",
    fertilizer: "Heavy feeder – compost + NPK",
    sun: "Full sun",
    trellis: "Yes (space dependent)",
    temp: "warm"
  },
  {
    plant: "Sunflower",
    sowMethod: "Direct sow",
    sowMonth: "May",
    harvest: "Aug–Sep",
    water: "3–4 days",
    fertilizer: "Low to moderate",
    sun: "Full sun",
    trellis: "No",
    temp: "warm"
  },
  {
    plant: "Red Spinach",
    sowMethod: "Direct sow",
    sowMonth: "May–Aug",
    harvest: "Jun–Sep",
    water: "1–2 days (moist soil)",
    fertilizer: "Light compost",
    sun: "Full sun/partial shade",
    trellis: "No",
    temp: "moderate"
  }
];

// Render table
const tableBody = document.getElementById("tableBody");

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="px-3 py-2 font-medium">${row.plant}</td>
      <td class="px-3 py-2">${row.sowMethod}</td>
      <td class="px-3 py-2">${row.sowMonth}</td>
      <td class="px-3 py-2">${row.harvest}</td>
      <td class="px-3 py-2">${row.water}</td>
      <td class="px-3 py-2">${row.fertilizer}</td>
      <td class="px-3 py-2">${row.sun}</td>
      <td class="px-3 py-2">${row.trellis}</td>
      <td class="px-3 py-2">
        <span class="${row.temp === 'cool' ? 'temp-cool' : row.temp === 'moderate' ? 'temp-moderate' : 'temp-warm'}">
          ${row.temp === 'cool' ? '🟦 Cool' : row.temp === 'moderate' ? '🟩 Moderate' : '🟧 Warm'}
        </span>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

renderTable(tableData);

// Search & filter
const searchInput = document.getElementById("search");
const trellisFilter = document.getElementById("trellisFilter");

function applyFilters() {
  let filtered = tableData.filter(row =>
    row.plant.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  if (trellisFilter.value !== "all") {
    if (trellisFilter.value === "yes") {
      filtered = filtered.filter(row => row.trellis.toLowerCase().includes("yes"));
    } else if (trellisFilter.value === "no") {
      filtered = filtered.filter(row => row.trellis.toLowerCase() === "no");
    } else if (trellisFilter.value === "optional") {
      filtered = filtered.filter(row => row.trellis.toLowerCase().includes("optional"));
    }
  }

  renderTable(filtered);
}

searchInput.addEventListener("input", applyFilters);
trellisFilter.addEventListener("change", applyFilters);

// Render calendar rows
const calendarRows = document.getElementById("calendarRows");

function renderCalendar(data) {
  calendarRows.innerHTML = "";
  data.forEach(row => {
    const div = document.createElement("div");
    div.className = "month-row";
    div.innerHTML = `
      <div class="px-2 font-medium">${row.plant}</div>
      <div class="text-center">${row.sowMonth.includes('Mar') ? '<span class="bar bar-sow"></span>' : ''}</div>
      <div class="text-center">${row.sowMonth.includes('Apr') ? '<span class="bar bar-sow"></span>' : ''}</div>
      <div class="text-center">${row.sowMonth.includes('May') ? '<span class="bar bar-sow"></span>' : ''}</div>
      <div class="text-center">${row.sowMonth.includes('Jun') ? '<span class="bar bar-sow"></span>' : ''}</div>
      <div class="text-center">${row.harvest.includes('Jul') ? '<span class="bar bar-harvest"></span>' : ''}</div>
      <div class="text-center">${row.harvest.includes('Aug') ? '<span class="bar bar-harvest"></span>' : ''}</div>
      <div class="text-center">${row.harvest.includes('Sep') ? '<span class="bar bar-harvest"></span>' : ''}</div>
      <div class="text-center">${row.harvest.includes('Oct') ? '<span class="bar bar-harvest"></span>' : ''}</div>
      <div class="text-center">${row.sowMonth.includes('Oct') || row.harvest.includes('Nov') ? '<span class="bar bar-overwinter"></span>' : ''}</div>
    `;
    calendarRows.appendChild(div);
  });
}

renderCalendar(tableData);
