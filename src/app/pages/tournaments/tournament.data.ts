export interface TournamentTeam {
	name: string;
	matches: string;
	rounds: string;
	roundDifference: number;
	winner: boolean;
	roundResults: string[];
}

export interface TournamentDetail {
	id: number;
	name: string;
	startTime: string;
	endTime: string;
	teams: TournamentTeam[];
}

export const tournaments: TournamentDetail[] = [
	{
		id: 1,
		name: 'Eastern Open',
		startTime: 'Jun 10, 2026 10:00',
		endTime: 'Jun 14, 2026 20:00',
		teams: [
			{
				name: 'Navi',
				matches: '3-0',
				rounds: '61-48',
				roundDifference: 13,
				winner: true,
				roundResults: ['2:0 vs Mirage Club', '2:0 vs Dust League', '2:0 vs M80'],
			},
			{
				name: 'BetBoom Team',
				matches: '3-0',
				rounds: '52-23',
				roundDifference: 29,
				winner: false,
				roundResults: ['2:0 vs Dust League', '2:0 vs Team Liquid', '2:0 vs BIG'],
			},
			{
				name: 'GamerLegion',
				matches: '3-1',
				rounds: '65-72',
				roundDifference: -7,
				winner: false,
				roundResults: ['0:2 vs NRG', '2:0 vs Inferno Syndicate', '2:0 vs Ancient Five'],
			},
			{
				name: 'M80',
				matches: '3-1',
				rounds: '83-65',
				roundDifference: 18,
				winner: false,
				roundResults: ['2:0 vs Lynn Vision', '2:1 vs Sharks Esports', '0:2 vs Navi'],
			},
			{
				name: 'Team Liquid',
				matches: '2-2',
				rounds: '58-52',
				roundDifference: 6,
				winner: false,
				roundResults: ['2:0 vs Nuke Academy', '0:2 vs BetBoom Team', '2:0 vs Heroic'],
			},
		],
	},
	{
		id: 2,
		name: 'Dust League',
		startTime: 'Jul 2, 2026 12:00',
		endTime: 'Jul 6, 2026 19:00',
		teams: [
			{
				name: 'Dust II Kings',
				matches: '3-0',
				rounds: '63-41',
				roundDifference: 22,
				winner: true,
				roundResults: ['2:0 vs Mirage Club', '2:1 vs Navi', '2:0 vs Vertigo Union'],
			},
			{
				name: 'Navi',
				matches: '2-1',
				rounds: '48-39',
				roundDifference: 9,
				winner: false,
				roundResults: ['2:0 vs Ancient Five', '1:2 vs Dust II Kings', '2:0 vs NRG'],
			},
			{
				name: 'Vertigo Union',
				matches: '2-1',
				rounds: '45-44',
				roundDifference: 1,
				winner: false,
				roundResults: ['2:1 vs Inferno Syndicate', '2:0 vs MIBR', '0:2 vs Dust II Kings'],
			},
		],
	},
	{
		id: 3,
		name: 'Practice Cup',
		startTime: 'Aug 18, 2026 09:00',
		endTime: 'Aug 18, 2026 18:00',
		teams: [
			{
				name: 'Academy Five',
				matches: '4-0',
				rounds: '72-50',
				roundDifference: 22,
				winner: true,
				roundResults: ['1:0 vs Nuke Academy', '1:0 vs Mirage Club', '2:0 vs Navi'],
			},
			{
				name: 'Navi',
				matches: '3-1',
				rounds: '68-58',
				roundDifference: 10,
				winner: false,
				roundResults: ['1:0 vs BIG', '1:0 vs Heroic', '0:2 vs Academy Five'],
			},
			{
				name: 'Mirage Club',
				matches: '2-2',
				rounds: '59-61',
				roundDifference: -2,
				winner: false,
				roundResults: ['1:0 vs M80', '0:1 vs Academy Five', '1:0 vs Lynn Vision'],
			},
		],
	},
];

export function getTournamentById(id: number) {
	return tournaments.find((tournament) => tournament.id === id);
}
