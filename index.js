document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.getElementsByClassName('close');
    const closeModalID = document.getElementById('closeID');
    const submitbutton = document.getElementById('submitbutton');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    submitbutton.onclick = generatecertifacte;
      
      
    function generatecertifacte() {
  
      //  Display the modal
      modal.style.display = 'block';

      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      const h1 = document.createElement('h1');
      h1.textContent = 'Certificate of Achievements';
      certificateContent.appendChild(h1);

      const h2 = document.createElement('p');
      h2.textContent = 'This is to certify that';
      certificateContent.appendChild(h2);

      const h3 = document.createElement('h3');
      h3.textContent = `${studentName}`;
      h3.style.fontWeight = 'bold'; // Make the text bold
      certificateContent.appendChild(h3);

      const h4 = document.createElement('p');
      h4.textContent = 'has almost completed the';
      certificateContent.appendChild(h4);

      const h5 = document.createElement('h3');
      h5.textContent = `${courseName} `;
      h5.style.fontWeight = 'bold'; // Make the text bold
      certificateContent.appendChild(h5);

      const h6 = document.createElement('p');
      h6.textContent = 'with legendary perseverance and world class bad-assery for never giving up';
      certificateContent.appendChild(h6);

      const img = document.createElement('img');
      img.src = 'logo.png'; // Placeholder image URL
      img.alt = 'Sample Image';
      certificateContent.appendChild(img);

      const h7 = document.createElement('h3');
      h7.textContent = `${personalMessage} `;
      h7.style.fontWeight = 'bold'; // Make the text bold
      certificateContent.appendChild(h7);

      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    }
  
    //  🚨 Close the modal when the close button is clicked
    closeModalID.onclick = Closecertificate ;
      
      
    function Closecertificate() { 
      
      modal.style.display = 'none';
      certificateContent.innerHTML = '';
      
    };
  });
  