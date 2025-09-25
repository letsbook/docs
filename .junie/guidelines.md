# Frontend Coding Standards

---

## Project context

*This section describes the "why" behind the project, the problems it aims to solve, and the desired user experience.*

### Problem Statement

This project is the customer facing documentation for Let's Book. Let's Book is software for managing boat rental companies. Managing boat rentals involves complex tasks like handling bookings, scheduling, payments, fleet tracking, customer communication, and staffing for check-ins/outs. Traditional methods or disparate systems can be inefficient, time-consuming, and costly, hindering growth and negatively impacting the customer experience. 

### Target Audience

The primary users are **Boat Rental Companies** of all sizes, including:
- Small to large operators
- Businesses with multiple locations
- Operators of various fleet types (e.g., city electric boats, sailboats, yacht charters)

It also caters specifically to **Boat Clubs** with membership systems.

### Proposed Solution

Let's Book is an **all-in-one boat rental management software (SaaS)** designed specifically for the needs of boat rental operators and clubs.

**Core Value Proposition:** To centralize and streamline all aspects of boat rental management, automating processes, improving efficiency, and enhancing the customer experience.

**Key Features:**
- Embeddable online booking widget for the operator's website.
- Automated booking confirmation and payment processing.
- Comprehensive dashboard for managing bookings, scheduling, and fleet availability.
- Customer communication tools.
- Customizable branding to match the operator's identity.
- Optional "Connected Fleet" hardware add-on for customer self-service pickup/operation via smartphone.
- Reporting and performance visibility.
- REST API for potential integrations (`developers.lets-book.com`).

### User Experience Goals

**For End-Customers (Renters):**
- Simple, clear, and seamless online booking process.
- Immediate booking confirmation.
- Timely and relevant communication.
- Effortless self-service pickup (with Connected Fleet).

**For Operators (Rental Companies/Clubs):**
- **Efficiency:** Streamline operations, automate manual tasks (bookings, payments).
- **Control:** Gain complete visibility and control over bookings, scheduling, fleet, payments, and communication.
- **Cost/Time Savings:** Reduce administrative overhead and potentially staffing needs (especially with Connected Fleet).
- **Flexibility:** Customize branding, offer add-ons, manage different fleet types.
- **Growth:** Provide tools to manage and scale the business effectively.

---

## Tone of voice

- Texts should be to the point but allow room for wittiness.
- Rewrite the texts where useful and try to maintain anchors
- Leave page titles intact
- Write without the use of em dashes - ever
- Titles should be in European style, so not capitalized

---

## Build and debug

- **Don't use watch mode.** So NEVER use `npm run start` or `npm run serve`.
- **Building the app is done using docusaurus built-in bundler.** Use `npm run build` to build the app. 
- **Never check prettier, just fix potential issues** Use `npm run prettier` to run it.
- **Always check the types after a change** Use `npx tsc` to run it.
- **Debugging the app is done using the browser's developer tools.** Use the "Sources" tab to view and debug the code.
- Check the `./technical-guidelines.md` file when working with code (css/ts files).

---

## Quality checks

**Make sure all generated code passes the Prettier check before completing the task**
