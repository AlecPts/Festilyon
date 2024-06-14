<script>
    import { Label, Input } from 'flowbite-svelte';
</script>

<h1 class="mt-10">Festilyon</h1>

<div class="bg-gray-700 p-10 mx-5 rounded-lg md:max-w-screen-sm md:mx-auto">
    <h3 class="text-3xl font-semibold mb-6 dark:text-slate-200">Connectez-vous à votre compte</h3>
    <div class="mb-6">
        <Label for="default-input" class="block mb-2">Votre email</Label>
        <Input id="default-input" type="email" placeholder="name@example.com" />
    </div>
    <div class="mb-6">
        <Label for="default-input" class="block mb-2">Votre mot de passe</Label>
        <Input id="default-input" type="password" />
    </div>
    <button type="submit" class="w-full my-3 text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign in to account</button>
    <p class="mt-3 dark:text-slate-200">Vous n'avez pas de compte ? <a href="../register/" class="text-primary-500">S'inscrire</a></p>
</div>