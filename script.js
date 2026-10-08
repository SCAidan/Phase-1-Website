'use strict';
const form = document.getElementById('estimate-form');
const dateInput = document.getElementById('preferred-date');
const now = new Date();
const localToday = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
dateInput.min = localToday;
document.getElementById('year').textContent = now.getFullYear();
function validateDate() {
 dateInput.setCustomValidity(dateInput.value && dateInput.value < localToday ? 'Please choose today or a future date.' : '');
}
dateInput.addEventListener('input', validateDate);
form.addEventListener('submit', e => {
 validateDate();
 if (!form.reportValidity()) { e.preventDefault(); return; }
 // FormSubmit handles delivery and displays its own actual confirmation page.
 // Do not display a success message before the service accepts the request.
});
document.getElementById('text-request').addEventListener('click', () => {
 validateDate();
 if (!form.reportValidity()) return;
 const data = new FormData(form);
 const message = `Hi Steve, I'd like a free on-site estimate.\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nAddress: ${data.get('address')}\nService: ${data.get('service')}\nPreferred date: ${data.get('preferred_date') || 'Flexible'}\nPreferred time: ${data.get('preferred_time')}\nDetails: ${data.get('details') || 'None'}\nPlease contact me to confirm availability.`;
 const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
 window.location.href = `sms:+18316495939${ios ? '&' : '?'}body=${encodeURIComponent(message)}`;
 document.getElementById('form-status').textContent = 'Your messaging app will open with the request. Tap Send there to send it to Steve. If messaging is unavailable on this device, submit by email above.';
});
const dialog = document.getElementById('photo-dialog');
let opener;
document.querySelectorAll('.gallery-item').forEach(button => button.addEventListener('click', () => {
 opener = button;
 document.getElementById('large-photo').src = button.dataset.image;
 document.getElementById('large-photo').alt = button.dataset.caption;
 document.getElementById('photo-caption').textContent = button.dataset.caption;
 dialog.showModal();
}));
document.getElementById('close-photo').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => opener?.focus());
