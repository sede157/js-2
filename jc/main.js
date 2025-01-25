const API_URL = 'https://jsonplaceholder.typicode.com/users'; // رابط الـ API

const usersContainer = document.getElementById('users-container');

// دالة لجلب البيانات من API
async function fetchUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error('Error:', error);
    usersContainer.innerHTML = '<p>Failed to load users. Please try again later.</p>';
  }
}

// دالة لعرض المستخدمين
function renderUsers(users) {
  usersContainer.innerHTML = users
    .map(user => {
      return `
        <div class="user-card">
          <h2>${user.name}</h2>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
          <p><strong>Company:</strong> ${user.company.name}</p>
        </div>
      `;
    })
    .join('');
}

// استدعاء الدالة عند تحميل الصفحة
fetchUsers();