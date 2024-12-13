let _tsc = null;

Blazor.addEventListener("enhancednavigationstart", () => {
    if (!document.startViewTransition) return;

    _tsc = Promise.withResolvers();
    document.startViewTransition(() => _tsc?.promise);
});

Blazor.addEventListener("enhancednavigationend", () => {
    _tsc?.resolve();
});

