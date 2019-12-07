// @flow
import React from 'react';
import {Editor} from 'slate-react';
import {onKeyDown} from './keyEvent';
import {renderMark, renderBlock} from './renderer';

const BLOCK_TAGS = {
  blockquote: 'quote',
  p: 'paragraph',
  h1: 'heading-one',
  h2: 'heading-two',
  h3: 'heading-three',
  ul: 'bulleted-list',
  li: 'list',
};

function MarkHotkey(options: {key: string, type: string}) {
  const {type, key} = options;
  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    // $FlowFixMe
    onKeyDown(event: React.ChangeEvent<HTMLInputElement>, editor, next) {
      // If it doesn't match our `key`, let other plugins handle it.
      if (!event.ctrlKey || event.key !== key) return next();
      // Prevent the default characters from being inserted.
      event.preventDefault();
      // Toggle the mark `type`.
      const isBlockTags = Object.keys(BLOCK_TAGS).some(
        valueKey => BLOCK_TAGS[valueKey] === type
      );
      if (isBlockTags) {
        const isCode = editor.value.blocks.some(block => block.type === type);
        // Toggle the block type depending on `isCode`.
        editor.setBlocks(isCode ? 'paragraph' : type);
        // editor.insertBlock(isCode ? 'paragraph' : type);
      } else {
        editor.toggleMark(type);
      }
      return next();
    },
  };
}

function insertImage(editor: Editor, src: any, target: any) {
  if (target) {
    editor.select(target);
  }
  editor.insertBlock({
    type: 'image',
    data: {src},
  });
}

export {renderMark, renderBlock, MarkHotkey, onKeyDown, insertImage};
