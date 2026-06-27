import type { PerformanceRecord, PersonalBest, Discipline } from '@/types';

/**
 * TODO: Replace this placeholder data with the final JSON converted from data/jiro_performance_data.xlsx.
 * This contains realistic records for a sprinter competing since 2016.
 */
export const performanceRecords: readonly PerformanceRecord[] = [
  // 100m records
  {
    id: '100m-1',
    date: '2016-04-12',
    discipline: '100m',
    performance: '12.45',
    performanceNumeric: 12.45,
    wind: '+0.5',
    competition: 'National Schools Track & Field Championships',
    venue: 'Singapore (SGP)',
    round: 'Heats',
    position: 4,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '100m-2',
    date: '2018-05-15',
    discipline: '100m',
    performance: '11.90',
    performanceNumeric: 11.90,
    wind: '+1.2',
    competition: 'Singapore Junior Athletics Championships',
    venue: 'Singapore (SGP)',
    round: 'Final',
    position: 3,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '100m-3',
    date: '2021-03-20',
    discipline: '100m',
    performance: '11.35',
    performanceNumeric: 11.35,
    wind: '+0.2',
    competition: 'Singapore Athletics Series 1',
    venue: 'Home of Athletics, Singapore (SGP)',
    round: 'Final',
    position: 2,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '100m-4',
    date: '2024-06-15',
    discipline: '100m',
    performance: '11.02',
    performanceNumeric: 11.02,
    wind: '+0.8',
    competition: 'Singapore National Championships',
    venue: 'Home of Athletics, Singapore (SGP)',
    round: 'Final',
    position: 5,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '100m-5',
    date: '2025-04-20',
    discipline: '100m',
    performance: '10.95',
    performanceNumeric: 10.95,
    wind: '+1.5',
    competition: 'Singapore Open Track & Field Championships',
    venue: 'Singapore (SGP)',
    round: 'Final',
    position: 3,
    competitionLevel: 'International',
    isPersonalBest: true, // PB
  },

  // 200m records
  {
    id: '200m-1',
    date: '2016-04-14',
    discipline: '200m',
    performance: '25.30',
    performanceNumeric: 25.30,
    wind: '-0.2',
    competition: 'National Schools Track & Field Championships',
    venue: 'Singapore (SGP)',
    round: 'Heats',
    position: 5,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '200m-2',
    date: '2019-06-10',
    discipline: '200m',
    performance: '23.85',
    performanceNumeric: 23.85,
    wind: '+0.4',
    competition: 'Singapore Under-18 Championships',
    venue: 'Singapore (SGP)',
    round: 'Final',
    position: 2,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '200m-3',
    date: '2022-05-22',
    discipline: '200m',
    performance: '22.95',
    performanceNumeric: 22.95,
    wind: '+1.0',
    competition: 'Singapore Athletics Series 3',
    venue: 'Home of Athletics, Singapore (SGP)',
    round: 'Final',
    position: 3,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '200m-4',
    date: '2025-05-18',
    discipline: '200m',
    performance: '22.38',
    performanceNumeric: 22.38,
    wind: '+0.1',
    competition: 'Singapore National Championships',
    venue: 'Home of Athletics, Singapore (SGP)',
    round: 'Final',
    position: 2,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '200m-5',
    date: '2026-03-08',
    discipline: '200m',
    performance: '22.24',
    performanceNumeric: 22.24,
    wind: '+0.6',
    competition: 'Singapore Athletics Series 2',
    venue: 'Home of Athletics, Singapore (SGP)',
    round: 'Final',
    position: 1,
    competitionLevel: 'National',
    isPersonalBest: true, // PB
  },

  // 400m records
  {
    id: '400m-1',
    date: '2017-03-05',
    discipline: '400m',
    performance: '56.80',
    performanceNumeric: 56.80,
    wind: null,
    competition: 'National Schools Track & Field Championships',
    venue: 'Singapore (SGP)',
    round: 'Heats',
    position: 6,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '400m-2',
    date: '2020-02-15',
    discipline: '400m',
    performance: '52.40',
    performanceNumeric: 52.40,
    wind: null,
    competition: 'Singapore All-Comers Series 1',
    venue: 'Singapore (SGP)',
    round: 'Final',
    position: 4,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '400m-3',
    date: '2023-04-08',
    discipline: '400m',
    performance: '50.95',
    performanceNumeric: 50.95,
    wind: null,
    competition: 'Singapore Athletics Series 1',
    venue: 'Home of Athletics, Singapore (SGP)',
    round: 'Final',
    position: 3,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '400m-4',
    date: '2025-06-22',
    discipline: '400m',
    performance: '49.56',
    performanceNumeric: 49.56,
    wind: null,
    competition: 'Malaysia Open Championships',
    venue: 'Kuala Lumpur (MAS)',
    round: 'Final',
    position: 4,
    competitionLevel: 'International',
    isPersonalBest: true, // PB
  },

  // 4x100m relay records
  {
    id: '4x100m-1',
    date: '2018-04-20',
    discipline: '4x100m Relay',
    performance: '43.50',
    performanceNumeric: 43.50,
    wind: null,
    competition: 'National Schools Track & Field Championships',
    venue: 'Singapore (SGP)',
    round: 'Final',
    position: 2,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '4x100m-2',
    date: '2022-06-18',
    discipline: '4x100m Relay',
    performance: '42.10',
    performanceNumeric: 42.10,
    wind: null,
    competition: 'Singapore National Championships',
    venue: 'Home of Athletics, Singapore (SGP)',
    round: 'Final',
    position: 1,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '4x100m-3',
    date: '2026-03-01',
    discipline: '4x100m Relay',
    performance: '41.23',
    performanceNumeric: 41.23,
    wind: null,
    competition: 'Singapore Athletics Series 2',
    venue: 'Home of Athletics, Singapore (SGP)',
    round: 'Final',
    position: 1,
    competitionLevel: 'National',
    isPersonalBest: true, // PB
  },

  // 4x400m relay records
  {
    id: '4x400m-1',
    date: '2018-04-22',
    discipline: '4x400m Relay',
    performance: '3:32.40',
    performanceNumeric: 212.40,
    wind: null,
    competition: 'National Schools Track & Field Championships',
    venue: 'Singapore (SGP)',
    round: 'Final',
    position: 3,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '4x400m-2',
    date: '2023-06-25',
    discipline: '4x400m Relay',
    performance: '3:22.15',
    performanceNumeric: 202.15,
    wind: null,
    competition: 'Singapore National Championships',
    venue: 'Home of Athletics, Singapore (SGP)',
    round: 'Final',
    position: 1,
    competitionLevel: 'National',
    isPersonalBest: false,
  },
  {
    id: '4x400m-3',
    date: '2026-06-21',
    discipline: '4x400m Relay',
    performance: '3:16.56',
    performanceNumeric: 196.56,
    wind: null,
    competition: 'China Open / Grand Prix',
    venue: 'Shangyu Stadium, Shaoxing (CHN)',
    round: 'Final',
    position: 2,
    competitionLevel: 'International',
    isPersonalBest: true, // PB
  },
];

/** Derives the personal best performance for each unique discipline in the records */
export function getPersonalBests(): PersonalBest[] {
  const map = new Map<string, PerformanceRecord>();

  for (const record of performanceRecords) {
    const existing = map.get(record.discipline);
    if (!existing || record.performanceNumeric < existing.performanceNumeric) {
      map.set(record.discipline, record);
    }
  }

  return Array.from(map.values()).map((record) => ({
    discipline: record.discipline,
    performance: record.performance,
    performanceNumeric: record.performanceNumeric,
    date: record.date,
    competition: record.competition,
    venue: record.venue,
  }));
}

/** Groups all performance records by discipline */
export function getDisciplines(): Discipline[] {
  const map = new Map<string, PerformanceRecord[]>();

  for (const record of performanceRecords) {
    const list = map.get(record.discipline) || [];
    list.push(record);
    map.set(record.discipline, list);
  }

  const units: Record<string, string> = {
    '100m': 'seconds',
    '200m': 'seconds',
    '400m': 'seconds',
    '4x100m Relay': 'seconds',
    '4x400m Relay': 'seconds',
  };

  return Array.from(map.entries()).map(([name, records]) => ({
    name,
    unit: units[name] || 'seconds',
    records: [...records].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
  }));
}
