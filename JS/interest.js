$(document).ready(function () {
  // Mapping course IDs to course names
  const courseMap = {
    Ta: "Computer Science",
    Tb: "Software Engineering",
    Tc: "Computer Systems Engineering",
    Td: "Data Science",
    Te: "Information Technology",

    e1: "Accounting",
    e2: "Accounting",
    e3: "Financial Engineering",
    e4: "Commerce",
    e5: "Banking and Finance",
    e6: "Real Estate",

    n1: "Mechanical Engineering",
    n2: "Electrical Engineering",
    n3: "Mechatronical Engineering",
    n4: "Civil Engineering",
    n5: "Water Engineering",

    h1: "Land Survey",
    h2: "Geospatial Engineering",
    h3: "History",
    h4: "Religious Studies",
    h5: "Space Exploration",

    a1: "Home Economics",
    a2: "Product Design",
    a3: "Videography",
    a4: "Interior Design",
    a5: "Music Production"
  };

  
  $(".btn").click(async function () {
    const courseId = this.id; // 
    const courseName = courseMap[courseId];

    if (!courseName) {
      alert("Unknown course selected.");
      return;
    }

    try {
      // Fetch course data from the backend
      const response = await fetch(`http://localhost:3001/api/course?courseId=${encodeURIComponent(courseName)}`);
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
      
      const data = await response.json();

      // Display course data
      $("#specific-course-name").text(data.name);
      $("#course-description").html(data.description);

      
      const unisHtml = data.universities.map((u, i) =>
        `<tr><th scope="row">${i + 1}</th><td>${u.name}</td><td>${u.location}</td><td><a href="${u.url}" target="_blank">${u.name}</a></td></tr>`
      ).join("");
      $("#university-table-body").html(unisHtml);

      
      const certsHtml = data.certifications.map(c => `<li><h5 class="card-title">${c}</h5></li>`).join("");
      $("#certification-list").html(certsHtml);

     
      const resourcesHtml = data.resources.map(r =>
        `<li><a href="${r.url}" target="_blank"><h5 class="card-title">${r.title}</h5></a></li>`
      ).join("");
      $("#resource-list").html(resourcesHtml);

      // Show the course details section
      $("#course-details-section").fadeIn();
    } catch (err) {
      alert("Failed to load course information. Try again later.");
      console.error(err);
    }
  });

  // Section toggle logic (no changes here)
  $("h3#one").click(() => $("#course1").toggle());
  $("h3#two").click(() => $("#course2").toggle());
  $("h3#three").click(() => $("#course3").toggle());
  $("h3#four").click(() => $("#course4").toggle());
  $("h3#five").click(() => $("#course5").toggle());
  $("h3#six").click(() => $("#course6").toggle());
});
