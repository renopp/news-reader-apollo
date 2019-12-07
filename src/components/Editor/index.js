// @flow
import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Value} from 'slate';
import {Editor as SlateEditor} from 'slate-react';
import {Bold, Italic, List, Code, Underline, Image} from 'react-feather';

import {
  renderMark,
  renderBlock,
  MarkHotkey,
  onKeyDown,
  insertImage,
} from './EditorUtils';

import FormatToolbar from '../FormatToolbar';
import ToolTipButton from '../TooltipButton';

// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: '',
          },
        ],
      },
    ],
  },
});

// Create an array of plugins.
const plugins = [
  MarkHotkey({key: 'b', type: 'bold'}),
  MarkHotkey({key: 'l', type: 'list'}),
  MarkHotkey({key: '`', type: 'code'}),
  MarkHotkey({key: "'", type: 'quote'}),
  MarkHotkey({key: 'i', type: 'italic'}),
  MarkHotkey({key: 'u', type: 'underline'}),
  MarkHotkey({key: '-', type: 'strikethrough'}),
];

const StyledEditor = styled(SlateEditor)`
  line-height: 1.58;
  font-size: 1.1em;

  blockquote {
    color: grey;
    border-left: 3px #ff9900 solid;
    padding-left: 8px;
    margin-left: 16px;
    font-style: italic;
  }

  pre {
    background: #e5e5e5;
    padding: 8px;

    & > code {
      padding: 0;
      font-size: inherit;
      color: black;
    }
  }

  @media only screen and (max-width: 768px) {
    blockquote {
      margin: 16px 0;
    }
  }
`;

const schema = {
  blocks: {
    image: {
      isVoid: true,
    },
  },
};

type Props = {
  value: Value,
  isEnableEditing?: boolean,
  onEditorValueChange: (value: Value) => void,
};

type State = {
  value: Value,
};

// const getValueString = (value: Value) => JSON.stringify(value.toJSON());

class Editor extends React.Component<Props, State> {
  editor: SlateEditor;
  static defaultProps = {
    isEnableEditing: true,
    onEditorValueChange: () => {},
  };

  static getDerivedStateFromProps(props: Props) {
    const obj = {
      value: props.value,
    };

    if (obj.value) {
      return obj;
    }
    return null;
  }

  state = {
    value: initialValue,
  };

  onChange = ({value}: {value: Value}) => {
    this.props.onEditorValueChange(value);
  };

  onMarkClick = (e: Event, type: string) => {
    e.preventDefault();
    if (type !== 'list' && !type.includes('heading')) {
      const change = this.editor.toggleMark(type);
      this.onChange(change);
    } else {
      this.editor.setBlocks(type);
    }
  };

  onClickImage = (event: Event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    const src = window.prompt('Enter the URL of the image:');
    if (!src) return;
    this.editor.command(insertImage, src);
  };

  render() {
    return (
      <Fragment>
        {this.props.isEnableEditing && (
          <FormatToolbar>
            <ToolTipButton onPointerDown={e => this.onMarkClick(e, 'bold')}>
              <Bold />
            </ToolTipButton>
            <ToolTipButton onPointerDown={e => this.onMarkClick(e, 'italic')}>
              <Italic />
            </ToolTipButton>
            <ToolTipButton onPointerDown={e => this.onMarkClick(e, 'list')}>
              <List />
            </ToolTipButton>
            <ToolTipButton onPointerDown={e => this.onMarkClick(e, 'code')}>
              <Code />
            </ToolTipButton>
            <ToolTipButton
              onPointerDown={e => this.onMarkClick(e, 'underline')}>
              <Underline />
            </ToolTipButton>
            <ToolTipButton
              onPointerDown={e => this.onMarkClick(e, 'strikethrough')}>
              <del style={{fontSize: 18}}>STRIKE</del>
            </ToolTipButton>
            <ToolTipButton
              onPointerDown={e => this.onMarkClick(e, 'heading-one')}>
              <span style={{fontSize: 18, fontWeight: 'bold'}}>H1</span>
            </ToolTipButton>
            <ToolTipButton
              onPointerDown={e => this.onMarkClick(e, 'heading-two')}>
              <span style={{fontSize: 18, fontWeight: 'bold'}}>H2</span>
            </ToolTipButton>
            <ToolTipButton
              onPointerDown={e => this.onMarkClick(e, 'heading-three')}>
              <span style={{fontSize: 18, fontWeight: 'bold'}}>H3</span>
            </ToolTipButton>
            <ToolTipButton onPointerDown={this.onClickImage}>
              <Image />
            </ToolTipButton>
          </FormatToolbar>
        )}

        <StyledEditor
          ref={ref => (this.editor = ref)}
          placeholder="Write something"
          value={this.state.value}
          onChange={this.onChange}
          plugins={plugins}
          schema={schema}
          renderMark={renderMark}
          renderBlock={renderBlock}
          onKeyDown={onKeyDown}
          readOnly={!this.props.isEnableEditing}
        />
      </Fragment>
    );
  }
}

export default Editor;
