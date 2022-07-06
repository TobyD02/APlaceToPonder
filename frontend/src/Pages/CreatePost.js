import "../StyleSheets/CreatePost.css"
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function CreatePost() {

    const [md, setMd] = useState('')

    const update_viewer = (e) => {
        setMd(e.target.value)
    }

    return(
        <div id='create_post'>
            {/* Static Header */}
            <div id='static_toolbar'>
                <button>Save</button>
                <button>Edit</button>
            </div>

            {/* Split into two halves, live viewer and editor */}
            <div id='body_container'>
                <div id='editor'>
                <textarea 
                    id='editor_input'
                    onChange={update_viewer}
                    onKeyDown={e => {
                        if (e.key === 'Tab' && !e.shiftKey) {
                            document.execCommand('insertText', false, "\t")
                            e.preventDefault()
                            return false;
                        }
                    }}></textarea>
                </div>
                <div id='live_viewer_container'>
                    <div id='live_viewer'>
                        <ReactMarkdown>{md}</ReactMarkdown> 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CreatePost