export type Celebration = {
  id: "wedding" | "reception";
  shortName: string; title: string; dateLabel: string; timeLabel: string;
  venue: string; address: string; supportingLine: string; start: string;
  calendarTitle: string; image: string; scene: "fire" | "candlelight";
  mapUrl: string; phereTime?: string;
};
const maps = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const weddingVenue = { name: "PSR SLOKA CONVENTION", address: "ORR Exit No. 13, Kongarkalan, Ibrahimpatnam, Hyderabad" };
const weddingMap = maps(`${weddingVenue.name}, ${weddingVenue.address}`);
const receptionVenue = { name: "Shree Manthra Convention", address: "ORR Exit No. 15, Pedda Golkonda, R.R. Dist." };
const brideParents = "Only daughter of Late Konduri Ramesh and Konduri Sujatha";
const groomParents = "Only son of Sri Buneti Krishna Goud & Smt. Buneti Sarala";
export const invitationConfig = {
  familyName: "Konduri",
  familyInvitation: "Konduri’s family invitation",
  couple: {
    first: "Sanjusha", second: "Santosh",
    firstFull: "Konduri Sanjusha", secondFull: "Buneti Santosh Kumar Goud",
    firstParents: `Konduri Sanjusha · ${brideParents}`,
    secondParents: `Buneti Santosh Kumar Goud · ${groomParents}`,
    brideParents, groomParents, groomGrandparents: "",
  },
  weddingLabel: "25 November 2026 · Hyderabad",
  countdownTarget: "2026-11-25T09:12:00+05:30",
  memorialLine: "With the blessings and in loving memory of Late Konduri Ramesh",
  invitationLine: "We solicit your gracious presence on the occasion of the marriage of our sister.",
  blessingLine: "Join us with your love and blessings. Sumuhurtham: 9:12 a.m. · Dhanur Lagnam.",
  homeAddress: "",
  hosts: "Sri Konduri Rohit and Pranaya",
  rsvp: "Konduri Rohit and Pranaya",
  wishesFrom: "Near & Dear",
  monogram: "/assets/sanjusha-santosh-monogram-transparent.png",
  artwork: "/assets/sanjusha-santosh-wedding.png",
  venue: { ...weddingVenue, mapUrl: weddingMap },
  contacts: [] as string[],
  optional: { travel: "", stay: "", contact: "", musicUrl: "/assets/kudmayi.mp3", whatsappHostNumber: "" },
  celebrations: [
    {
      id: "wedding", shortName: "Wedding Ceremony", title: "Shubh Vivaah — A Sacred Beginning",
      dateLabel: "Wednesday, 25 November 2026", timeLabel: "Sumuhurtham · 9:12 a.m. · Dhanur Lagnam",
      venue: weddingVenue.name, address: weddingVenue.address,
      supportingLine: "Sacred vows, family blessings and the beginning of our forever.",
      start: "2026-11-25T09:12:00+05:30", calendarTitle: "Sanjusha & Santosh · Wedding Ceremony",
      image: "/assets/sanjusha-santosh-wedding-mobile-background.png", scene: "fire", mapUrl: weddingMap,
    },
    {
      id: "reception", shortName: "Wedding Reception", title: "Reception — An Evening of Togetherness",
      dateLabel: "Sunday, 29 November 2026", timeLabel: "7:00 p.m. onwards",
      venue: receptionVenue.name, address: receptionVenue.address,
      supportingLine: "An evening of warm wishes, joyful company and a lifetime of memories.",
      start: "2026-11-29T19:00:00+05:30", calendarTitle: "Sanjusha & Santosh · Wedding Reception",
      image: "/assets/sanjusha-santosh-reception-mobile-background.png", scene: "candlelight", mapUrl: maps(`${receptionVenue.name}, ${receptionVenue.address}`),
    },
  ] satisfies Celebration[],
  calendar: { timezone: "Asia/Kolkata" },
} as const;

