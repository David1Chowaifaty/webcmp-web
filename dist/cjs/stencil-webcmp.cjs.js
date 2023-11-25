'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4476fe0b.js');

/*
 Stencil Client Patch Browser v4.7.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-webcmp.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["cm-card.cjs",[[1,"cm-card"]]],["cm-button_8.cjs",[[2,"cm-main-app",{"selectedColor":[32]}],[6,"cm-button",{"type":[513],"disabled":[516],"variants":[513],"name":[513],"value":[513],"isLoading":[516,"is-loading"]}],[2,"cm-checkbox",{"name":[513],"required":[516],"disabled":[516],"value":[513],"checked":[1540],"defaultChecked":[516,"default-checked"],"labelMessage":[513,"label-message"]}],[2,"cm-dropdown",{"itemNames":[16],"rtl":[1540],"search":[516],"dropdownTitle":[513,"dropdown-title"],"isDropdownVisible":[32],"searchQuery":[32],"selectedItemName":[32],"currentHighlightedIndex":[32],"filteredItemNames":[32]},[[4,"click","handleDocumentClick"]]],[2,"cm-input",{"type":[513],"name":[513],"placeholder":[513],"value":[513],"inputid":[513],"class":[513],"required":[516],"disabled":[516],"readonly":[516],"maxlength":[514],"min":[520],"max":[520],"step":[520],"pattern":[513],"autocomplete":[513],"autofocus":[516],"size":[514],"multiple":[516]}],[2,"cm-switch",{"name":[513],"required":[516],"disabled":[516],"value":[513],"checked":[1540],"defaultChecked":[516,"default-checked"]}],[2,"cm-toast",{"position":[1537],"swipable":[1540],"isVisible":[32],"isDragging":[32],"hideToast":[64],"showToast":[64]},[[16,"toast","onToast"]]],[2,"cm-spinner"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=stencil-webcmp.cjs.js.map