'use strict'

module.exports = function auto_claim_box(mod) {
    let enabled = true;

    mod.command.add('claimbox', {
        $none() {
            enabled = !enabled;
            mod.command.message(`auto claim guard mission box ${enabled ? 'en' : 'dis'}abled`)
        }
    }, this);
    
    mod.hook("S_SYSTEM_MESSAGE", 1, (event) => {
        if (mod.parseSystemMessage(event.message).id == "SMT_FIELD_EVENT_REWARD_AVAILABLE" && enabled)  mod.send('C_REQUEST_FIELD_POINT_REWARD', 1, {});
    });

};