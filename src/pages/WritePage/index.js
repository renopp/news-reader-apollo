// @flow
import React, {Suspense} from 'react';
import {Value} from 'slate';
import styled from 'styled-components';
import Container from '../../components/Container';
import Button from '../../core-ui/Button';
import UploadButton from './UploadButton';
import PageLoader from '../../components/PageLoader';
const Editor = React.lazy(() => import('../../components/Editor'));

const EditorContainer = styled.div`
  color: black;
  padding: 40px;
  max-width: 750px;
  border-radius: 4.5px;
  margin: 65px auto 45px;
  background-color: white;
  box-shadow: rgba(118, 143, 255, 0.1) 0px 16px 24px 0px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 8px 0;
  border: none;
  outline: none;
  font-size: 32px;
  font-weight: bold;
  font-family: inherit;
  margin-bottom: 16px;
`;

const WritePage = () => {
  const [title, setTitle] = React.useState('');
  const [value, setValue] = React.useState<Value>(null);

  React.useEffect(() => {
    const localDraft = localStorage.getItem('draft');
    if (localDraft) setValue(Value.fromJSON(JSON.parse(localDraft)));
  }, []);

  return (
    <Container>
      <EditorContainer>
        <TitleInput
          value={title}
          placeholder="Write title here..."
          onChange={e => setTitle(e.target.value)}
        />
        <Suspense fallback={<PageLoader />}>
          <Editor
            value={value}
            onEditorValueChange={val => setValue(val)}
            isEnableEditing={true}
          />
        </Suspense>
        <Button
          onClick={() => {
            const draft = value.toJSON();
            localStorage.setItem('draft', JSON.stringify(draft));
          }}>
          SAVE
        </Button>
        <Button
          onClick={() => {
            const draft = value.toJSON();
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(draft));
          }}>
          LOG
        </Button>
        <UploadButton title={title} value={value} />
      </EditorContainer>
    </Container>
  );
};

export default WritePage;
