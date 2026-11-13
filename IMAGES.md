# Website photos: where they go and prompts to make them

Drop each image into the folder shown, with the exact file name (`.jpg`, `.png` or `.webp` all work).
The site finds them automatically on the next build. A slot with no file simply doesn't show, so you can add them one at a time.

Before adding, shrink each image at https://squoosh.app (WebP, quality 75, width shown below) so the site stays fast. Aim for under 300 KB per image.

## How to get real-looking photos from Gemini

Every prompt below asks for a real camera photo, not a 3D render or illustration.
- Paste one prompt at a time. Set the aspect ratio in the tool if it has the option (AI Studio does); the prompt also says it.
- If it looks fake, too shiny or "AI", reply: **"Make it look like an unedited real photo: natural skin and surface texture, real light, slight imperfections, no CGI look."**
- If there is text, gibberish letters or logos, reply: **"Remove all text, letters and logos. Keep screens slightly out of focus."**
- Screens are kept slightly blurred on purpose: AI can't write clean UI text, and blurred screens look natural in real photos.
- Once one image looks right, start the next with: **"Same camera, lighting and colour grade as the previous photo."**
- These show the kind of work we do, not real clients. Don't add client names or logos.

Shared look for every photo: candid documentary-style photo, real location in Sri Lanka, natural light, shot on a full-frame camera with a 35mm lens at f/2, shallow depth of field, subtle film grain, warm natural colour grade with hints of sunset orange and deep navy.

---

## 0. Hero product window (top of the page): `public/img/hero/`

These are small, so width 600 is enough (web-hero: 1400).

### POS screen products (4:3, width 600)

Shared look: realistic product photo for a POS menu, the item centred with space around it (it gets cropped to a wide tile), plain warm off-white background, soft daylight from the left, gentle shadow, slight 3/4 angle from above. Shot on a full-frame camera, 50mm lens, f/4, real textures, no text, no logos, no hands. After the first one, start each next prompt with "Same background, light and angle as the previous photo."

- `pos-milk-tea.webp`
  > Photorealistic 4:3 product photo, not a 3D render. A glass of Sri Lankan milk tea (light caramel colour, a little foam on top) on a small saucer, centred on a plain warm off-white surface with lots of empty space around it. Soft daylight from the left, gentle shadow, slight 3/4 angle from above. Full-frame camera, 50mm lens, f/4, real textures. No text, no logos, no hands.
- `pos-fish-bun.webp`
  > Photorealistic 4:3 product photo, not a 3D render. Two Sri Lankan triangular fish buns (golden-brown glazed bread) on a small white plate, centred on a plain warm off-white surface with lots of empty space around them. Soft daylight from the left, gentle shadow, slight 3/4 angle from above. Full-frame camera, 50mm lens, f/4, real textures. No text, no logos, no hands.
- `pos-chocolate-cake.webp`
  > Photorealistic 4:3 product photo, not a 3D render. A slice of rich chocolate cake with glossy chocolate icing on a small white plate, centred on a plain warm off-white surface with lots of empty space around it. Soft daylight from the left, gentle shadow, slight 3/4 angle from above. Full-frame camera, 50mm lens, f/4, real textures. No text, no logos, no hands.
- `pos-iced-coffee.webp`
  > Photorealistic 4:3 product photo, not a 3D render. A tall glass of iced coffee with milk swirling into it and ice cubes, condensation on the glass, centred on a plain warm off-white surface with lots of empty space around it. Soft daylight from the left, gentle shadow, slight 3/4 angle from above. Full-frame camera, 50mm lens, f/4, real textures. No text, no logos, no straws with branding, no hands.
- `pos-egg-roll.webp`
  > Photorealistic 4:3 product photo, not a 3D render. Two Sri Lankan egg rolls (golden, crispy, breadcrumb-coated, one cut in half showing egg and filling) on a small white plate, centred on a plain warm off-white surface with lots of empty space around them. Soft daylight from the left, gentle shadow, slight 3/4 angle from above. Full-frame camera, 50mm lens, f/4, real textures. No text, no logos, no hands.
- `pos-lime-juice.webp`
  > Photorealistic 4:3 product photo, not a 3D render. A glass of fresh lime juice, pale green, with ice and a slice of lime on the rim, centred on a plain warm off-white surface with lots of empty space around it. Soft daylight from the left, gentle shadow, slight 3/4 angle from above. Full-frame camera, 50mm lens, f/4, real textures. No text, no logos, no hands.

### Website screen: "Hearth Bakery" example site

- `web-hero.webp` (16:9, width 1400): the dark background behind "Fresh bakes, delivered across Kandy." Text sits on the left, so keep the left side dark and empty.
  > Photorealistic 16:9 photograph, not a 3D render. Inside a cosy artisan bakery in Sri Lanka in the early morning: on the right half of the frame, a wooden counter with fresh bread loaves, buns and cakes, warm golden light from an oven glow and hanging bulbs. The left half of the frame is dark warm-brown shadow with nothing in it. Moody, warm and inviting, chocolate-brown tones. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. No people, no text, no logos.
- `web-cake.webp` (4:3, width 600)
  > Photorealistic 4:3 close-up food photo, not a 3D render. A whole Sri Lankan butter cake with a golden top, one slice cut out, on a wooden board, centred with some space around it. Warm natural light, rustic bakery feel, brown and golden tones. Full-frame camera, 50mm lens, f/2.8, real textures. No text, no logos, no hands.
- `web-bread.webp` (4:3, width 600)
  > Photorealistic 4:3 close-up food photo, not a 3D render. Freshly baked crusty bread loaves and soft buns in a woven basket on a wooden counter, centred with some space around them. Warm natural light, a little flour dust, rustic bakery feel, brown and golden tones. Full-frame camera, 50mm lens, f/2.8, real textures. No text, no logos, no hands.
- `web-pastry.webp` (4:3, width 600)
  > Photorealistic 4:3 close-up food photo, not a 3D render. A small tray of cupcakes with cream-coloured frosting and a few flaky pastries on a wooden counter, centred with some space around them. Warm natural light, rustic bakery feel, cream and golden tones. Full-frame camera, 50mm lens, f/2.8, real textures. No text, no logos, no hands.

---

## 1. "What we build" cards: `public/img/solutions/`

### management.jpg (wide, 21:9, width 2000): goes on a dark card, so keep it dark
> Photorealistic wide 21:9 photograph, not a 3D render. A real business owner's desk in a small office in Sri Lanka in the evening. An open laptop and a tablet show a business dashboard with charts and tables, the screens slightly out of focus so no text is readable. A cup of Ceylon tea, a notebook and a small stack of invoices on a dark wooden desk. The room is dark navy blue with a warm orange desk lamp glow from the right. Most of the light is on the right side; the left third of the frame is dark, empty shadow. Shot on a full-frame camera, 35mm lens, f/2, natural low light, subtle film grain, real textures, candid and unstaged. No people's faces, no readable text, no logos, no CGI look.

### pos.jpg (16:9, width 1600)
> Photorealistic 16:9 photograph, not a 3D render. The checkout counter of a modern small grocery shop in Sri Lanka. A cashier's hands scan a product with a handheld barcode scanner next to a white touchscreen POS terminal, a small receipt printer pushing out a receipt, and a card payment machine on the counter. Shelves of goods softly blurred behind. Warm natural daylight, real wear on the counter, slight imperfections. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. The POS screen slightly out of focus, no readable text, no brand logos, no faces.

### mobile.jpg (16:9, width 1600)
> Photorealistic 16:9 photograph, not a 3D render. Close-up of a young Sri Lankan person's hands holding a modern smartphone, tapping an app with colourful rounded cards on the screen, sitting at an outdoor café table in Colombo. A second phone and a cup of tea on the table. Warm late-afternoon sunlight, soft orange tones, real skin texture. Shot on a full-frame camera, 50mm lens, f/1.8, shallow depth of field, subtle film grain. Screen content slightly out of focus, no readable text, no logos, face not shown.

### website.jpg (16:9, width 1600)
> Photorealistic 16:9 photograph, not a 3D render. A bright home office desk in Sri Lanka with a laptop, a tablet and a smartphone all showing the same modern business website (a large hero photo, buttons and product cards), screens slightly out of focus so no text is readable. A plant, a coffee mug and a window with tropical greenery softly blurred behind. Soft natural daylight, warm tones, real textures. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. No people, no readable text, no logos.

### ai.jpg (16:9, width 1600)
> Photorealistic 16:9 photograph, not a 3D render. A smartphone resting on the reception counter of a stylish small business in Sri Lanka, its screen showing a WhatsApp-style chat with speech bubbles, slightly out of focus so no text is readable. The screen gives a soft glow. Behind it, softly blurred, a receptionist helps a customer. Warm evening light with orange and deep navy tones. Shot on a full-frame camera, 50mm lens, f/1.8, shallow depth of field, subtle film grain, real textures. No readable text, no logos, no robots, faces out of focus.

### automation.jpg (16:9, width 1600)
> Photorealistic 16:9 photograph, not a 3D render. An office desk in Sri Lanka with two monitors: one shows a spreadsheet, the other a workflow of connected boxes and lines, both slightly out of focus so no text is readable. A phone lights up with a notification beside the keyboard. A person's hand rests on the mouse; the rest of the office is softly blurred behind. Calm morning light from a window, warm tones, real textures. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. No readable text, no logos, no faces.

---

## 2. "Built for your kind of business": `public/img/industries/`

All 4:3, width 1200. Real small businesses in Sri Lanka, a device naturally in use, people present but not the main subject.

### retail.jpg
> Photorealistic 4:3 photograph, not a 3D render. Inside a modern small supermarket and pharmacy in Sri Lanka. At the counter, a cashier's hands scan a product next to a touchscreen POS terminal. Neat shelves of packaged goods and medicine boxes softly blurred behind. Natural daylight mixed with shop lights, real everyday clutter, slight imperfections. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. Screen slightly out of focus, no readable text, no brand logos, faces not visible.

### food.jpg
> Photorealistic 4:3 photograph, not a 3D render. Inside a cosy small café-restaurant in Sri Lanka in the evening. A waiter in an apron takes an order on a tablet near the counter; plates of rice and curry and cups of Ceylon tea on wooden tables; a kitchen order screen softly blurred in the background. Warm tungsten light, real textures, lived-in atmosphere. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. No readable text, no logos, faces turned away or out of focus.

### salon.jpg
> Photorealistic 4:3 photograph, not a 3D render. The reception desk of a modern hair salon in Sri Lanka. In the foreground, a smartphone on the desk shows a booking calendar with coloured time slots, slightly out of focus. Styling chairs, mirrors, hair products and plants softly blurred behind, a stylist working in the background. Warm soft lighting with gold tones. Shot on a full-frame camera, 50mm lens, f/1.8, shallow depth of field, subtle film grain, real textures. No readable text, no logos, faces not visible.

### clinic.jpg
> Photorealistic 4:3 photograph, not a 3D render. The reception of a clean, modern private medical clinic (channelling centre) in Sri Lanka. A receptionist's hands at a computer showing an appointment schedule, slightly out of focus. A calm waiting area with chairs and a plant softly blurred behind. Bright, soft daylight, white and light-blue tones, real textures. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. No readable text, no logos, no visible faces, no medical procedures.

### gym.jpg
> Photorealistic 4:3 photograph, not a 3D render. Inside a real gym in Sri Lanka. In the foreground, a hand holds a smartphone showing a workout plan with progress rings, slightly out of focus. Dumbbells, a squat rack and treadmills softly blurred behind, a person training in the background. Moody warm light with orange highlights, real sweat and wear, gritty texture. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. No readable text, no logos, faces not visible.

### office.jpg
> Photorealistic 4:3 photograph, not a 3D render. A bright, modern small office in Sri Lanka. A staff member at a desk with a laptop showing a dashboard with calendar and attendance cards, slightly out of focus. A colleague walks past in soft focus; plants, a whiteboard and window light in the background. Natural daylight, real everyday office clutter. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. No readable text, no logos, faces out of focus.

### warehouse.jpg
> Photorealistic 4:3 photograph, not a 3D render. Inside a wholesale warehouse in Sri Lanka. A worker's hands hold a rugged tablet showing stock bar charts, slightly out of focus. Tall metal shelves of cardboard boxes, a pallet and a hand trolley softly blurred behind. Warm industrial light with dust in the air, real wear and textures. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. No readable text, no logos, no visible faces.

### education.jpg
> Photorealistic 4:3 photograph, not a 3D render. A modern tuition class in Sri Lanka. In the foreground, a tablet on the teacher's desk shows a class timetable and fee list, slightly out of focus. Students at desks and a teacher near a whiteboard softly blurred behind. Bright, friendly daylight from windows, real classroom textures. Shot on a full-frame camera, 35mm lens, f/2, shallow depth of field, subtle film grain. No readable text, no logos, no clear faces of children.

---

## 3. "Our work" system cards: `public/img/systems/`

Use **real screenshots** here, not AI images: clients and visitors trust real work. Desktop screenshots, 16:10, width 1600.

- `nopeq.jpg`: a screenshot of the NopeQ booking page or dashboard.
- `gym.jpg`: a screenshot of the gym app (member app or trainer dashboard).
- `staff.jpg`: a screenshot of the staff & attendance app. Only add this with the client's OK, and use demo data (no real staff names or numbers).

---

## 4. Social share image: `public/og.png`

Already made (1200×630). It shows when someone shares ravionstudio.com on WhatsApp or Facebook.
