import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

interface Country {
	name: string;
	flagSrc: string;
}

interface TeamMember {
	name: string;
	role: string;
	country: Country;
}

interface ProfileStat {
	label: string;
	value: string;
}

interface SubstitutePlayer extends TeamMember {
	status: string;
}

interface WeeklyPlacement {
	event: string;
	placement: string;
	prize: number;
}

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './profile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
	protected readonly manager = {
		fullName: 'Dmytro Kovalenko',
		pictureSrc: 'profile/manager-avatar.svg',
		country: {
			name: 'Ukraine',
			flagSrc: 'flags/ukraine.svg',
		},
		money: 125000,
		level: 18,
		reputation: 'Elite strategist',
		joined: 'Season 3',
	};
	protected readonly team = {
		fullName: 'Navi',
		pictureSrc: 'profile/team-badge.svg',
		country: {
			name: 'Ukraine',
			flagSrc: 'flags/ukraine.svg',
		},
		money: 840000,
		worldRank: 4,
		form: '8 wins / 2 losses',
		fanBase: '1.4M fans',
	};
	protected readonly managerStats: ProfileStat[] = [
		{
			label: 'Manager level',
			value: String(this.manager.level),
		},
		{
			label: 'Reputation',
			value: this.manager.reputation,
		},
		{
			label: 'Joined',
			value: this.manager.joined,
		},
	];
	protected readonly teamStats: ProfileStat[] = [
		{
			label: 'World rank',
			value: `#${this.team.worldRank}`,
		},
		{
			label: 'Current form',
			value: this.team.form,
		},
		{
			label: 'Fan base',
			value: this.team.fanBase,
		},
	];
	protected readonly members: TeamMember[] = [
		{
			name: 'Oleksandr Marchenko',
			role: 'In-game leader',
			country: {
				name: 'Ukraine',
				flagSrc: 'flags/ukraine.svg',
			},
		},
		{
			name: 'Mateusz Nowak',
			role: 'AWPer',
			country: {
				name: 'Poland',
				flagSrc: 'flags/poland.svg',
			},
		},
		{
			name: 'Lukas Novak',
			role: 'Entry fragger',
			country: {
				name: 'Czechia',
				flagSrc: 'flags/czechia.svg',
			},
		},
		{
			name: 'Erik Lindholm',
			role: 'Rifler',
			country: {
				name: 'Sweden',
				flagSrc: 'flags/sweden.svg',
			},
		},
		{
			name: 'Andrei Popescu',
			role: 'Support',
			country: {
				name: 'Romania',
				flagSrc: 'flags/romania.svg',
			},
		},
		{
			name: 'Serhii Bondarenko',
			role: 'Coach',
			country: {
				name: 'Ukraine',
				flagSrc: 'flags/ukraine.svg',
			},
		},
	];
	protected readonly substitutes: SubstitutePlayer[] = [
		{
			name: 'Jakub Zielinski',
			role: 'Rifler',
			status: 'Ready',
			country: {
				name: 'Poland',
				flagSrc: 'flags/poland.svg',
			},
		},
		{
			name: 'Mihai Ionescu',
			role: 'AWPer',
			status: 'Academy call-up',
			country: {
				name: 'Romania',
				flagSrc: 'flags/romania.svg',
			},
		},
		{
			name: 'Viktor Dvorak',
			role: 'Support',
			status: 'Recovery',
			country: {
				name: 'Czechia',
				flagSrc: 'flags/czechia.svg',
			},
		},
		{
			name: 'Noah Andersson',
			role: 'Entry fragger',
			status: 'Ready',
			country: {
				name: 'Sweden',
				flagSrc: 'flags/sweden.svg',
			},
		},
		{
			name: 'Yurii Melnyk',
			role: 'In-game leader',
			status: 'Tactical reserve',
			country: {
				name: 'Ukraine',
				flagSrc: 'flags/ukraine.svg',
			},
		},
	];
	protected readonly weeklyPlacements: WeeklyPlacement[] = [
		{
			event: 'BLAST Rivals Qualifier',
			placement: '1st place',
			prize: 45000,
		},
		{
			event: 'ESEA Premier Week 6',
			placement: '2nd place',
			prize: 18000,
		},
		{
			event: 'Practice League Cup',
			placement: 'Top 4',
			prize: 7500,
		},
	];
	protected readonly bestPlayer = {
		name: 'Mateusz Nowak',
		role: 'AWPer',
		rating: '1.32 rating',
		impact: '+47 opening duels',
		country: {
			name: 'Poland',
			flagSrc: 'flags/poland.svg',
		},
	};
	protected readonly totalMoney = computed(() => this.manager.money + this.team.money);

	protected formatMoney(value: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0,
		}).format(value);
	}
}
