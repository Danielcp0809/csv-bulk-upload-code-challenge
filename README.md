# CSV Bulk Upload Challenge

## Overview

This repository contains a **technical interview challenge** for a **Full Stack Developer** role.

The goal is to **design and partially implement a scalable solution** to upload and process a **CSV file with over 1,000,000 rows** into a **MySQL database**, using **Node.js + TypeScript**.

This is **not** a test of how fast you can finish coding.
It is a test of **architecture, performance, scalability, and decision-making**.

---

## Tech Stack

- Node.js (>= 18)
- TypeScript
- MySQL 8 (Dockerized)
- CSV streaming
- AWS Lambda / S3 (conceptual, not required to deploy)

---

## Project Structure

```
csv-bulk-upload-challenge/
├── src/
│   ├── handler.ts              # Entry point (Lambda-style)
│   ├── services/
│   │   ├── csvProcessor.ts     # TODO: CSV streaming logic
│   │   └── dbWriter.ts         # TODO: DB inserts
│   ├── db/
│   │   ├── connection.ts       # MySQL connection (ready)
│   │   └── schema.sql          # DB schema
│   └── utils/
│       └── logger.ts
├── data/
│   └── large.csv              # File to be generated (10K rows)
├── scripts/
│   └── generateCsv.ts          # CSV generator (optional)
├── docker-compose.yml
├── .env.example
├── tsconfig.json
├── package.json
└── README.md
```

---

## Prerequisites

Make sure you have the following installed:

```bash
node -v        # >= 18
npm -v
docker -v
docker-compose -v
```

---

## Step-by-Step: How to Run the Project Locally

### 1. Configure environment variables

Create a `.env` file from the example:

```bash
cp .env.example .env
```

No changes are required for local execution.

---

### 2. Start MySQL using Docker

```bash
docker-compose up -d
```

Verify the container is running:

```bash
docker ps
```

You should see a MySQL container running.

---

### 3. Verify database initialization (optional)

Connect to MySQL:

```bash
docker exec -it csv_mysql mysql -uroot -proot
```

Then run:

```sql
USE csv_db;
SHOW TABLES;
DESCRIBE records;
```

The `records` table should exist.

---

### 4. Install Node.js dependencies

```bash
npm install
```

---

### 6. Run the application

```bash
npm run dev
```

Expected output:

```
CSV Bulk Upload Challenge
Implement the solution starting here
```

This confirms:
- TypeScript is working
- Node.js is running
- The entry point is correctly configured

---

## The Challenge

You are expected to:

1. **Design** a solution that can handle CSV files with **1,000,000+ rows**
2. **Process the CSV using streams** (do not load the file into memory)
3. **Insert data efficiently** into MySQL using batch operations
4. Handle **errors and partial failures**
5. Explain how this would **scale in a real AWS environment**

You do **not** need to:
- Fully finish the implementation
- Deploy to AWS
- Handle authentication or UI

---

## Guidelines

- Prefer **clarity over completeness**
- Focus on **performance and scalability**
- Explain trade-offs and assumptions
- You may write partial implementations and explain the rest verbally

---

## Notes

- The provided CSV file is small on purpose
- Assume real production files are much larger

## NOT ALLOWED
- AI Tools: ChatGPT, Copilot or any code generators.
- Copying AI generated code provided by web browser like google (Gemini) when a search is performing.

## ALLOWED AND RECOMMENDED
- Use your preferred IDE or code editor (VSCode, Prisma, etc.) with all AI code generator tools **DISABLED**.
- Standard IDE **autocomplete** features.
- Official documentation ([Node](https://nodejs.org/docs/latest/api/), [mysql2](https://sidorares.github.io/node-mysql2/docs), [csv-parser](https://www.npmjs.com/package/csv-parser) docker, AWS, etc.)

---

## Optional: Generate a Larger CSV for Testing

```bash
npx ts-node scripts/generateCsv.ts
```

This will generate a larger CSV file under the `data/` directory.

---

## Reset the Environment

To reset the database completely:

```bash
docker-compose down -v
docker-compose up -d
```

---

## Final Note

This challenge is designed to simulate **real-world backend problems**.
We care more about **how you think** than about how much code you write.

Good luck 🚀
