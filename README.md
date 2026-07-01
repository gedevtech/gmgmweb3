# gmgm-web3 🚀

Welcome to **gmgm-web3**, the ultimate centralized hub designed to educate, guide, and connect builders with every growth and earning opportunity within the Stellar ecosystem. 

Whether you are looking for ecosystem grants, active hackathons, venture funding, job postings, free developer courses, live bounty hunting, or a directory of past security vulnerabilities and hacks to learn from—`gmgm-web3` has it covered.

This repository serves as a complete, production-grade **full-stack reference architecture** demonstrating how to seamlessly integrate Stellar smart contracts with a modern web stack.

---

## 🛠️ Tech Stack

The project is structured as a monorepo or multi-directory workspace split into three core layers:

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | [Next.js](https://nextjs.org/) | Highly responsive, SEO-friendly user interface and dashboard. |
| **Backend** | [NestJS](https://nestjs.com/) | Robust, scalable REST/GraphQL API handling caching, data aggregation, and off-chain logic. |
| **Smart Contracts** | [Stellar / Soroban](https://soroban.stellar.org/) | Rust-based smart contracts handling on-chain user milestones, bounty distributions, or certification verification. |

---

## 💡 Core Features

*   **Opportunity Aggregator:** A unified directory for Grants, Hackathons, and Venture Capital funding.
*   **Talent Board:** Active job postings and curated bounties specifically for the Stellar ecosystem.
*   **Academy:** Free courses, interactive trainings, and structured paths to go from zero to Soroban master.
*   **Security Hub:** A specialized directory tracking historical ecosystem vulnerabilities, exploits, and best safety practices.

---

## 📁 Repository Structure

```text
gmgm-web3/
├── contracts/          # Stellar / Soroban smart contracts (Rust)
├── frontend/           # Next.js web application
└── backend/            # NestJS API gateway & services
