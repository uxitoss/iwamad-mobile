export type CampusEvent = { id: number; title: string; date: string; place: string; seats: number };

export const events: CampusEvent[] = [
  { id: 1, title: 'React study night', date: '2026-10-28', place: 'Room 302', seats: 20 },
  { id: 2, title: 'Git workshop', date: '2026-10-30', place: 'Room 215', seats: 15 },
  { id: 3, title: 'Kali Linux lab meetup', date: '2026-11-02', place: 'Lab 4', seats: 3 },
  { id: 4, title: 'Autumn walk in the mountains', date: '2026-11-05', place: 'Main gate', seats: 30 },
];
