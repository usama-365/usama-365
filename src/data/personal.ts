// Personal information
export const NAME = "Usama";
export const PROFESSION = "Web & Mobile App Developer";
export const YEARS_OF_EXPERIENCE = calculateYearsOfExperience();

// Contact information
export const EMAIL = "usama-365@protonmail.com";
export const LINKED_IN_URL = "https://www.linkedin.com/in/usama365/";
export const GITHUB_URL = "https://github.com/usama-365";

// Assets
export const CV_NAME = "cv.pdf";
export const PROFILE_IMAGE_PATH = "/header.png";

// Helpers
function calculateYearsOfExperience(from = "2020-06-01") {
  return (
    Math.round(
      (Date.now() - Date.parse(from)) / (1000 * 60 * 60 * 24 * 365.25),
    ) || 0
  );
}
