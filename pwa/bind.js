(function () {
    var installButton = $(".install-pwa");
    var installEvent;

    window.addEventListener('beforeinstallprompt', function (e) {
        installButton.removeClass("d-none");
        installEvent = e;
    });
    window.addEventListener('load', async function () {
        if ('serviceWorker' in navigator) {
            try {
                await navigator.serviceWorker.register('/pwa/serviceworker.js');
                installButton.removeClass("d-none");
            }
            catch (e) {
                console.log('SW registration failed');
            }
        }
    });

    installButton.click(async function () {
        installEvent.prompt();

        var { outcome } = await installEvent.userChoice;
        var accepted = outcome == "accepted";

        if (accepted)
            installButton.addClass("d-none");
    });
})();