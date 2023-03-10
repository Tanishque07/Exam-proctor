// Listen for messages from the content script and popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Handle the message based on its type
    switch(request.type) {
      case 'START_TEST':
        // Make a request to the server to start the test
        fetch('https://example.com/start-test', {
          method: 'POST',
          body: JSON.stringify(request.data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function(response) {
          if (response.ok) {
            // Store the received data in the browser's storage
            chrome.storage.local.set({ test: response.data }, function() {
              console.log('Test started and data stored.');
            });
          } else {
            console.log('Error starting test:', response.statusText);
          }
        }).catch(function(error) {
          console.log('Error starting test:', error);
        });
        break;
  
      case 'SEND_IMAGE':
        // Make a request to the server to send the image
        fetch('https://example.com/send-image', {
          method: 'POST',
          body: request.data,
          headers: {
            'Content-Type': 'image/jpeg'
          }
        }).then(function(response) {
          if (response.ok) {
            console.log('Image sent to server.');
          } else {
            console.log('Error sending image:', response.statusText);
          }
        }).catch(function(error) {
          console.log('Error sending image:', error);
        });
        break;
  
      default:
        console.log('Unknown message type:', request.type);
    }
  });
  