function validateLinkedInUrl(url) {
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/?$/;

    if (pattern.test(url)) {
        return "is a valid LinkedIn profile URL.";
    } else {
        return "is NOT a valid LinkedIn profile URL.";
    }
}

// Test cases
const urls = [
    "https://www.linkedin.com/in/sobiya-haq",
    "https://www.linkedin.com/in/sobiya_haq",
    "https://www.linkedin.com/in/sobiyahaq123456",
    "https://www.linkedin.com/in/-sobiyahaq",
    "https://www.linkedin.com/profiles/123sobiyahaq"
];

urls.forEach(url => {
    console.log(url,validateLinkedInUrl(url))
  });
  

