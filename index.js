miro.onReady( async () => {
    const plugin_name = 'events-plugin'
    const clientId = await miro.getClientId()

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
        try {
            await miro.addListener(events[i], (e) => {
                console.log(`${plugin_name} | ${clientId} | ${JSON.stringify(e.data)}`)
            })
        } catch (e) {
            console.warn(`${plugin_name} | ${clientId} `, e)
        }
    }
} );
