<script>
    import { Card } from 'flowbite-svelte';

    export let party
</script>

<Card class="m-2" style="min-width: 350px; height: 250px">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {party.titre}
    </h5>

    <div>
        <div class="mb-1">
            <p>Le {party.date} à {party.heure}</p>
        </div>
        <div class="text-primary-600 mb-3">
            <p>{party.lieu.nom}, {party.lieu.adresse.split(',')[0]}</p>
        </div>
        <div class="rounded-md p-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-50" style="height: 78%">
            <p>{party.description}</p>
        </div>
    </div>

</Card>


