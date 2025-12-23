import fs from 'fs';
import path from 'path';

const dataDir = path.join(__dirname, '..', 'data');
const filePath = path.join(dataDir, 'large.csv');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const stream = fs.createWriteStream(filePath);

stream.write('name,email,age\n');

for (let i = 0; i < 10000; i++) {
  stream.write(
    `User${i},user${i}@test.com,${20 + (i % 30)}\n`
  );
}

stream.end();

stream.on('finish', () => {
  console.log('large.csv generated successfully');
});

