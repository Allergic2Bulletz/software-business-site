# Wani website

A small static site for the CS 405 Survey 1 / Website assignment, served by GitHub Pages. Plain HTML and CSS, no build step.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Landing page: slogan, the two feature sections, call to action |
| `contact.html` | Contact form |
| `css/theme.css` | Colors, fonts and sizes. Edit or swap this to restyle everything |
| `css/base.css` | Shared layout: header, nav, buttons, footer |
| `css/home.css` | Landing page sections, including the fading art |
| `css/contact.css` | Contact form styles |
| `js/contact.js` | Shows a thank-you note after the form is sent |
| `assets/*.svg` | Logo (placeholder) and the two section graphics |

## Connect the contact form (one-time)

The contact form sends its answers to a Google Form, so responses land in your Google account.

1. Create a Google Form with three short-answer questions: Name, Email, Message.
2. Click the three dots (top right) and choose **Get pre-filled link**. Type `NAME`, `EMAIL` and `MESSAGE` into the fields and click **Get link**, then copy it.
3. The link looks like `https://docs.google.com/forms/d/e/<FORM_ID>/viewform?entry.123=NAME&entry.456=EMAIL&entry.789=MESSAGE`.
4. In `contact.html`, replace `FORM_ID` in the form's `action` with `<FORM_ID>`, and replace `entry.1111111111`, `entry.2222222222` and `entry.3333333333` with the three `entry.` numbers from the link.
5. Submit a test from the live site and check the form's Responses tab.

In the Google Form's settings, leave "Collect email addresses" off and "Limit to 1 response" off, or submissions from the site will fail.

## Publish

In the repository on GitHub: **Settings → Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`. The site appears at `https://<username>.github.io/software-business-site/` a minute or two after each push.

To preview locally, open `index.html` in a browser.
