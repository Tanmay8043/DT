<script>
	import { Modal, Button } from 'svelte-chota';
	let modal_open = false;
	import { onMount } from 'svelte';
	import { loop } from 'svelte/internal';

	let characters = ['✨', '', '✨'];

	let confetti = new Array(100)
		.fill()
		.map((_, i) => {
			return {
				character: characters[i % characters.length],
				x: Math.random() * 100,
				y: -20 - Math.random() * 100,
				r: 0.1 + Math.random() * 1
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			confetti = confetti.map((emoji) => {
				emoji.y += 0.7 * emoji.r;
				if (emoji.y > 120) emoji.y = -20;
				return emoji;
			});
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});
</script>

<body>
	<Button on:click={(event) => (modal_open = true)}>Show modal</Button>
	<Modal bind:open={modal_open}>
		{#each confetti as c}
			<span
				class="absolute text-xl select-none"
				style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span
			>
		{/each}
		<div class=" rounded-lg ">
			<div class="flex-col rounded shadow  items-center">
				<div class="flex flex-row mt-8 space-x-1">
					<svg
						class="items-center  w-24 h-24 font-extrabold  text-green-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7 "
						/></svg
					>
					<h1 class="text-gray-800  text-center font-semibold text-6xl">All SET!!</h1>
				</div>

				<ul class="mt-4 ml-4 text-gray-800 text-xl font-semibold ">
					<li>* We will Reach You within 2-3 Business Days</li>
					<li>* For any Problem or Query,Contact Us</li>
				</ul>

				<div class="flex-row flex space-x-4 justify-center ">
					<div class="px-4 py-4 h-36 ml-6 mt-16 w-64 rounded overflow-hidden shadow-lg">
						<svg
							class=" ml-24  text-red-600 w-10 min-w-10 h-10"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
							/></svg
						>
						<p class="mt-8 text-gray-700 text-center text-lg font-semibold">business@tensaX.com</p>
					</div>

					<div class="px-4 py-4 h-36 ml-6 mt-16 w-64 rounded overflow-hidden shadow-lg">
						<svg
							class="w-10 h-10 ml-24  text-sky-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/></svg
						>
						<p class="mt-8 text-gray-700 text-center text-lg font-semibold">8306618299</p>
					</div>

					<div class="px-4 py-4 mb-14 h-36 mt-16 ml-6 w-64 rounded overflow-hidden shadow-lg">
						<svg
							class="w-10 h-10 ml-24"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/></svg
						>
						<a
							href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TM8tM7WIz8gzYLRSNagwtjRLSTJPNrFMMjQzNzZMszKoMDFJM0k2MUs0TUs2SrZMTvYSLUnNK06sUMjMy8svSyzJzM9TyElMAgBioBfm&q=tensax+innovation+lab&oq=t&aqs=chrome.1.69i60j46i39i175i199j69i59l2j69i60l3j69i65.2790j0j7&sourceid=chrome&ie=UTF-8#"
							class="text-gray-700 text-center text-lg font-semibold"
						>
							C-411, Siddharth Nagar, Near Airport, Jaipur, Rajasthan 302029, Jaipur, Rajasthan
							302017
						</a>
					</div>
				</div>
			</div>
		</div></Modal
	>
</body>
