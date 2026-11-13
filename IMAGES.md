# Website photos: where they go and prompts to make them

Drop each image into the folder shown, with the exact file name (`.jpg`, `.png` or `.webp` all work).
The site finds them automatically on the next build. A slot with no file simply doesn't show, so you can add them one at a time.

Before adding, shrink each image at https://squoosh.app (WebP, quality 75, width shown below) so the site stays fast. Aim for under 300 KB per image.

Tips for Gemini:
- Paste one prompt at a time. If the result has text, logos or weird hands, say "remove all text and logos" or regenerate.
- Keep the look consistent: if one image comes out well, say "same style as the previous image" for the next one.
- These are illustrations of the kind of work we do, not photos of real clients. Don't add client names or logos.

---

## 1. "What we build" cards: `public/img/solutions/`

Shared style for all six: premium 3D product render, soft studio lighting, rounded glossy devices, Ravion colours (deep navy #0b0f2a, sunset orange #F2762E, warm gold #F7B32B), clean minimal composition, no readable text, no logos, no people.

### management.jpg (wide, 21:9, width 2000): dark card
> A wide 21:9 premium 3D render on a deep navy background (#0b0f2a). A floating glass laptop and a tablet show an abstract business dashboard: bar charts, a line chart, data tables and stock cards made of simple shapes with no readable text. Around them, small floating glass tiles represent inventory boxes, a customer profile card, a staff calendar and an invoice, connected by thin glowing gold lines to a central database cylinder. Warm sunset-orange (#F2762E) rim light from the bottom right, soft gold (#F7B32B) highlights, subtle depth of field, lots of empty dark space on the left third. Minimal, modern, high-end tech advertising style. No text, no logos, no people.

### pos.jpg (16:9, width 1600)
> A 16:9 premium 3D render of a modern point-of-sale setup on a light off-white background (#f3f4f8): a sleek white touchscreen POS terminal showing an abstract product grid of coloured tiles, a small receipt printer with a curled receipt, a barcode scanner and a card payment terminal on a smooth counter. Accents in sunset orange (#F2762E) and warm gold (#F7B32B), soft shadows, studio lighting, clean and minimal. No readable text, no logos, no people.

### mobile.jpg (16:9, width 1600)
> A 16:9 premium 3D render of two modern smartphones floating at slight angles on a light off-white background (#f3f4f8), one Android-style and one iPhone-style. Their screens show an abstract app interface made of rounded cards, a progress ring and a bottom navigation bar, in navy (#0b0f2a) and sunset orange (#F2762E). Small floating 3D icons around them: a bell notification, a calendar, a shopping bag and a chart. Soft studio light, gentle shadows, minimal and premium. No readable text, no logos, no people.

### website.jpg (16:9, width 1600)
> A 16:9 premium 3D render of a modern website shown on a laptop, a tablet and a phone side by side (responsive design), on a light off-white background (#f3f4f8). The screens show an abstract landing page: a large hero image block, buttons and product cards made of simple shapes, in navy (#0b0f2a), sunset orange (#F2762E) and gold (#F7B32B). A small floating shopping cart icon and a search bar element. Soft studio lighting, clean shadows, minimal premium style. No readable text, no logos, no people.

### ai.jpg (16:9, width 1600)
> A 16:9 premium 3D render of an AI assistant concept on a light off-white background (#f3f4f8): a glowing glass orb with three small gold nodes rising above it like sun rays, beside a smartphone showing a chat conversation made of speech bubbles (no readable text). Floating chat bubbles, a small calendar booking card and a check-mark badge around it. Colours: navy (#0b0f2a), sunset orange (#F2762E), warm gold (#F7B32B). Soft studio light, subtle glow, minimal and premium. No text, no logos, no robots with faces, no people.

### automation.jpg (16:9, width 1600)
> A 16:9 premium 3D render of business automation on a light off-white background (#f3f4f8): rounded glass app tiles (a spreadsheet grid, an envelope, a chat bubble, a calendar, a document) connected by smooth glowing orange (#F2762E) pipelines with small gold (#F7B32B) light pulses travelling between them, like a clean workflow diagram floating in space. Navy (#0b0f2a) accents, soft shadows, minimal and premium. No readable text, no logos, no people.

---

## 2. "Built for your kind of business": `public/img/industries/`

Shared style for all eight: realistic, warm, natural light photo of a small business in Sri Lanka, modern and tidy, a screen or device naturally in use, shallow depth of field, soft warm colour grade. People can appear but not as the main subject; no readable text, no brand logos.
Use 4:3, width 1200.

### retail.jpg
> A realistic 4:3 photo of a modern small supermarket and pharmacy counter in Sri Lanka. A cashier's hands scan a product with a barcode scanner next to a touchscreen POS terminal; neat shelves of packaged goods and medicine boxes in soft focus behind. Warm natural light, clean and modern, shallow depth of field. No readable text, no brand logos, no visible faces.

### food.jpg
> A realistic 4:3 photo inside a stylish small café-restaurant in Sri Lanka. A waiter takes an order on a tablet near the counter while a kitchen screen shows order tickets as coloured cards in the background; plates of food and cups of Ceylon tea on wooden tables. Warm evening light, cosy and modern, shallow depth of field. No readable text, no logos, faces turned away or out of focus.

### salon.jpg
> A realistic 4:3 photo of a modern, elegant hair salon and spa in Sri Lanka. At the reception desk, a smartphone in the foreground shows a booking calendar with time slots as coloured blocks; styling chairs, mirrors and plants in soft focus behind. Warm soft lighting with gold accents, calm and premium. No readable text, no logos, no visible faces.

### clinic.jpg
> A realistic 4:3 photo of a clean, modern private clinic reception in Sri Lanka. A receptionist's hands work on a computer showing an appointment schedule as coloured blocks; a calm waiting area with chairs and plants in soft focus. Bright, soft, trustworthy lighting with white and light-blue tones. No readable text, no logos, no visible faces, no medical procedures.

### gym.jpg
> A realistic 4:3 photo of a modern gym in Sri Lanka. In the foreground, a hand holds a smartphone showing a workout plan with progress rings and exercise cards; weights, racks and treadmills in soft focus behind. Moody warm lighting with orange highlights, energetic but clean. No readable text, no logos, no visible faces.

### office.jpg
> A realistic 4:3 photo of a bright, modern small office in Sri Lanka. A team member at a desk with a laptop showing a staff dashboard (attendance cards and a calendar as simple coloured blocks), a colleague walking past in soft focus, plants and natural window light. Professional, calm and modern. No readable text, no logos, faces out of focus.

### warehouse.jpg
> A realistic 4:3 photo inside a tidy wholesale warehouse in Sri Lanka. A worker's hands hold a rugged tablet showing stock levels as simple bar charts, with tall shelves of labelled cardboard boxes and a pallet in soft focus behind. Warm industrial lighting, organised and modern. No readable text, no logos, no visible faces.

### education.jpg
> A realistic 4:3 photo of a modern tuition class in Sri Lanka. Students at desks in soft focus, a teacher near a large screen, and in the foreground a tablet showing a class timetable and payment list as simple coloured blocks. Bright, friendly natural light, modern and clean. No readable text, no logos, no clear faces of children.

---

## 3. "Our work" system cards: `public/img/systems/`

Use **real screenshots** here, not AI images: clients and visitors trust real work. Desktop screenshots, 16:10, width 1600.

- `nopeq.jpg`: a screenshot of the NopeQ booking page or dashboard.
- `gym.jpg`: a screenshot of the gym app (member app or trainer dashboard).
- `staff.jpg`: a screenshot of the staff & attendance app. Only add this with the client's OK, and use demo data (no real staff names or numbers).

---

## 4. Social share image: `public/og.png`

Already made (1200×630). It shows when someone shares ravionstudio.com on WhatsApp or Facebook.
