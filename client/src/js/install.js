const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Save event
    window.deferredPrompt = event;
    // Remove 'hidden' class
    // Added a 'hidden' class to style.css
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // View prompt
  promptEvent.prompt();

  // Reset
  // Deferred prompt variable can only be used once
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // This will clear the prompt
    window.deferredPrompt = null;
});