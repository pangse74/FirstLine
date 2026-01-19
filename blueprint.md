# Blueprint: FirstLine (퍼스트라인)

## 1. Overview

FirstLine is a web application that generates a "one-line first impression" from a user's photo. The goal is to create a fun, lighthearted, and highly shareable experience, encouraging viral spread on social media.

### Core User Flow
1.  **Upload:** User uploads a photo of their face.
2.  **Analyze:** The application presents a first impression.
3.  **Share:** The user receives a visually appealing "Result Card" that they can share on social media.

## 2. Implemented Features

- **MVP Frontend Prototype:**
    - **Project Setup & Foundation:** Created `blueprint.md` to track project progress.
    - **Main Page UI:** Created a landing/upload page component (`HomePage.jsx`) with a clean layout.
    - **Image Handling:** Added functionality to select a local image file and store it in the application's state.
    - **Result Card Component:** Created a reusable `ResultCard.jsx` component to display the user's image and a randomly selected "first impression" phrase.
    - **Application Logic & Routing:** Used `react-router-dom` to manage navigation between the upload page and the results page.
    - **Modern Styling:** Styled all components to be visually appealing, responsive, and mobile-first.
    - **'Try Again' Functionality:** Implemented a button to allow the user to return to the upload page.
- **Publisher Information:** Added publisher information to the "About Us" page to comply with AdSense policies. This includes the service name, operator, and contact information, and has been internationalized into all supported languages.

## 3. Current Development Plan

The project is currently in a maintenance phase, addressing policy compliance issues.

### Phase 2: Policy Compliance

-   **[completed] Task 1: Add Publisher Information**
    -   Add a "Publisher Information" section to the "About Us" page.
    -   Include "Service Name," "Operator," and "Contact" details.
    -   Translate the new information into all supported languages (English, Spanish, Japanese, Korean, Vietnamese).