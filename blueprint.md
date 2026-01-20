# Overview

This application is a personality analysis tool that generates a descriptive phrase based on an uploaded image. It offers several analysis types, such as generating a character or finding similar celebrity images. The core of the application is to provide a fun, shareable result to the user.

# Implemented Features

*   **Image-based Analysis**: Users can upload an image to receive a personality analysis.
*   **Multiple Analysis Types**: The app supports different kinds of analysis, including 'character' and 'celebrity' look-a-likes.
*   **Dynamic Phrase Generation**: A random phrase is selected from a predefined list to describe the user's image.
*   **Localization**: The UI is translated into multiple languages using `i18next`.
*   **Theming**: The application supports light and dark modes.
*   **Share/Download Results**: Users can download an image of their result card for sharing.

# Recent Enhancements & Fixes

*   **Syntax Fix in `ResultCard.jsx`**: Resolved a critical syntax error in `src/components/ResultCard.jsx` by removing a misplaced `catch` block that was causing compilation failures.
*   **Localized Download Progress Feedback**:
    *   Added Korean translation keys (`captureInProgress`, `captureSuccess`) to `src/locales/ko/translation.json` for enhanced user experience.
    *   Integrated a download progress indicator in `src/components/ResultCard.jsx`'s `handleDownloadImage` function, displaying messages in Korean during image capture and on successful completion. The download button is also disabled during this process.
*   **Centered Text in Captured Image**: Modified `src/components/ResultCard.jsx` to ensure that the core phrase and its explanation are horizontally centered within the generated image when captured, improving visual presentation.
*   **Debugged Copy Text Functionality**: Investigated and confirmed the functionality of the "문구 복사" (copy text) button. Added and later removed debugging console logs from `src/components/ResultCard.jsx` for this purpose. The issue of the page not loading was resolved by guiding the user to use the Firebase Studio preview URL instead of `localhost`.
*   **Removed "Image Capture In Progress" Popup**: Removed the intrusive `alert` popup that displayed "이미지 캡처 중..." during the image download process, as per user feedback. The visual feedback on the button itself (disabled state and text change) remains.
*   **Dynamic Image Capture Width**: Removed the fixed width from the image capture container in `src/components/ResultCard.jsx`, allowing the generated image to automatically adjust its width to the content, as per user request.

# Current Task: Implement Sharing Feature

The user wants to be able to share the result card, which includes an image and a descriptive phrase.

## Plan

1.  **[COMPLETED]** Identify the component responsible for displaying the result (`ResultCard.jsx`).
2.  **[COMPLETED]** Locate the part of the component that needs to be captured. A `div` with `contentToCaptureRef` was found, which is perfect for this purpose.
3.  **[COMPLETED]** Implement the `handleShareOrDownload` function to capture the `contentToCaptureRef` element using the `html2canvas` library.
4.  **[COMPLETED]** The captured content will be converted to a PNG image.
5.  **[COMPLETED]** A download of the image will be triggered in the user's browser.
6.  **[COMPLETED]** Run build to verify changes.
7.  **[COMPLETED]** Update blueprint.md.
