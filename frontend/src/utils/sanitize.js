// C:\my-task-manager\frontend\src\utils\sanitize.js

import DOMPurify from 'dompurify';

export function sanitizeUserInput(userInput) {
  return DOMPurify.sanitize(userInput);
}

export function sanitizeHtmlContent(htmlContent) {
  return DOMPurify.sanitize(htmlContent);
}
