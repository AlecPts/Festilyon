<script>
    import PartyCard from "./PartyCard.svelte";

	  const parties = [
    {
      "titre": "Soirée Disco",
      "date": "2024-06-15",
      "heure": "20:00",
      "lieu": {
        "nom": "Club Paradise",
        "adresse": "123 Rue de la Liberté, 75001 Paris, France"
      },
      "description": "Une soirée pleine de musique disco des années 70.",
      "prix": 20,
      "organisateur": "DJ Funky",
      "contact": {
        "email": "contact@djfunky.com",
        "telephone": "+33 1 23 45 67 89"
      }
    },
    {
      "titre": "Soirée Cinéma en Plein Air",
      "date": "2024-06-22",
      "heure": "21:00",
      "lieu": {
        "nom": "Parc Montsouris",
        "adresse": "2 Rue Gazan, 75014 Paris, France"
      },
      "description": "Projection en plein air du film 'La La Land'.",
      "prix": 10,
      "organisateur": "Cinéma Plein Air",
      "contact": {
        "email": "info@cinemapleinair.fr",
        "telephone": "+33 1 98 76 54 32"
      }
    },
    {
      "titre": "Soirée Jeux de Société",
      "date": "2024-07-05",
      "heure": "19:00",
      "lieu": {
        "nom": "Café Ludique",
        "adresse": "45 Rue des Échecs, 69001 Lyon, France"
      },
      "description": "Venez découvrir et jouer à une sélection de jeux de société.",
      "prix": 15,
      "organisateur": "Ludothèque Lyon",
      "contact": {
        "email": "contact@ludolyon.fr",
        "telephone": "+33 4 78 39 45 21"
      }
    },
    {
      "titre": "Concert Rock",
      "date": "2024-08-12",
      "heure": "20:30",
      "lieu": {
        "nom": "Le Rockeur",
        "adresse": "78 Avenue du Rock, 33000 Bordeaux, France"
      },
      "description": "Concert live des meilleurs groupes de rock locaux.",
      "prix": 25,
      "organisateur": "Rock Association",
      "contact": {
        "email": "info@rockasso.com",
        "telephone": "+33 5 56 78 90 12"
      }
    }
    ]
</script>

<div>
    <h3 class="text-2xl text-white mb-4 ml-3">Selon vos abonnements</h3>

    <div class="flex flex-row mx-4 overflow-x-scroll">
        {#each parties as party}
            <PartyCard party={party} />
        {/each}
    </div>
</div>