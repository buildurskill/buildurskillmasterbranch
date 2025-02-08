// For Faq's
function toggleFaq(header) {
    const faqItem = header.parentElement;
    const content = faqItem.querySelector('.faq-content');
    const arrow = faqItem.querySelector('.faq-arrow');

    if (content.style.display === 'block') {
        content.style.display = 'none';
        header.classList.remove('active');
    } else {
        content.style.display = 'block';
        header.classList.add('active');
    }
}



const button = document.getElementById('registerBtn');
const requestacall = document.getElementById('requestacall');
const weekendregister1 = document.getElementById('weekendregister1');
const weekendregister2 = document.getElementById('weekendregister2');
const formContainer = document.getElementById('formContainer');
const closeBtn = document.getElementById('closeBtn');
const whyusbtn = document.getElementById('whyusbtn');
const footerbtn = document.getElementById('footerbtn');
const closeSuccessBtn = document.getElementById('succespageclose');

// Register Slide Button
button.addEventListener('click', () => {

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("lookingForDemo").value = '';
    document.getElementById("selectCourse").value = '';
    document.getElementById("defining").value = '';

    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

requestacall.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

weekendregister1.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

weekendregister2.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

whyusbtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

footerbtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

// Close Button Register
closeBtn.addEventListener('click', () => {
    formContainer.classList.remove('active');
    setTimeout(() => {
        formContainer.style.display = 'none';
    }, 500);

    document.body.style.overflow = 'auto';
});

closeSuccessBtn.addEventListener('click', () => {
    const successpage = document.getElementById('successpage');
    successpage.classList.remove('active');
    setTimeout(() => {
        successpage.style.display = 'none';
    }, 100);

    document.body.style.overflow = 'auto';
});


function registerNow() {
	// cd /Users/zacariya236/Desktop/buildurskill/buildurskill
    // cd /Users/zacariya236/Desktop/buildyourskill/buildurskillbackend
    // mvn clean install
    // mvn spring-boot:run

    formContainer.style.display = 'block';
    var name = document.getElementById("Name").value;
    var phone = document.getElementById("Phoneno").value;
    var email = document.getElementById("Email").value;
    var selectedCourse = document.getElementById("courseDropdown").options[document.getElementById("courseDropdown").selectedIndex].text;
    var studentDefines = "";
	var studentsLookingForDemo = "";
    if (!name || !phone || !email || selectedCourse === "Select Course") {
        alert("Please fill in all the fields.");
        return;
    }

    const params = new URLSearchParams({
        studentName: name,
        studentPhone : phone,
        studentEmail : email,
        studentCourse : selectedCourse,
        studentsDefineWell : studentDefines,
        studentsLookingForDemo : studentsLookingForDemo
    });

    fetch("https://buildurskill.com/api/institute/studentinformation", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString()
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error("Failed to connect to the backend");
        }
    })
    .then(data => {
        console.log("Response from backend:", data);
        alert("Data sent successfully! Response: " + data);
		document.getElementById("formContainer").style.display = 'none';
		document.getElementById("successpage").style.display = 'block';
    })
    .catch(error => {
        console.error("Error connecting to backend:", error);
        alert("Failed to send data to the backend.");
    });
}

function registerNowAdminPage(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var selectedCourse = document.getElementById("selectCourse").options[document.getElementById("selectCourse").selectedIndex].text;
    var whatDefines = document.getElementById("defining").options[document.getElementById("defining").selectedIndex].text;
    var lookingForDemo = document.getElementById("lookingForDemo").options[document.getElementById("lookingForDemo").selectedIndex].text;

    if (!name || !phone || !email || selectedCourse === "Select Course") {
        alert("Please fill in all the fields."+name+"--"+phone+"--"+email+"--"+selectedCourse);
         return;
    }

    const params = new URLSearchParams({
        studentName: name,
        studentPhone : phone,
        studentEmail : email,
        studentCourse : selectedCourse,
        studentsDefineWell : whatDefines,
        studentsLookingForDemo : lookingForDemo
    });

    fetch("https://buildurskill.com/api/institute/studentinformation", {
        mode: 'no-cors',
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString()
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            
            throw new Error("Failed to connect to the backend");
        }
    })
    .then(data => {
        console.log("Response from backend:", data);
       // alert("Data sent successfully! Response: " + data);
		document.getElementById("formContainer").style.display = 'none';
		document.getElementById("successpage").style.display = 'block';
    })
    .catch(error => {
        console.error("Error connecting to backend:", error);
        
        alert("Failed to send data to the backend.");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const callButton = document.getElementById("callButton");
  const callPopup = document.getElementById("callPopup");
  const closePopup = document.getElementById("closePopup");

  // Show the popup when the "Call Now" button is clicked
  callButton.addEventListener("click", function () {
    callPopup.style.display = "block";
  });

  // Close the popup when the "Close" button is clicked
  closePopup.addEventListener("click", function () {
    callPopup.style.display = "none";
  });
});

function updateDropdownText() {
  if (window.innerWidth <= 430) {
    document.querySelector('#defining option.default-option').textContent = 'What Define you?';
    document.querySelector('#lookingForDemo option.default-option').textContent = 'Looking for Demo?';
  } else {
    document.querySelector('#defining option.default-option').textContent = 'What Defines you well?';
    document.querySelector('#lookingForDemo option.default-option').textContent = 'Looking for a Demo?';
  }
}

document.getElementById('Phoneno').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, ''); // Allow only numbers
});

document.getElementById('contact').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, ''); // Allow only numbers
});


function updatePlaceholderText() {
  if (window.innerWidth <= 430) {
    document.getElementById('Name').placeholder = 'Name';
    document.getElementById('Phoneno').placeholder = 'Phone Number';
    document.getElementById('Email').placeholder = 'Email Address';
  } else {
    document.getElementById('Name').placeholder = 'Your name';
    document.getElementById('Phoneno').placeholder = 'Your phone number';
    document.getElementById('Email').placeholder = 'Your email address';
  }
}

// Run when the page loads and window resize
window.addEventListener('DOMContentLoaded', updatePlaceholderText);
window.addEventListener('resize', updatePlaceholderText);


// Run on page load and window resize
window.addEventListener('load', updateDropdownText);
window.addEventListener('resize', updateDropdownText);
