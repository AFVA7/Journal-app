import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => { //payload: note
            state.isSaving = false;
            state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note);

            state.messageSaved = `${action.payload.title}, actualizada correctamente!`
        },
        setFhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearsNoteLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {//payload: id
            state.active = null;
            state.notes = state.notes.filter(note => note.id !== action.payload);
            // state.messageSaved = 'Nota eliminada correctamente!';
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    clearsNoteLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setFhotosToActiveNote,
    setNotes,
    setSaving,
    updateNote,
} = journalSlice.actions;