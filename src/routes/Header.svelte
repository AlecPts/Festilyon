<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';

</script>

<Navbar>
    <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Festilyon
        </span>
    </NavBrand>

    <NavHamburger id="nav-hamburger"/>

    <DarkMode />

    <NavUl >
        <NavLi href="/">Trouver une soirée</NavLi>
        <NavLi href="/">Organiser une soirée</NavLi>
        <NavLi href="/">Mes likes</NavLi>
        <NavLi href="/">Mon compte</NavLi>
    </NavUl>
</Navbar>

<style>
    
</style>