function validateURL(url) {
    const pattern = /^(http|https):\/\/[\w\d\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
    
    if (pattern.test(url)) {
      return "valid URL";
    } else {
      return "invalid URL";
    }
  }
  
  // Test cases
  const urls = [
    "http://www.google.com",
    "https://www.google.com",
    "http://123.55",
    "https://-google.com",
    "http://google.",
  ];
  
  urls.forEach(url => {
    console.log(url," is " ,validateURL(url))
  });
  
  