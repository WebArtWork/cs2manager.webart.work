import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent, ModalService } from '@wawjs/ngx-ui';
import { tournaments as staticTournaments } from './tournament.data';
import { TournamentFormModalComponent } from './tournament-form-modal.component';

interface Tournament {
	id: number;
	name: string;
}

@Component({
	imports: [ButtonComponent, RouterLink],
	templateUrl: './tournaments.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentsComponent {
	private readonly _modalService = inject(ModalService);
	private readonly _nextTournamentId = signal(4);

	protected readonly tournaments = signal<Tournament[]>(
		staticTournaments.map(({ id, name }) => ({ id, name })),
	);
	protected readonly tournamentCount = computed(() => this.tournaments().length);

	protected openCreateTournament() {
		this._modalService.small({
			component: TournamentFormModalComponent,
			panelClass: 'max-w-lg',
			onCreate: (name: string) => this.addTournament(name),
		});
	}

	private addTournament(name: string) {
		const id = this._nextTournamentId();
		this._nextTournamentId.set(id + 1);
		this.tournaments.update((tournaments) => [{ id, name }, ...tournaments]);
	}
}
