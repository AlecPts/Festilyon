<script>
	import "../app.css";
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<header>
		<Header />
	</header>

	<main class="mx-4 my-4">
		<slot></slot>
	</main>

	<footer class="absolute bottom-1 text-center w-full">
		<p class="text-gray-700 dark:text-gray-400">fait par Alec</p>
	</footer>
</div>