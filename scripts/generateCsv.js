import fs from 'fs';

const stream = fs.createWriteStream('data/large.csv');
stream.write('name,email,age\n');

for (let i = 0; i < 10000; i++) {
  stream.write(`User${i},user${i}@test.com,${20 + (i % 30)}\n`);
}

stream.end();
