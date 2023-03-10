# Exam-proctor
First, I created the popup.html file and got all user data like name, email, invitation code, and a live video feed of the user.
ccreated a popup.css file to style popup.html and linked it to the htlm file 
created an SQL file to form a table in which format we want to store the data.
created the content.js file to get all the values: name, email, invitation code, and live video feed of the user.
and got the video element and canvas element from the HTML to capture an image from the webcam and send it to the server every 5 seconds.
Draw the current video frame to the canvas, convert the canvas image to a data URL, and send the data URL to the server using an HTTP POST request.
and connected the sql file to the content.js file
made a background.js file that listens for messages from the content script and popup and handles the message based on its type and Make a request to the server to start the test; after that, store the received data in the browser's storage; and make a request to the server to send the image.
made the options.html file to form the admin dashboard to retrieve stored data from the browser's storage and display it if it exists. If it does not, it displays an error.
 created the manifest.jason file and linked all the files (popup.html, popup.css, options.html, content.js, and background.js) to it to form an extension
loaded this unpacked extension onto Google and packed it so that it could be accessed.
 
Note: This project has some bugs that need to be fixed for it to work properly. As I don't have much knowledge of how to make Chrome extensions, somehow I was able to make this much progress in this project with the help of resources available online.
