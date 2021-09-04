<script>
  import { page } from "$app/stores"
  import Drawer from "$lib/components/drawer/Drawer.svelte"
  import HomeIcon from "$lib/icons/HomeIcon.svelte"
  import PiIcon from "$lib/icons/PiIcon.svelte"
  import RelayIcon from "$lib/icons/RelayIcon.svelte"
  import { isSettingsDrawerOpen } from "$lib/store/store"

  const homeRoute = {
    href: '/',
    text: 'Home',
    icon: HomeIcon,
  }

  const links = [
    {
      href: '/hosts',
      text: 'Hosts',
      icon: PiIcon,
    },
    {
      href: '/relays',
      text: 'Relays',
      icon: RelayIcon,
    },
  ]

  function closeDrawer() {
    isSettingsDrawerOpen.set(false)
  }
</script>

<style>
  nav {
    padding: 2rem 0;
  }
  
  li a.active,
  li:hover {
    background-color: var(--color-primary);
  }

  a {
    display: flex;
    padding: 1rem 2rem;
    border: none;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  a.active,
  a:hover {
    border: none;
    color: var(--color-white);
  }

  hr {
    padding: 0;
    margin: 1rem 0;
    border: none;
    border-top: 1px solid var(--color-background-primary);
  }

  .linkIcon {
    width: 40px;
    display: flex;
    align-items: center;
  }
</style>

<Drawer bind:isOpen={$isSettingsDrawerOpen} handleCancel={closeDrawer} >
  <nav>
    <ul>
      <li>
        <a 
            class={$page.path === homeRoute.href ? "active" : ""} 
            href={homeRoute.href} 
            on:click={closeDrawer}
          >
            <span class="linkIcon">
              <svelte:component this={homeRoute.icon}/>
            </span>
            <span>{homeRoute.text}</span>
          </a>
      </li>
    </ul>
    <hr />
    <ul>
      {#each links as link}
        <li>
          <a 
            class={$page.path === link.href ? "active" : ""} 
            href={link.href} 
            on:click={closeDrawer}
          >
            <span class="linkIcon">
              <svelte:component this={link.icon}/>
            </span>
            <span>{link.text}</span>
          </a>
        </li>  
      {/each}
    </ul>
  </nav>
</Drawer>