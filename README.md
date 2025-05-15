# inst377singh_patel
# Internship & Job Finder Portal

## Project Title
**Centralized Internship & Job Finder Platform**

## Description
Many students struggle to find relevant internships and part-time jobs due to fragmented listings across various job boards. Our centralized platform solves this problem by aggregating listings from multiple public APIs into a single, user-friendly web application.

The platform enables users to:
- Search and filter job/internship listings by major, location, deadlines, and eligibility.
- Track application statuses via a personalized dashboard.
- Receive automated email notifications for new relevant opportunities.

By consolidating career-related resources, we help students stay organized, reduce missed deadlines, and access broader opportunities faster.

## Target Browsers
This application is built to work on modern desktop and mobile browsers. Specifically tested on:
- **Google Chrome (latest version)**
- **Mozilla Firefox (latest version)**
- **Safari on iOS 15+**
- **Chrome on Android 10+**

## Link to Developer Manual
See the **Developer Manual** section below for setup instructions, API integrations, and future roadmap details.
---

# Developer Manual

## Overview
This Developer Manual serves as a technical reference for future contributors and maintainers of the Internship & Job Finder Platform. It includes setup procedures, API mappings, and information on key application components.

---
## 1. Installation Instructions

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- Git
- A code editor (e.g., VS Code)

### Installation Steps
```bash
git clone https://github.com/isingh1915/inst377singh_patel
cd internship-job-finder
npm install
```
## 2. Running the Application

#### To start the development server:
```bash
npm run dev
```
#### To build the app for production:
```bash
npm run build
```
#### To preview the production build:
```bash
npm run preview
```
#### The app will run at: http://localhost:3001

## 3. Running Tests

### Test setup is planned for a future update. You may integrate tools like:

- Jest – for unit testing
- Cypress – for end-to-end testing
- Once a framework is installed, you can run:

```bash
npm run test
```

## 4. API Documentation

### External APIs Used

#### Adzuna API
Endpoint: https://api.adzuna.com/v1/api/jobs/us/search/1
Method: GET
Purpose: Provides commercial job and internship listings.
Fields Used: Job title, company name, location, salary, category.

#### USAJOBS API
Endpoint: https://data.usajobs.gov/api/Search
Method: GET
Purpose: Government internships and job postings.
Fields Used: Job title, agency, location, start/end dates, deadlines.

#### Open Skills API
Endpoints: /occupations, /skills
Method: GET
Purpose: Maps job listings to relevant skill tags.
Fields Used: Skill names, skill types, job-skill relevance.

### API Integration by Page

#### Home Page
Features: Search bar, featured internships, filters (location, job title, deadline).
APIs Used: Adzuna, USAJOBS

#### Job Listing Page
Features: Aggregated results, filters (major, location, eligibility, deadline), sorting.
APIs Used: Adzuna, USAJOBS, Open Skills API

#### Dashboard Page
Features: Saved jobs, application tracking, reminders.
APIs Used: None directly (uses localStorage or future user account storage)
Email notifications: To be implemented via SendGrid or SMTP integration.

#### About Page
Features: Project mission, stakeholders, benefits.
APIs Used: None (static content)

#### Help Page
Features: FAQs, user guidance.
APIs Used: None (static content)

## 5. Known Bugs & Limitations
- Duplicate job results may appear across APIs.

- API rate limiting may delay responses.

- No persistent user data — dashboard data is only saved locally.

- No authentication system implemented yet.

- Limited error handling for failed API calls.

### 6. Future Roadmap
- Add user authentication (e.g., Google OAuth)

- Implement persistent user data using Firebase or MongoDB

- Add email notifications with SendGrid API

- Improve dashboard UI with better deadline tracking

- Add comprehensive unit and E2E testing

- Enhance mobile responsiveness and accessibility (ARIA, keyboard nav)

- Improve API error handling and fallback behavior


