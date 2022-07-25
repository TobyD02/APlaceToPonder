import "../StyleSheets/CreatePost.css"
import React, {useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import PageHeader from './PageHeader'

const CreatePost = () => {
    
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [html, setHtml] = useState({
        __html: ''
    })

    const changeState = (state) => {
        setEditorState(state)
        setHtml({
            __html: draftToHtml(convertToRaw(state.getCurrentContent()))
        })
    }

    return(
        <div style={styles.body}>
            <PageHeader />
            <div style={styles.container}>
                <div style={styles.editorContainer}>
                    <Editor 
                        onKeyPress = {changeState}
                        placeholder="Share a thought..."
                        editorState={editorState}
                        onEditorStateChange={changeState}
                        toolbarStyle={{borderRadius: '0px', color: '#3E3E3E'}}
                        editorStyle={{color: '#dddddd', marginLeft: '20px'}}
                        toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                        }}
                    />
                </div>
                <div style={styles.html_display}>
                    <div style={{padding: '10px'}} dangerouslySetInnerHTML={html}/>
                </div>
            </div>
        </div>
    )
}

const styles = {
    body: {
        width: '100vw',
        height: '100vh',
        // backgroundColor: '#F6D09A',
        // backgroundColor: '#505050',
        // backgroundColor: '#F0BD75',
        backgroundColor: '#FBBA5E',
        overflowX: 'hidden',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: 'calc(100% - 200px)',
        height:'calc(100% - 50px)',
        position: 'absolute',
        top:'50px',
    },
    editorContainer: {
        width: 'calc(50vw - 100px)',
        backgroundColor: '#dddddd',
        backgroundColor: '#333333',
        marginLeft: '100px',
    },
    html_display: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left:'50vw',
        backgroundColor: '#333333',
        backgroundColor: '#dddddd',
        color: '#333333',
        width: 'calc(50vw - 100px)',
        height: '100%',
        marginRight: '100px',
    }
}

export default CreatePost