export const WHATSAPP = "";

export const marquee = [
  "Weddings",
  "Private rooms",
  "Corporate",
  "Coast sets",
  "Ceremony sound",
  "Full production",
  "Social desk",
  "MC & host",
];

export type PackageId = "ceremony" | "reception" | "house" | "coast";

export type Service = {
  code: string;
  id: string;
  title: string;
  summary: string;
  body: string;
  includes: string[];
  packageId: PackageId;
};

export const services: Service[] = [
  {
    code: "A1",
    id: "weddings",
    title: "Weddings",
    summary: "Vows people can hear. A floor that actually fills.",
    body: "From the processional to the last dance. Dinner stays at a volume guests can talk through. The dance floor is built, not hoped for. The crate is made with the couple — and the do-not-play list is kept.",
    includes: [
      "A consultation before the date",
      "Ceremony sound and speech microphones",
      "Reception DJ from dinner through the last song",
      "A written running order with the producer",
    ],
    packageId: "reception",
  },
  {
    code: "A2",
    id: "private",
    title: "Private rooms",
    summary: "Birthdays, anniversaries, and houses that still want a real set.",
    body: "Not quite a wedding, not a club. Taste first, neighbors considered, dance floor still welcome. DJ Pstyle reads the room instead of pasting a generic party mix over it.",
    includes: [
      "A set built for the people in the room",
      "Volume that can rise without blowing the house out",
      "Optional MC for toasts and the handoff to dancing",
      "A social desk if you want the night kept",
    ],
    packageId: "reception",
  },
  {
    code: "B1",
    id: "corporate",
    title: "Corporate & brands",
    summary: "The speech lands. Then the room is allowed to loosen.",
    body: "Launches, staff parties, and dinners where someone important has to be heard before anyone dances. Background stays background. The set after follows a brief, not a whim.",
    includes: [
      "Speech and playback support",
      "A hold-music plan for dinners",
      "Brand-safe programming when you need it",
      "Load-in timed around your run of show",
    ],
    packageId: "ceremony",
  },
  {
    code: "B2",
    id: "coast",
    title: "Coast & outdoor",
    summary: "Gardens, farms, and beach nights with a real booth.",
    body: "Sand, grass, and wind are part of the brief. Power, cable, and weather are planned before the van leaves Nairobi. The coast sets are proof: a full Pioneer booth where there was only a palm and a red floor.",
    includes: [
      "An outdoor power and placement plan",
      "A rig chosen for the size of the ground",
      "Ceremony or sunset timing if the night starts outside",
      "Travel across Nairobi, Limuru, and the Coast",
    ],
    packageId: "coast",
  },
  {
    code: "C1",
    id: "house",
    title: "The full house",
    summary: "One contract for music, sound, host, and the social team.",
    body: "DJ Pstyle, a resident MC, the technical director, the producer, and the social desk. One timeline. One person to call when the cake moves or the speeches run long. This is the package most weddings actually need.",
    includes: [
      "Lead DJ and resident MC as one voice",
      "Engineer, rack, and ceremony microphones",
      "Producer on vendor timing and the order of the day",
      "Social managers with a shot list, not a lucky phone",
    ],
    packageId: "house",
  },
  {
    code: "C2",
    id: "social",
    title: "Social coverage",
    summary: "The night, cut while it is still warm.",
    body: "A bench of social managers — not one borrowed cousin. They plan the shots with you, film the room as it happens, and hand back stories and a recap. Book them with the full house, or beside a DJ you already trust.",
    includes: [
      "A shot list agreed before doors",
      "Same-night stories for the family chat or the brand",
      "A next-day recap cut",
      "A clean handoff of the files",
    ],
    packageId: "house",
  },
];

export type Role = {
  code: string;
  title: string;
  who: string;
  summary: string;
  body: string;
  duties: string[];
};

export const roles: Role[] = [
  {
    code: "01",
    title: "Founder, CEO & lead DJ",
    who: "DJ Pstyle",
    summary: "The standard and the set are the same person.",
    body: "DJ Pstyle founded Pstyles and still takes the headline sets — weddings, anniversaries, private rooms, and the nights with his name on the poster. He builds the crate for the crowd in front of him. The company is arranged so the music is not the only thing being looked after.",
    duties: [
      "Headline DJ and final say on the sound of the room",
      "Owns the calendar and the house standard",
      "Works the booth with Pioneer and Serato",
      "The name on the poster: DJ Pstyle",
    ],
  },
  {
    code: "02",
    title: "Social desk",
    who: "Social media managers",
    summary: "A team on the floor, not a phone in the corner.",
    body: "Pstyles keeps a bench of social managers. They shoot with a plan, cut while the night is still warm, and hand the family or the brand something they can actually post. Coverage is a service, not a favor.",
    duties: [
      "Shot list agreed with the couple, host, or brand",
      "Stories and stills while the room is live",
      "Next-day recap",
      "Files delivered without a scavenger hunt",
    ],
  },
  {
    code: "03",
    title: "Technical director",
    who: "Sound & systems",
    summary: "The rack is the quiet half of a good night.",
    body: "Speech that stays intelligible. A dance floor that is loud at the back of the tent without tearing the front table apart. Power for gardens, beaches, and generators. Pioneer on the booth; processing and amplifiers underneath.",
    duties: [
      "Ceremony and speech microphones",
      "System size matched to the ground",
      "EQ, crossover, and amplifier rack",
      "Load-in, soundcheck, and a sober strike",
    ],
  },
  {
    code: "04",
    title: "Event producer",
    who: "Weddings & private calendars",
    summary: "The timeline, so the DJ can stay on the music.",
    body: "Vendor calls, speech order, cake, first dance, and the problem that shows up at four in the afternoon. The producer holds the running order. When something slips, the room does not have to.",
    duties: [
      "One running order shared with the couple or host",
      "Vendor and family coordination on the day",
      "A buffer when speeches run long",
      "The person who already knows the answer",
    ],
  },
  {
    code: "05",
    title: "Resident MC & host",
    who: "Floor & ceremony",
    summary: "One voice with the booth, not two competing ones.",
    body: "Introductions, speeches, and the pass into the dance floor. A host who can open a room without shouting over it, and who already knows how DJ Pstyle likes the handoff.",
    duties: [
      "Ceremony and reception hosting",
      "Speeches paced so the room stays with them",
      "Handoff into the set",
      "Sits this one out if your family MC should lead",
    ],
  },
];

export type FrameKind = "night" | "rig" | "portrait";

export type Frame = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  place: string;
  kind: FrameKind;
  note: string;
};

export const frames: Frame[] = [
  {
    id: "beach",
    src: "/media/live-beach.jpg",
    width: 1200,
    height: 1600,
    alt: "DJ Pstyle in a white T-shirt and headphones, mixing on a Pioneer controller on a beach at night, with palm trees and a red platform",
    title: "Coast night",
    place: "The beach",
    kind: "night",
    note: "Pioneer and Serato after dark. Palms, sand, and a red floor under the booth.",
  },
  {
    id: "lawn",
    src: "/media/live-lawn.jpg",
    width: 1200,
    height: 1600,
    alt: "DJ Pstyle in a green varsity jacket holding headphones, standing on a lawn beside a wedding guest, with peach tents and a red carpet behind them",
    title: "Garden reception",
    place: "Lawn wedding",
    kind: "night",
    note: "Tents dressed, carpet down, the house on the grass before the room fills.",
  },
  {
    id: "drapes",
    src: "/media/live-booth.jpg",
    width: 1200,
    height: 1600,
    alt: "DJ Pstyle in profile at a laptop and Pioneer controller, inside a tent with cream and rust drapes",
    title: "Inside the drape",
    place: "Private tent",
    kind: "night",
    note: "Load-in in the corner of the tent. Laptop up, controller under the hand, crate open.",
  },
  {
    id: "anza",
    src: "/media/poster-anza.jpg",
    width: 1400,
    height: 1400,
    alt: "Gold poster for Anza Tigoni 2nd Anniversary near Limuru Country Club, with DJ Pstyle in a white hoodie among the featured artists",
    title: "Anza Tigoni",
    place: "Near Limuru Country Club",
    kind: "night",
    note: "2nd anniversary. Host DJs DJ Pstyle and DJ Lamarcks, with DJ Incredible and DJ Dream.",
  },
  {
    id: "decks",
    src: "/media/rig-decks.jpg",
    width: 1200,
    height: 1600,
    alt: "Pioneer DJ controller in the foreground with a MacBook running DJ software, overlooking a garden reception with white tents and flower stands",
    title: "Booth view",
    place: "Garden reception",
    kind: "rig",
    note: "The decks face the tent city. Flower stands, white chairs, and the set in front of them.",
  },
  {
    id: "rack",
    src: "/media/rig-rack.jpg",
    width: 1200,
    height: 1600,
    alt: "Open red rack with a mixing console, dbx graphic EQ, crossover, Peavey amplifier, and Crest Audio power amp on a lawn",
    title: "The rack",
    place: "On the ground",
    kind: "rig",
    note: "Mixer, dbx EQ, crossover, Peavey and Crest. Speeches stay clear. The last song still has weight.",
  },
  {
    id: "fullrig",
    src: "/media/rig-booth.jpg",
    width: 1170,
    height: 1559,
    alt: "Wedding DJ booth with a mixing console, wireless microphones, laptops, and a controller under a blue and peach tent",
    title: "Full booth",
    place: "Reception tent",
    kind: "rig",
    note: "Mics, playback, and the controller in one line. The producer’s world, seen from the side.",
  },
  {
    id: "sweater",
    src: "/media/portrait-sweater.jpg",
    width: 934,
    height: 1400,
    alt: "DJ Pstyle wearing black headphones and a black sweater with a white pattern, against an orange studio backdrop, one hand raised",
    title: "Orange room",
    place: "Studio",
    kind: "portrait",
    note: "Headphones up. The face most rooms meet first.",
  },
  {
    id: "hoodie",
    src: "/media/portrait-hoodie.jpg",
    width: 934,
    height: 1400,
    alt: "DJ Pstyle in a white hoodie printed Pstyle To The World, standing against an orange studio backdrop",
    title: "To the world",
    place: "Studio",
    kind: "portrait",
    note: "The line on the hoodie is the line on the work.",
  },
  {
    id: "call",
    src: "/media/portrait-call.jpg",
    width: 934,
    height: 1400,
    alt: "DJ Pstyle in a black T-shirt and headphones against an olive backdrop, both hands making a call-me gesture",
    title: "Call the desk",
    place: "Studio",
    kind: "portrait",
    note: "Olive room. The invitation, twice.",
  },
  {
    id: "gaze",
    src: "/media/portrait-gaze.jpg",
    width: 934,
    height: 1400,
    alt: "DJ Pstyle in a black T-shirt looking off-camera, hands loosely crossed, against an olive studio backdrop",
    title: "Quiet frame",
    place: "Studio",
    kind: "portrait",
    note: "Same standard, less noise.",
  },
];

export const packages: {
  id: PackageId;
  name: string;
  line: string;
  points: string[];
}[] = [
  {
    id: "ceremony",
    name: "Ceremony",
    line: "Processional, vows, and speeches held clean.",
    points: ["Ceremony microphones", "Processional and recessional", "A producer on the order"],
  },
  {
    id: "reception",
    name: "Reception",
    line: "Dinner into a dance floor, with or without the ceremony.",
    points: ["DJ Pstyle on the set", "Speech mics", "Requests, with a do-not-play list"],
  },
  {
    id: "house",
    name: "The house",
    line: "DJ, MC, engineer, producer, and the social desk.",
    points: ["One contract", "Full sound", "Coverage of the night"],
  },
  {
    id: "coast",
    name: "Coast & outdoor",
    line: "Beach, garden, or farm — power planned before the drive.",
    points: ["Outdoor placement", "Weather-minded rig", "Travel included in the quote"],
  },
];

export const faqs = [
  {
    q: "How early should we write?",
    a: "Saturdays in wedding season go first. Write when the date is real, even if the venue is still a shortlist. A note is enough to start.",
  },
  {
    q: "Where do you play?",
    a: "Nairobi, Limuru and Kiambu, and the Coast. Further out is a conversation about the drive, the power, and the strike — not a no.",
  },
  {
    q: "We already have a family MC.",
    a: "Good. The resident host can sit this one out. The producer will put your MC into the running order so the booth and the microphone agree.",
  },
  {
    q: "Do you take requests?",
    a: "Yes. Send the songs that matter and the ones that must not play. The set still has to work for the room, and that list is honored.",
  },
  {
    q: "How does a quote work?",
    a: "The brief asks for the date, the city, the guest count, and the package. The desk prices from those, not from a number printed to look cheap.",
  },
];

export function whatsappHref(text: string) {
  const encoded = encodeURIComponent(text);
  if (WHATSAPP) return `https://wa.me/${WHATSAPP}?text=${encoded}`;
  return `https://wa.me/?text=${encoded}`;
}
