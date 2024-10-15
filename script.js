const root = document.querySelector('.root');

alert("selamat datang!! silahkan isi form dibawah")

function createForm() {
  root.innerHTML = `
    <h2>Form</h2>
    <input type="text" id="username" placeholder="Qadrul dzul" required />
    <input type="text" id="nim" placeholder="231401088" required />
    <input type="text" id="kom" placeholder="A" required />
    <input type="file" id="photo" accept="image/*" />
    <button onclick="submitForm()">Submit</button>
  `;
}

function submitForm() {
  const username = document.getElementById('username').value;
  const nim = document.getElementById('nim').value;
  const kom = document.getElementById('kom').value;
  const photo = document.getElementById('photo').files[0];

  if (!username || !nim || !kom || !photo) {
    alert("Please fill all fields and upload a photo!");
    return;
  }

    alert("Form berhasil di submit");
  

  const reader = new FileReader();
  reader.onload = function(e) {
    root.innerHTML = `
      <h2>Submitted Data</h2>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>NIM:</strong> ${nim}</p>
      <p><strong>KOM:</strong> ${kom}</p>
      <img src="${e.target.result}" alt="Uploaded Photo" />
      <button onclick="createForm()">Edit</button>
    `;
  };
  reader.readAsDataURL(photo);
}

createForm();
