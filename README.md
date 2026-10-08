# Monterey Pressure Wash

A responsive, static website for GitHub Pages. No build step or paid hosting is required. No pricing appears on the website.

## Publish on GitHub
1. Create a GitHub repository, such as `monterey-pressure-wash`.
2. Upload the **contents** of this folder (index.html, styles.css, script.js, assets and .nojekyll) to the repository root. Do not upload only the ZIP or put index.html inside an extra folder.
3. In Settings → Pages, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. GitHub will show the website address after deployment. Relative asset paths work for both repository sites and custom domains.

## Activate email requests — required before launch
The estimate form uses FormSubmit and sends requests to **stevodevo8@gmail.com**. GitHub Pages itself cannot send email or store bookings.
1. Publish the site, then submit a clearly marked test request from the live page.
2. Steve must open FormSubmit's activation email at stevodevo8@gmail.com and approve the form. Check spam if necessary.
3. Submit a second test request and confirm that Steve receives all details. Do not assume the initial activation request was delivered; send it again if needed.
4. FormSubmit may show a CAPTCHA and its hosted confirmation page. Email delivery depends on this third-party service and inbox filtering.

The form requests a preferred date and time. It does **not** reserve calendar slots or confirm availability. Steve must contact the customer to confirm the visit.

## Contact routes
- Calls: **831-521-9681** (the original call number supplied).
- Estimate texts: **831-649-5939** (the later number supplied for requests).
- Email estimate delivery: **stevodevo8@gmail.com**.

“Send request by text instead” opens the visitor's messaging app with the form details. The visitor must press Send. It does not send an automatic text or SMS notification for email submissions. Desktop SMS support depends on the device. To use 831-649-5939 for calls too, replace `+18315219681` and `831-521-9681` in index.html.

## Branding
The supplied “The Cleaning Machine” logo appears alongside the requested company name, Monterey Pressure Wash. Its blue palette is reflected in the site.

## Edit
- Content, contact info, form email: index.html.
- Colors and layout: styles.css.
- SMS destination and interactions: script.js.
- Photos: assets/ (optimized copies of the supplied photos). Extra photos are included for future swaps. The original video is not embedded to keep the site fast.

## Before sharing
Confirm both phone numbers, activate the email form, verify a real email and SMS test, and confirm that Steve has permission to publish these photos. No invented reviews, credentials, pricing or guarantees are included.

## Local preview
Run `python3 -m http.server 8000` in this folder, then open http://localhost:8000. Form delivery should be tested on the published site.
