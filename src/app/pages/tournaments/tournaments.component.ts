import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { tournaments as staticTournaments } from './tournament.data';

interface TournamentStat {
	label: string;
	value: string;
}

interface FeaturedTournament {
	id: number;
	name: string;
	pictureSrc: string;
	stats: TournamentStat[];
}

const tournamentExtras: Record<number, { pictureSrc: string; prizePool: string }> = {
	1: {
		pictureSrc: 'tournaments/eastern-open.svg',
		prizePool: '$120K',
	},
	2: {
		pictureSrc: 'tournaments/dust-league.svg',
		prizePool: '$80K',
	},
	3: {
		pictureSrc: 'tournaments/practice-cup.svg',
		prizePool: '$25K',
	},
};

@Component({
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './tournaments.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentsComponent {
	protected readonly featuredTournaments: FeaturedTournament[] = staticTournaments.map(
		(tournament) => {
			const winner = tournament.teams.find((team) => team.winner);
			const extras = tournamentExtras[tournament.id];

			return {
				id: tournament.id,
				name: tournament.name,
				pictureSrc: extras.pictureSrc,
				stats: [
					{
						label: 'Start time',
						value: tournament.startTime,
					},
					{
						label: 'End time',
						value: tournament.endTime,
					},
					{
						label: 'Teams',
						value: `${tournament.teams.length} teams`,
					},
					{
						label: 'Winner',
						value: winner?.name ?? 'Not decided',
					},
					{
						label: 'Prize pool',
						value: extras.prizePool,
					},
				],
			};
		},
	);
}
