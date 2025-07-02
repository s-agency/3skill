// ======== script.js ========
function login() {
  const name = document.getElementById("name").value.trim();
  const college = document.getElementById("college").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const photoInput = document.getElementById("photo");
  const photoFile = photoInput.files[0];

  if (!name || !college || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!photoFile) {
    alert("Please upload a profile photo");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const photoData = e.target.result;
    const studentId = "3SKILL-" + Math.floor(1000 + Math.random() * 9000);

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentCollege", college);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentId", studentId);
    localStorage.setItem("studentPhoto", photoData);

    window.location.href = "profile.html";
  };

  reader.readAsDataURL(photoFile);
}
function goHome() {
  window.location.href = 'index.html'; // or your home page url
}

function logout() {
  localStorage.clear();
  window.location.href = 'login.html';
}
