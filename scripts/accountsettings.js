// Calculate age from birthdate automatically
document.getElementById('birthdate').addEventListener('change', function() {
    const birthdate = new Date(this.value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    document.getElementById('age').value = age;
});

// Clear form fields
document.getElementById('clearBtn').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.value = '';
    });
});

// Save form data
document.getElementById('saveBtn').addEventListener('click', function() {
    alert('Information saved successfully!');
});

// Profile image upload (simulated)
document.querySelector('.edit-icon').addEventListener('click', function() {
    alert('Upload functionality would be implemented here');
});