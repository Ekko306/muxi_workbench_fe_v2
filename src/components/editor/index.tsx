import React from 'react'
import './index.less'
import { Editor } from '@tinymce/tinymce-react'

// eslint-disable-next-line import/no-duplicates
import 'tinymce/tinymce'
// eslint-disable-next-line import/no-duplicates
import { Editor as TinyMCEEditor } from 'tinymce'
import 'tinymce/themes/silver/index'
import 'tinymce/plugins/image'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/table'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/textpattern'
import 'tinymce/plugins/tabfocus'
import 'tinymce/plugins/link'
import 'tinymce/themes/mobile'
import 'tinymce/icons/default'

interface Props {
    value: string
    onEditorChange: (a: string, editor: TinyMCEEditor) => void
}

const TinymceEditor: React.FC<Props> = ({ value, onEditorChange }) => {
    return (
        <div className="tinymce-editor">
            <Editor
                init={{
                    height: 600,
                    width: 885,
                    content_style:
                        'body {    background-color: #fbfbfb;} p { line-height: 1.6; color: #404040; font-size: 15px; margin:0; font-family: "Chinese Quote", "Segoe UI", Roboto, "PingFang SC","Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji"}',
                    language: 'zh_CN',
                    language_url: 'http://static.muxixyz.com/workbench/lang/zh_CN.js',
                    powerpaste_allow_local_images: true,
                    paste_data_images: true,
                    skin_url: 'http://static.muxixyz.com/workbench/skins/ui/oxide',
                    body_class: '',
                    textpattern_patterns: [
                        { start: '*', end: '*', format: 'italic' },
                        { start: '**', end: '**', format: 'bold' },
                        {
                            start: '~',
                            end: '~',
                            cmd: 'createLink',
                            value: 'http://work.muxi-tech.xyz'
                        },
                        { start: '#', format: 'h1' },
                        { start: '##', format: 'h2' },
                        { start: '###', format: 'h3' },
                        { start: '####', format: 'h4' },
                        { start: '#####', format: 'h5' },
                        { start: '######', format: 'h6' },
                        { start: '* ', cmd: 'InsertUnorderedList' },
                        { start: '- ', cmd: 'InsertUnorderedList' },
                        { start: '+ ', cmd: 'InsertUnorderedList' },
                        {
                            start: '1. ',
                            cmd: 'InsertOrderedList',
                            value: { 'list-style-type': 'decimal' }
                        },
                        {
                            start: '1) ',
                            cmd: 'InsertOrderedList',
                            value: { 'list-style-type': 'decimal' }
                        },
                        {
                            start: 'a. ',
                            cmd: 'InsertOrderedList',
                            value: { 'list-style-type': 'lower-alpha' }
                        },
                        {
                            start: 'a) ',
                            cmd: 'InsertOrderedList',
                            value: { 'list-style-type': 'lower-alpha' }
                        },
                        {
                            start: 'i. ',
                            cmd: 'InsertOrderedList',
                            value: { 'list-style-type': 'lower-roman' }
                        },
                        {
                            start: 'i) ',
                            cmd: 'InsertOrderedList',
                            value: { 'list-style-type': 'lower-roman' }
                        },
                        { start: '---', replacement: '<hr/>' },
                        { start: '--', replacement: '—' },
                        { start: '-', replacement: '—' },
                        { start: '(c)', replacement: '©' },
                        { start: '//brb', replacement: 'Be Right Back' },
                        {
                            start: '//heading',
                            replacement:
                                '<h1 style="color: blue">Heading here</h1> <h2>Author: Name here</h2> <p><em>Date: 01/01/2000</em></p> <hr />'
                        }
                    ],
                    imagetools_cors_hosts: [
                        'work.muxi-tech.xyz',
                        'work.muxixyz.com',
                        'ossworkbench.muxixyz.com'
                    ],
                    plugins:
                        'tabfocus textpattern image paste link lists table imagetools codesample advlist wordcount',
                    toolbar:
                        'undo redo | bold italic formatselect | forecolor backcolor | alignleft aligncenter alignright  alignjustify | bullist numlist | image | link | codesample| wordcount'
                }}
                value={value}
                onEditorChange={onEditorChange}
            />
        </div>
    )
}

export default TinymceEditor
