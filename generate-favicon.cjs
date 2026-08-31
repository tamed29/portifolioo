const fs = require('fs');
const img = fs.readFileSync('src/assets/profile-neon.png.jpg');
const base64 = img.toString('base64');
const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circle">
      <circle cx="50" cy="50" r="50"/>
    </clipPath>
  </defs>
  <image width="100" height="100" href="data:image/jpeg;base64,${base64}" clip-path="url(#circle)"/>
</svg>`;
fs.writeFileSync('public/favicon-circle.svg', svg);
