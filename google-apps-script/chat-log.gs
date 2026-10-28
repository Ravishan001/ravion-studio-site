/**
 * Ravion Studio: website chat log
 *
 * Paste this into Extensions → Apps Script of a Google Sheet,
 * set the two values below, then Deploy → New deployment → Web app
 * (Execute as: Me, Who has access: Anyone). Copy the web app URL into
 * Vercel as CHAT_LOG_WEBHOOK and the SECRET as CHAT_LOG_SECRET.
 */

const SECRET = 'change-me-to-a-long-random-word';   // same as CHAT_LOG_SECRET in Vercel
const OWNER_EMAIL = 'ravionstudio1@gmail.com';       // where WhatsApp lead alerts go
const SHEET_NAME = 'Chats';

const HEADERS = ['Ref', 'Started', 'Last update', 'Language', 'Messages', 'Went to WhatsApp', 'Last visitor message', 'Full chat', 'Page'];

function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  if (!SECRET || data.secret !== SECRET) {
    return ContentService.createTextOutput('forbidden');
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet_();
    const messages = data.messages || [];
    const transcript = messages.map(function (m) { return m.from + ': ' + m.text; }).join('\n\n');
    const visitorMsgs = messages.filter(function (m) { return m.from === 'Visitor'; });
    const lastVisitor = visitorMsgs.length ? visitorMsgs[visitorMsgs.length - 1].text : '';
    const now = new Date();

    const row = findRow_(sheet, data.ref);
    const wentToWhatsApp = data.event === 'handoff';

    if (row) {
      const already = sheet.getRange(row, 6).getValue() === 'YES';
      sheet.getRange(row, 3, 1, 7).setValues([[
        now,
        data.lang === 'si' ? 'Sinhala' : 'English',
        messages.length,
        wentToWhatsApp || already ? 'YES' : '',
        lastVisitor,
        transcript,
        data.page || '',
      ]]);
    } else {
      sheet.appendRow([
        data.ref,
        now,
        now,
        data.lang === 'si' ? 'Sinhala' : 'English',
        messages.length,
        wentToWhatsApp ? 'YES' : '',
        lastVisitor,
        transcript,
        data.page || '',
      ]);
    }

    if (wentToWhatsApp && OWNER_EMAIL) {
      MailApp.sendEmail({
        to: OWNER_EMAIL,
        subject: 'Website lead going to WhatsApp: ' + data.ref,
        body:
          'A visitor tapped "Continue on WhatsApp".\n' +
          'Their WhatsApp message will include: Ref ' + data.ref + '\n\n' +
          '--- Website chat ---\n\n' + transcript,
      });
    }
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput('ok');
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setColumnWidth(8, 500);
  }
  return sheet;
}

function findRow_(sheet, ref) {
  const last = sheet.getLastRow();
  if (last < 2) return 0;
  const refs = sheet.getRange(2, 1, last - 1, 1).getValues();
  for (let i = refs.length - 1; i >= 0; i--) {
    if (refs[i][0] === ref) return i + 2;
  }
  return 0;
}

// Run this once from the editor to allow email + sheet access and to create the "Chats" tab.
function setup() {
  getSheet_();
  MailApp.getRemainingDailyQuota();
}
