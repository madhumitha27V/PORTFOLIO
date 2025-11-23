const emailjs = require('@emailjs/browser');

// Test EmailJS configuration
async function testEmailJS() {
  try {
    console.log('Testing EmailJS configuration...');
    
    // Initialize EmailJS with your public key
    emailjs.init('3F0TrdMjykpNA4fMT');
    
    // Test data
    const testData = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      message: 'This is a test message from your portfolio contact form.'
    };
    
    console.log('Sending test email...');
    
    const result = await emailjs.send(
      'service_ma6jzlj',    // Service ID
      'template_sykfpfn',   // Template ID
      testData,
      '3F0TrdMjykpNA4fMT'  // Public Key
    );
    
    if (result.status === 200) {
      console.log('✅ EmailJS test successful!');
      console.log('Result:', result);
    } else {
      console.log('❌ EmailJS test failed');
      console.log('Status:', result.status);
    }
    
  } catch (error) {
    console.error('❌ EmailJS test failed with error:');
    console.error('Error message:', error.message);
    console.error('Error details:', error);
  }
}

testEmailJS();