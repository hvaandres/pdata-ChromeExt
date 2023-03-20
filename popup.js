const form = document.querySelector('form');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');

copyBtn.addEventListener('click', () => {
  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    address: form.address.value,
    state: form.state.value,
    zip: form.zip.value
  };
  const text = Object.keys(data).map(key => `${key}: ${data[key]}`).join('\n');
  navigator.clipboard.writeText(text);
  document.getElementById('status').textContent = 'You copied this info.';
});

saveBtn.addEventListener('click', () => {
  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    address: form.address.value,
    state: form.state.value,
    zip: form.zip.value
  };
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = 'my-info.json';
  a.href = url;
  a.click();
  URL.revokeObjectURL(url);
  document.getElementById('status').textContent = 'Data saved as JSON.';
});

clearBtn.addEventListener('click', () => {
  form.reset();
  document.getElementById('status').textContent = '';
});

const resumeInput = document.getElementById('resume');
resumeInput.addEventListener('change', () => {
  const file = resumeInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(`Uploaded resume: ${file.name}`);
    };
  }
});

