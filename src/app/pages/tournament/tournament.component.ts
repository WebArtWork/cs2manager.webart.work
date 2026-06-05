import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { getTournamentById } from '../tournaments/tournament.data';

@Component({
	imports: [RouterLink],
	templateUrl: './tournament.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentComponent {
	private readonly _route = inject(ActivatedRoute);

	protected readonly tournament = computed(() => {
		const id = Number(this._route.snapshot.paramMap.get('id'));

		return getTournamentById(id);
	});

	protected roundDifferenceLabel(value: number) {
		return value > 0 ? `+${value}` : `${value}`;
	}
}
