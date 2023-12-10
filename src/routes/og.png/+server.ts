import type {RequestHandler} from '@sveltejs/kit'
import {ImageResponse} from '@vercel/og'

export const GET: RequestHandler = async ({url, fetch}) => {
	const sansFont = await fetch('/fonts/Inconsolata-Medium.ttf').then((res) =>
		res.arrayBuffer(),
	)

	const mascotUrl = new URL('/android-chrome-512x512.png', url)

	const html = {
		type: 'div',
		props: {
			children: {
				type: 'div',
				props: {
					children: [
						{
							type: 'img',
							props: {
								width: 320,
								height: 320,
								src: mascotUrl.toString(),
							},
						},
						{
							type: 'div',
							props: {
								children: 'SvelteKritic',
								style: {
									fontSize: 96,
									backgroundImage:
										'linear-gradient(to bottom, #059669, #a7f3d0)',
									backgroundClip: 'text',
									color: 'transparent',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column',
								},
							},
						},
					],
					style: {
						backgroundImage: 'linear-gradient(to bottom, #1a171c, #0d0b0f)',
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						padding: 48,
						borderRadius: 16,
						gap: 32,
					},
				},
			},
			style: {
				backgroundImage: 'linear-gradient(to top, #059669, #a7f3d0)',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 16,
				flexDirection: 'column',
			},
		},
	}

	return new ImageResponse(html, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: 'Inconsolata',
				data: sansFont,
				style: 'normal',
				weight: 500,
			},
		],
	})
}
