function createTable() {
  const tableContainer = document.getElementById("tableContainer");

  // Create table element
  const table = document.createElement("table");

  // Create table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["NO", "NIM", "NAMA", "ALAMAT", "KELAS", "Aksi"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");

  // Sample data for the table
  const students = [
    {
      no: 1,
      nim: "2306882",
      nama: "Linda Apriyani",
      alamat: "Brebes",
      kelas: "A",
    },
    {
      no: 2,
      nim: "2301251",
      nama: "Khansa Farah",
      alamat: "Lampung",
      kelas: "B",
    },
    {
      no: 3,
      nim: "2301306",
      nama: "Nadila Hanifah",
      alamat: "Serang",
      kelas: "A",
    },
    {
      no: 4,
      nim: "2309665",
      nama: "Gizza Auralia",
      alamat: "Depok",
      kelas: "A",
    },
    {
      no: 5,
      nim: "2307885",
      nama: "Aryuana Iwang",
      alamat: "Serang",
      kelas: "B",
    },
  ];

  // Fill the table with student data
  students.forEach((student) => {
    const row = document.createElement("tr");

    // Add each student property to a cell
    Object.values(student)
      .slice(0, 5)
      .forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
      });

    // Create the action cell with a link
    const actionCell = document.createElement("td");
    const link = document.createElement("a");
    link.textContent = "Detail";
    link.href = "#"; // Prevent default link behavior

    // Different actions based on the student
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link action
      switch (student.no) {
        case 1:
          alert(`Linda Apriyani's NIM: ${student.nim}`);
          break;
        case 2:
          row.style.backgroundColor = "#d1e7dd"; // Change row color
          break;
        case 3:
          const star = document.createElement("span");
          star.textContent = " ⭐"; // Add a star symbol
          row.cells[2].appendChild(star); // Append star to the Nama cell
          break;
        case 4:
          createHearts(10); // Create 10 hearts falling from the top
          break;
        case 5:
          row.style.display = "none"; // Hide the row without alert
          break;
        default:
          break;
      }
    });

    actionCell.appendChild(link);
    row.appendChild(actionCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

// Function to create heart elements
function createHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.textContent = "❤️"; // Heart emoji
    heart.className = "heart";

    // Randomize horizontal position
    heart.style.position = "absolute"; // Ensure proper positioning
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "0"; // Start from the top
    heart.style.fontSize = "24px"; // Set size for visibility

    // Append heart to the body
    document.body.appendChild(heart);

    // Animate falling hearts
    heart.animate(
      [
        { transform: "translateY(0)" },
        { transform: `translateY(${window.innerHeight}px)` },
      ],
      {
        duration: 1500,
        easing: "linear",
        fill: "forwards",
      }
    );

    // Set timeout to remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 1500); // Match this to the animation duration
  }
}

createTable();
