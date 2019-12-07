// @flow
import React from 'react';
import {Editor, RenderNodeProps, RenderMarkProps} from 'slate-react';

const SingleCode = (props: {children: string, attributes: any}) => (
  <code
    style={{background: '#ff9900', color: 'white', padding: '2px'}}
    {...props.attributes}>
    {props.children}
  </code>
);

function renderMark(props: RenderMarkProps, editor: Editor, next: () => any) {
  const {mark, attributes} = props;
  switch (mark.type) {
    case 'bold':
      return <strong {...attributes}>{props.children}</strong>;
    case 'italic':
      return <em {...attributes}>{props.children}</em>;
    case 'underline':
      return <u {...attributes}>{props.children}</u>;
    case 'strikethrough':
      return <del {...attributes}>{props.children}</del>;
    case 'code':
      return <SingleCode {...props.attributes}>{props.children}</SingleCode>;
    default:
      return next();
  }
}

function renderBlock(props: RenderNodeProps, editor: Editor, next: () => any) {
  switch (props.node.type) {
    case 'paragraph':
      return (
        <p
          {...props.attributes}
          className={props.node.data.get('className')}
          style={{margin: '0'}}>
          {props.children}
        </p>
      );
    case 'quote':
      return <blockquote {...props.attributes}>{props.children}</blockquote>;
    case 'bulleted-list':
      return <ul {...props.attributes}>{props.children}</ul>;
    case 'heading-one':
      return <h1 {...props.attributes}>{props.children}</h1>;
    case 'heading-two':
      return <h2 {...props.attributes}>{props.children}</h2>;
    case 'heading-three':
      return <h3 {...props.attributes}>{props.children}</h3>;
    case 'list':
      return <li {...props.attributes}>{props.children}</li>;
    case 'image': {
      const src = props.node.data.get('src');
      return (
        <img
          {...props.attributes}
          src={src}
          style={{
            display: 'block',
            maxWidth: '100%',
            margin: 'auto',
            boxShadow: props.isFocused ? '0 0 0 2px blue' : 'none',
          }}
        />
      );
    }
    default:
      return next();
  }
}

export {renderMark, renderBlock};
