// @flow
import {EventHook, Editor} from 'slate-react';

const onBackspace = (event, editor: Editor, next) => {
  const {value} = editor;
  const {selection} = value;
  if (selection.isExpanded) return next();
  if (selection.start.offset !== 0) return next();

  const {startBlock} = value;
  if (startBlock.type === 'paragraph') return next();

  event.preventDefault();
  editor.setBlocks('paragraph');
  if (startBlock.type === 'list') {
    editor.unwrapBlock('bulleted-list');
  }
  return null;
};

const onEnter = (event, editor: Editor, next) => {
  const {value} = editor;
  const {selection, startBlock} = value;
  const {start, end, isExpanded} = selection;
  if (isExpanded) return next();

  if (start.offset === 0 && startBlock.text.length === 0)
    return onBackspace(event, editor, next);
  if (end.offset !== startBlock.text.length) return next();

  if (
    startBlock.type !== 'heading-one' &&
    startBlock.type !== 'heading-two' &&
    startBlock.type !== 'heading-three' &&
    startBlock.type !== 'quote'
  ) {
    return next();
  }

  event.preventDefault();
  editor.splitBlock().setBlocks('paragraph');
  return null;
};

const onEndSection = (event, editor: Editor, next) => {
  const {
    value: {startBlock},
  } = editor;

  if (startBlock.type === 'paragraph') return next();

  editor.insertBlock(startBlock.type).unwrapBlock(startBlock.type);

  event.preventDefault();
  editor.setBlocks('paragraph');
  return next();
};

const onKeyDown: EventHook = (event, editor, next) => {
  if (event.ctrlKey && event.key === 'Enter')
    return onEndSection(event, editor, next);
  switch (event.key) {
    case 'Backspace':
      return onBackspace(event, editor, next);
    case 'Enter':
      return onEnter(event, editor, next);
    default:
      return next();
  }
};

export {onKeyDown};
