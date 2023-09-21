import './styles.scss'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

const htmlContent = `<h1><a href="https://tiptap.dev/">Tiptap</a></h1>
<p><strong>Hello World</strong></p>`

const textContent = `Hello World
This is content with a new line. Is this working?

Lets see if multiple new lines are inserted correctly`

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <>
      <button testId="html-content" onClick={() => editor.chain().insertContent(htmlContent).focus().run()}>
        Insert html content
      </button>
      <button testId="text-content" onClick={() => editor.chain().insertContent(textContent).focus().run()}>
        Insert text content
      </button>
    </>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
    },
    orderedList: {
      keepMarks: true,
    },
  }),
]

const content = ''

export default () => {
  return (
    <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
  )
}
