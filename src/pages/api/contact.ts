import type { APIRoute } from 'astro';

export const prerender = false;

const FONT_STACK =
  "'Plus Jakarta Sans', 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const GOLD = '#FEC12C';
const DARK = '#1a1c1c';
const BODY_BG = '#f3f3f1';
const CARD_BG = '#ffffff';
const TEXT_PRIMARY = '#1a1c1c';
const TEXT_SECONDARY = '#5a5d5e';
const TEXT_MUTED = '#8a8d8e';
const BORDER = '#e8e8e5';
const LOGO_URL = 'https://styris.sk/logo.png';
const SITE_URL = 'https://styris.sk';
const DUET_URL = 'https://duetweb.online';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function projectTypeLabel(type: string): string {
  return type || 'Neuvedené';
}

function buildUserEmail(name: string, projectType: string): string {
  const firstName = escapeHtml(name.split(/\s+/)[0] || name);
  const safeType = escapeHtml(projectTypeLabel(projectType));

  return `<!DOCTYPE html>
<html lang="sk" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Ďakujeme za vašu správu — Styris</title>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<style>
table { border-collapse: collapse; }
td { font-family: Arial, sans-serif; }
</style>
<![endif]-->
<style>
body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
body { margin: 0; padding: 0; width: 100% !important; min-width: 100% !important; background-color: ${BODY_BG}; }
@media only screen and (max-width: 600px) {
  .email-container { width: 100% !important; max-width: 100% !important; }
  .fluid { width: 100% !important; max-width: 100% !important; height: auto !important; }
  .stack-column { display: block !important; width: 100% !important; }
  .mobile-pad { padding-left: 24px !important; padding-right: 24px !important; }
}
</style>
</head>
<body style="margin:0;padding:0;background-color:${BODY_BG};font-family:${FONT_STACK};">
<center style="width:100%;background-color:${BODY_BG};">

<!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" align="center"><tr><td><![endif]-->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;" class="email-container">

<!-- Top spacer -->
<tr><td style="height:32px;font-size:1px;line-height:1px;">&nbsp;</td></tr>

<!-- Logo header -->
<tr>
<td align="center" style="padding:0 0 28px 0;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="background:linear-gradient(180deg,#202223 0%,#131414 100%);background-color:#1a1c1c;border-radius:14px;padding:14px 22px;">
<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height:50px;v-text-anchor:middle;width:100px;" arcsize="28%" fillcolor="#1a1c1c" stroke="f"><v:textbox inset="0,0,0,0"><center><![endif]-->
<img src="${LOGO_URL}" alt="Styris" width="80" style="display:block;height:22px;width:auto;max-width:100px;" />
<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
</td>
</tr>
</table>
</td>
</tr>

<!-- Main card -->
<tr>
<td>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${CARD_BG};border-radius:16px;overflow:hidden;border:1px solid ${BORDER};">

<!-- Gold accent bar -->
<tr><td style="height:4px;background-color:${GOLD};font-size:1px;line-height:1px;">&nbsp;</td></tr>

<!-- Check icon -->
<tr>
<td align="center" style="padding:40px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="width:56px;height:56px;background-color:#fef8e7;border-radius:50%;">
<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNkw5IDE3TDQgMTIiIHN0cm9rZT0iI0ZFQzEyQyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==" alt="" width="28" height="28" style="display:block;" />
</td>
</tr>
</table>
</td>
</tr>

<!-- Heading -->
<tr>
<td align="center" style="padding:24px 40px 0 40px;font-family:${FONT_STACK};font-size:24px;font-weight:700;line-height:32px;color:${TEXT_PRIMARY};letter-spacing:-0.02em;" class="mobile-pad">
Ďakujeme, ${firstName}!
</td>
</tr>

<!-- Subheading -->
<tr>
<td align="center" style="padding:12px 40px 0 40px;font-family:${FONT_STACK};font-size:16px;line-height:26px;color:${TEXT_SECONDARY};" class="mobile-pad">
Vašu správu ohľadom <strong style="color:${TEXT_PRIMARY};">${safeType}</strong> sme prijali. Prečítame si ju a&nbsp;ozveme sa vám <strong style="color:${TEXT_PRIMARY};">do 48 hodín</strong>.
</td>
</tr>

<!-- Divider -->
<tr>
<td style="padding:32px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr><td style="height:1px;background-color:${BORDER};font-size:1px;line-height:1px;">&nbsp;</td></tr>
</table>
</td>
</tr>

<!-- Steps -->
<tr>
<td style="padding:28px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">

<!-- Step 1 -->
<tr>
<td valign="top" style="width:36px;padding-bottom:20px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="width:32px;height:32px;background-color:${GOLD};border-radius:50%;font-family:${FONT_STACK};font-size:14px;font-weight:700;color:${DARK};line-height:32px;">1</td>
</tr>
</table>
</td>
<td valign="top" style="padding:4px 0 20px 12px;">
<p style="margin:0;font-family:${FONT_STACK};font-size:15px;font-weight:600;line-height:20px;color:${TEXT_PRIMARY};">Preštudujeme váš dopyt</p>
<p style="margin:4px 0 0 0;font-family:${FONT_STACK};font-size:14px;line-height:20px;color:${TEXT_SECONDARY};">Preštudujeme detaily vášho projektu.</p>
</td>
</tr>

<!-- Step 2 -->
<tr>
<td valign="top" style="width:36px;padding-bottom:20px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="width:32px;height:32px;background-color:${GOLD};border-radius:50%;font-family:${FONT_STACK};font-size:14px;font-weight:700;color:${DARK};line-height:32px;">2</td>
</tr>
</table>
</td>
<td valign="top" style="padding:4px 0 20px 12px;">
<p style="margin:0;font-family:${FONT_STACK};font-size:15px;font-weight:600;line-height:20px;color:${TEXT_PRIMARY};">Kontaktujeme vás</p>
<p style="margin:4px 0 0 0;font-family:${FONT_STACK};font-size:14px;line-height:20px;color:${TEXT_SECONDARY};">Ozveme sa e-mailom alebo telefonicky.</p>
</td>
</tr>

<!-- Step 3 -->
<tr>
<td valign="top" style="width:36px;padding-bottom:4px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="width:32px;height:32px;background-color:${GOLD};border-radius:50%;font-family:${FONT_STACK};font-size:14px;font-weight:700;color:${DARK};line-height:32px;">3</td>
</tr>
</table>
</td>
<td valign="top" style="padding:4px 0 4px 12px;">
<p style="margin:0;font-family:${FONT_STACK};font-size:15px;font-weight:600;line-height:20px;color:${TEXT_PRIMARY};">Pripravíme ponuku</p>
<p style="margin:4px 0 0 0;font-family:${FONT_STACK};font-size:14px;line-height:20px;color:${TEXT_SECONDARY};">Pošleme návrh riešenia a orientačnú cenu. 3D vizualizáciu pripravíme až po odsúhlasení ceny.</p>
</td>
</tr>

</table>
</td>
</tr>

<!-- Divider -->
<tr>
<td style="padding:28px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr><td style="height:1px;background-color:${BORDER};font-size:1px;line-height:1px;">&nbsp;</td></tr>
</table>
</td>
</tr>

<!-- CTA button -->
<tr>
<td align="center" style="padding:28px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="border-radius:10px;background-color:${GOLD};">
<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height:48px;v-text-anchor:middle;width:220px;" arcsize="21%" fillcolor="${GOLD}" stroke="f"><center><![endif]-->
<a href="${SITE_URL}/prace" target="_blank" style="display:inline-block;padding:14px 32px;font-family:${FONT_STACK};font-size:15px;font-weight:600;color:${DARK};text-decoration:none;letter-spacing:-0.01em;">Pozrite si naše práce &rarr;</a>
<!--[if mso]></center></v:roundrect><![endif]-->
</td>
</tr>
</table>
</td>
</tr>

<!-- Bottom padding -->
<tr><td style="height:40px;font-size:1px;line-height:1px;">&nbsp;</td></tr>

</table>
</td>
</tr>

<!-- Footer -->
<tr>
<td align="center" style="padding:28px 40px 12px 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="font-family:${FONT_STACK};font-size:13px;line-height:20px;color:${TEXT_MUTED};">
<strong style="color:${TEXT_SECONDARY};">Styris</strong> &mdash; Kovové konštrukcie na mieru
</td>
</tr>
<tr>
<td align="center" style="padding-top:6px;font-family:${FONT_STACK};font-size:13px;line-height:20px;color:${TEXT_MUTED};">
Košice · celé Slovensko &bull; <a href="tel:+421940896866" style="color:${TEXT_MUTED};text-decoration:none;">+421 940 896 866</a>
</td>
</tr>
<tr>
<td align="center" style="padding-top:4px;font-family:${FONT_STACK};font-size:13px;line-height:20px;">
<a href="${SITE_URL}" style="color:${GOLD};text-decoration:none;">styris.sk</a>
</td>
</tr>
<tr>
<td align="center" style="padding-top:12px;font-family:${FONT_STACK};font-size:12px;line-height:18px;color:${TEXT_MUTED};">
Dizajn a vývoj: <a href="${DUET_URL}" target="_blank" style="color:${TEXT_SECONDARY};text-decoration:none;font-weight:600;">DUET WEB</a>
</td>
</tr>
</table>
</td>
</tr>

<!-- Bottom spacer -->
<tr><td style="height:32px;font-size:1px;line-height:1px;">&nbsp;</td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->

</center>
</body>
</html>`;
}

function buildAdminEmail(
  name: string,
  email: string,
  projectType: string,
  message: string,
  phone: string,
): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeType = escapeHtml(projectTypeLabel(projectType));
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  const safePhone = phone ? escapeHtml(phone) : '—';
  const replySubject = encodeURIComponent(`Re: Dopyt — ${projectType || 'Nový projekt'}`);
  const replyBody = encodeURIComponent(`Dobrý deň ${name},\n\nďakujeme za váš záujem o naše služby.\n\n`);
  const mailtoLink = `mailto:${email}?subject=${replySubject}&body=${replyBody}`;
  const now = new Date();
  const dateStr = now.toLocaleDateString('sk-SK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Bratislava',
  });

  return `<!DOCTYPE html>
<html lang="sk" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Nový dopyt — ${safeName}</title>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<style>
table { border-collapse: collapse; }
td { font-family: Arial, sans-serif; }
</style>
<![endif]-->
<style>
body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
body { margin: 0; padding: 0; width: 100% !important; min-width: 100% !important; background-color: ${BODY_BG}; }
@media only screen and (max-width: 600px) {
  .email-container { width: 100% !important; max-width: 100% !important; }
  .fluid { width: 100% !important; max-width: 100% !important; height: auto !important; }
  .mobile-pad { padding-left: 24px !important; padding-right: 24px !important; }
}
</style>
</head>
<body style="margin:0;padding:0;background-color:${BODY_BG};font-family:${FONT_STACK};">
<center style="width:100%;background-color:${BODY_BG};">

<!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" align="center"><tr><td><![endif]-->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;" class="email-container">

<!-- Top spacer -->
<tr><td style="height:32px;font-size:1px;line-height:1px;">&nbsp;</td></tr>

<!-- Logo header -->
<tr>
<td align="center" style="padding:0 0 28px 0;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="background:linear-gradient(180deg,#202223 0%,#131414 100%);background-color:#1a1c1c;border-radius:14px;padding:14px 22px;">
<img src="${LOGO_URL}" alt="Styris" width="80" style="display:block;height:22px;width:auto;max-width:100px;" />
</td>
</tr>
</table>
</td>
</tr>

<!-- Main card -->
<tr>
<td>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${CARD_BG};border-radius:16px;overflow:hidden;border:1px solid ${BORDER};">

<!-- Gold accent bar -->
<tr><td style="height:4px;background-color:${GOLD};font-size:1px;line-height:1px;">&nbsp;</td></tr>

<!-- Badge + heading -->
<tr>
<td style="padding:32px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="padding:5px 12px;background-color:#fef8e7;border-radius:6px;font-family:${FONT_STACK};font-size:12px;font-weight:700;color:#b8860b;letter-spacing:0.06em;text-transform:uppercase;">
NOVÝ DOPYT
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="padding:16px 40px 0 40px;font-family:${FONT_STACK};font-size:22px;font-weight:700;line-height:28px;color:${TEXT_PRIMARY};letter-spacing:-0.02em;" class="mobile-pad">
${safeName}
</td>
</tr>

<tr>
<td style="padding:4px 40px 0 40px;font-family:${FONT_STACK};font-size:13px;line-height:20px;color:${TEXT_MUTED};" class="mobile-pad">
${dateStr}
</td>
</tr>

<!-- Divider -->
<tr>
<td style="padding:24px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr><td style="height:1px;background-color:${BORDER};font-size:1px;line-height:1px;">&nbsp;</td></tr>
</table>
</td>
</tr>

<!-- Data rows -->
<tr>
<td style="padding:24px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">

<!-- Email -->
<tr>
<td style="padding-bottom:18px;" valign="top">
<p style="margin:0 0 2px 0;font-family:${FONT_STACK};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${TEXT_MUTED};">E-mail</p>
<p style="margin:0;font-family:${FONT_STACK};font-size:15px;line-height:22px;color:${TEXT_PRIMARY};">
<a href="mailto:${safeEmail}" style="color:${TEXT_PRIMARY};text-decoration:none;">${safeEmail}</a>
</p>
</td>
</tr>

<!-- Phone -->
<tr>
<td style="padding-bottom:18px;" valign="top">
<p style="margin:0 0 2px 0;font-family:${FONT_STACK};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${TEXT_MUTED};">Telefón</p>
<p style="margin:0;font-family:${FONT_STACK};font-size:15px;line-height:22px;color:${TEXT_PRIMARY};">${safePhone}</p>
</td>
</tr>

<!-- Project type -->
<tr>
<td style="padding-bottom:18px;" valign="top">
<p style="margin:0 0 2px 0;font-family:${FONT_STACK};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${TEXT_MUTED};">Typ projektu</p>
<p style="margin:0;font-family:${FONT_STACK};font-size:15px;line-height:22px;color:${TEXT_PRIMARY};">${safeType}</p>
</td>
</tr>

<!-- Message -->
<tr>
<td valign="top">
<p style="margin:0 0 2px 0;font-family:${FONT_STACK};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${TEXT_MUTED};">Správa</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:8px;">
<tr>
<td style="padding:16px;background-color:${BODY_BG};border-radius:10px;border:1px solid ${BORDER};font-family:${FONT_STACK};font-size:15px;line-height:24px;color:${TEXT_PRIMARY};">
${safeMessage}
</td>
</tr>
</table>
</td>
</tr>

</table>
</td>
</tr>

<!-- Divider -->
<tr>
<td style="padding:28px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr><td style="height:1px;background-color:${BORDER};font-size:1px;line-height:1px;">&nbsp;</td></tr>
</table>
</td>
</tr>

<!-- Reply button -->
<tr>
<td align="center" style="padding:28px 40px 0 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="border-radius:10px;background-color:${GOLD};">
<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height:48px;v-text-anchor:middle;width:220px;" arcsize="21%" fillcolor="${GOLD}" stroke="f"><center><![endif]-->
<a href="${mailtoLink}" target="_blank" style="display:inline-block;padding:14px 32px;font-family:${FONT_STACK};font-size:15px;font-weight:600;color:${DARK};text-decoration:none;letter-spacing:-0.01em;">Odpovedať na dopyt &rarr;</a>
<!--[if mso]></center></v:roundrect><![endif]-->
</td>
</tr>
</table>
</td>
</tr>

<!-- Secondary action -->
<tr>
<td align="center" style="padding:12px 40px 0 40px;" class="mobile-pad">
<a href="tel:${phone ? phone.replace(/\s/g, '') : ''}" style="font-family:${FONT_STACK};font-size:14px;color:${TEXT_SECONDARY};text-decoration:none;">${safePhone !== '—' ? `Zavolať: ${safePhone}` : ''}</a>
</td>
</tr>

<!-- Bottom padding -->
<tr><td style="height:36px;font-size:1px;line-height:1px;">&nbsp;</td></tr>

</table>
</td>
</tr>

<!-- Footer -->
<tr>
<td align="center" style="padding:28px 40px 12px 40px;" class="mobile-pad">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="font-family:${FONT_STACK};font-size:13px;line-height:20px;color:${TEXT_MUTED};">
<strong style="color:${TEXT_SECONDARY};">Styris</strong> &mdash; Interná notifikácia
</td>
</tr>
<tr>
<td align="center" style="padding-top:4px;font-family:${FONT_STACK};font-size:13px;line-height:20px;">
<a href="${SITE_URL}" style="color:${GOLD};text-decoration:none;">styris.sk</a>
</td>
</tr>
<tr>
<td align="center" style="padding-top:12px;font-family:${FONT_STACK};font-size:12px;line-height:18px;color:${TEXT_MUTED};">
Dizajn a vývoj: <a href="${DUET_URL}" target="_blank" style="color:${TEXT_SECONDARY};text-decoration:none;font-weight:600;">DUET WEB</a>
</td>
</tr>
</table>
</td>
</tr>

<!-- Bottom spacer -->
<tr><td style="height:32px;font-size:1px;line-height:1px;">&nbsp;</td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->

</center>
</body>
</html>`;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, type, message, phone } = body as {
      name?: string;
      email?: string;
      type?: string;
      message?: string;
      phone?: string;
    };

    if (!name?.trim() || !email?.trim() || !type?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Vyplňte všetky povinné polia.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: 'Zadajte platnú e-mailovú adresu.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const env = (typeof process !== 'undefined' && process.env) || {};
    const apiKey = env.MAILJET_API_KEY || import.meta.env.MAILJET_API_KEY;
    const apiSecret = env.MAILJET_API_SECRET || import.meta.env.MAILJET_API_SECRET;
    const fromEmail =
      env.MAILJET_FROM_EMAIL || import.meta.env.MAILJET_FROM_EMAIL || 'info@styris.sk';
    const adminEmails = (
      env.ADMIN_EMAILS ||
      import.meta.env.ADMIN_EMAILS ||
      'styris.sk@gmail.com'
    )
      .split(',')
      .map((e: string) => e.trim())
      .filter(Boolean);

    if (!apiKey || !apiSecret) {
      console.error('[contact] Missing Mailjet API credentials');
      return new Response(
        JSON.stringify({ error: 'Chyba servera. Skúste to prosím neskôr.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedType = type.trim();
    const trimmedMessage = message.trim();
    const trimmedPhone = phone?.trim() || '';

    const userHtml = buildUserEmail(trimmedName, trimmedType);
    const adminHtml = buildAdminEmail(
      trimmedName,
      trimmedEmail,
      trimmedType,
      trimmedMessage,
      trimmedPhone,
    );

    const messages = [
      {
        From: { Email: fromEmail, Name: 'Styris' },
        To: [{ Email: trimmedEmail, Name: trimmedName }],
        Subject: 'Ďakujeme za vašu správu — Styris',
        HTMLPart: userHtml,
        TextPart: `Dobrý deň ${trimmedName},\n\nďakujeme za vašu správu ohľadom "${trimmedType}". Prijali sme ju a ozveme sa vám do 48 hodín s návrhom riešenia a orientačnou cenou.\n\nS pozdravom,\nTím Styris\ninfo@styris.sk | +421 940 896 866\nstyris.sk\n\n—\nDizajn a vývoj: DUET WEB — ${DUET_URL}`,
      },
      ...adminEmails.map((adminEmail: string) => ({
        From: { Email: fromEmail, Name: 'Styris — Kontaktný formulár' },
        To: [{ Email: adminEmail }],
        ReplyTo: { Email: trimmedEmail, Name: trimmedName },
        Subject: `Nový dopyt: ${trimmedType} — ${trimmedName}`,
        HTMLPart: adminHtml,
        TextPart: `NOVÝ DOPYT\n\nMeno: ${trimmedName}\nEmail: ${trimmedEmail}\nTelefón: ${trimmedPhone || '—'}\nTyp projektu: ${trimmedType}\n\nSpráva:\n${trimmedMessage}\n\n—\nOdoslaná cez kontaktný formulár na styris.sk\nDizajn a vývoj: DUET WEB — ${DUET_URL}`,
      })),
    ];

    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
    const mjRes = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({ Messages: messages }),
    });

    if (!mjRes.ok) {
      const detail = await mjRes.text().catch(() => '');
      console.error('[contact] Mailjet API error:', mjRes.status, detail);
      return new Response(
        JSON.stringify({ error: 'Nepodarilo sa odoslať správu. Skúste to prosím neskôr.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('[contact] Email send failed:', err);
    return new Response(
      JSON.stringify({ error: 'Nepodarilo sa odoslať správu. Skúste to prosím neskôr.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
