/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router";

describe('test pushToHistory', () => {
    test('settings', () => {
        var state = pushToHistory('settings',0);
        expect(state.length).toBe(history.length);
        expect(state.state.page).toBe('settings');
    });
    
    test('default', () => {
        var state = pushToHistory('',0);
        expect(state.length).toBe(history.length);
        expect(state.state.page).toBe(undefined);
    });
    
    test('entry', () => {
        var state = pushToHistory('entry',1);
        expect(state.length).toBe(history.length);
        expect(state.state.page).toBe("entry1");
    });
});
