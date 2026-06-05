import { RenderMode, ServerRoute } from '@angular/ssr';
import { tournaments } from './pages/tournaments/tournament.data';

export const serverRoutes: ServerRoute[] = [
	{
		path: 'tournaments/:id',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return tournaments.map((tournament) => ({ id: String(tournament.id) }));
		},
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
