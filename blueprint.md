# Blueprint: FirstLine (퍼스트라인)

## 1. Overview

FirstLine is a web application that generates a "one-line first impression" from a user's photo. The goal is to create a fun, lighthearted, and highly shareable experience, encouraging viral spread on social media.

### Core User Flow
1.  **Upload:** User uploads a photo of their face.
2.  **Analyze:** The application presents a first impression.
3.  **Share:** The user receives a visually appealing "Result Card" that they can share on social media.

## 2. Implemented Features

*(This section will be updated as features are developed.)*

## 3. Current Development Plan

The immediate goal is to build a Minimum Viable Product (MVP) prototype focusing on the core user experience.

### Phase 1: MVP Frontend Prototype

-   **[pending] Task 1: Project Setup & Foundation**
    -   Create `blueprint.md` to track project progress.
-   **[pending] Task 2: Build the Main Page UI**
    -   Create a landing/upload page component (`HomePage.jsx`).
    -   Design a clean layout with a title, a brief description, and a prominent photo upload area.
-   **[pending] Task 3: Implement Image Handling**
    -   Add functionality to select a local image file.
    -   Store the selected image in the application's state and display a preview.
-   **[pending] Task 4: Develop the Result Card Component**
    -   Create a reusable `ResultCard.jsx` component.
    -   The card will display:
        -   The user's uploaded image (with a circular crop).
        -   A randomly selected "first impression" phrase from the provided list of 30.
        -   A corresponding sub-text explanation.
        -   Mock social media share buttons.
-   **[pending] Task 5: Implement Application Logic & Routing**
    -   Use `react-router-dom` to manage navigation between the upload page and the results page.
    -   On image upload, navigate to the result page and display the `ResultCard` with the generated content.
-   **[pending] Task 6: Apply Modern Styling**
    -   Style all components to be visually appealing, responsive, and mobile-first.
    -   Incorporate modern design principles (typography, spacing, color palette, interactive effects).
-   **[pending] Task 7: Add 'Try Again' Functionality**
    -   Implement a button to allow the user to return to the upload page to start over.
