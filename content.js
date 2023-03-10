const startTestBtn = document.getElementById('start-test-btn');
const inputForm = document.getElementById('input-form');

startTestBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const invitationCode = document.getElementById('invitation-code').value;
  const videoElement = document.getElementById('video');
  chrome.tabCapture.capture({ video: true, audio: true }), function(stream) {
    if(stream) {
        videoElement.srcObject = stream;
        videoElement.play();
       }
    else{
    // The user has not granted permission to access the camera and microphone
    console.error('Error accessing user media:', error);
    };
  } // Get the video element and canvas element from the HTML
  
  const video = document.querySelector('video');
  const canvas = document.createElement('canvas');
  // Set the canvas dimensions to match the video dimensions
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

// Capture an image from the webcam and send it to the server every 5 seconds
setInterval(() => {
  // Draw the current video frame to the canvas
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert the canvas image to a data URL
  const dataUrl = canvas.toDataURL('image/png');

  // Send the data URL to the server using an HTTP POST request
  fetch('/upload-image', {
    method: 'POST',
    body: JSON.stringify({ image: dataUrl }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log('Image uploaded successfully');
  })
  .catch(error => {
    console.error('Error uploading image', error);
  });
  }, 5000);

  const express = require('express');
  const mysql = require('mysql');

  const app = express();
  const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sqlpass@123',
  database: 'proctoring'
  });
  
  app.get('/users', (req, res) => {
    const query1='CREATE TABLE proctoring.users (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY (id))';
    db.query(query1, (error, results) => {
      
  try {
    const [rows, fields] =  connection.query(query1);
    console.log(`Table created successfully: ${rows.affectedRows} rows affected`);
  } catch (err) {
    console.error('Error creating table: ', err);
  }
    });
  const query = 'SELECT * FROM users';

  db.query(query, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
  });

  app.listen(3000, () => {
  console.log('Server running on port 3000');
  });


});
