const types = {
    //auth
    login: '[Auth] Login',
    logout: '[Auth] Logout',

    //UI
    uiSetError: '[UI] set error',
    uiRemoveError: '[UI] remove error',
    uiStartLoading: '[UI] start loading',
    uiFinishLoading: '[UI] finish loading',

    //notes
    notesAddNew: '[Notes] new note',
    notesActive: '[Notes] set active note',
    notesLoad: '[Notes] load note',
    notesUpdated: '[Notes] update note',
    notesFileUrl: '[Notes] updated image url',
    notesDelete: '[Notes] delete note',
    notesLogoutCleaning: '[Notes] logout cleaning'
};

export default types