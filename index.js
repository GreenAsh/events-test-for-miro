const plugin_name = 'events-plugin';

miro.onReady( async () => {
    window.addEventListener("message", async (event) => {
        console.log(`${plugin_name} | ${await miro.getClientId()} | ${JSON.stringify(event.data)}`);
    })
    const events = [
        'SELECTION_UPDATED',
        'WIDGETS_CREATED',
        'WIDGETS_DELETED',
        'WIDGETS_TRANSFORMATION_UPDATED',
        'ESC_PRESSED',
        'ALL_WIDGETS_LOADED',
        'COMMENT_CREATED',
        'CANVAS_CLICKED',
        'DATA_BROADCASTED',
        'RUNTIME_STATE_UPDATED',
        'METADATA_CHANGED',
        'ONLINE_USERS_CHANGED'
    ];
    for (let i = 0; i < events.length; i++) {
        miro.addListener(events[i], () => {})
    }
} );
