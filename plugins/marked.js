import marked from 'marked'
import highlight from './highlight'
import Config from '../config'
import DOMPurify from 'dompurify'

const languages = [
    'cpp',
    'xml',
    'bash',
    'coffeescript',
    'css',
    'markdown',
    'http',
    'java',
    'javascript',
    'json',
    'less',
    'makefile',
    'nginx',
    'php',
    'python',
    'scss',
    'sql',
    'stylus'
];
import defaultConfig from '@/config/const'

const renderer = new marked.Renderer();

marked.setOptions({
    renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: (code, lang) => {
        if (languages.includes(lang)) {
            return highlight.highlight(lang, code).value
        }
        return highlight.highlightAuto(code).value
    },
})

const imageParse = (src, title, alt) => {
    /*if (!src.includes(Config.staticPath)) {
        return (`<figure class="image-wrapper">
                    <div class="progress-image">
                          <img src="${src}" title="${title || alt || defaultConfig.title}" />
                    </div>
                    <div class="image-caption">${title || alt || ''}</div>
                </figure>`)
    }*/
    return `<figure class="image-wrapper">
                  <div class="progress-image">
                        <img src="${src}" title="${title || alt || defaultConfig.title}" class="thumbnail"/>
                        <img
                          data-origin="${src}"
                          data-src="${src}" title="${title || alt || defaultConfig.title}"
                          class="image-popper real-image"/>
                  </div>
                  <div class="image-caption">${title || alt || ''}</div>
            </figure>`
}
// -thumbnail -progressive
const linkParser = (href, title, text) => {
    const self = href.substr(0, 1) === '#'
    return `<a href="${href}" target="${self ? '_self' : '_blank'}">${text}</a>`
}

renderer.image = imageParse
renderer.link = linkParser

export default (content) => {
    if (typeof content !== 'string') {
        return ''
    }
    let html = marked(content, {renderer})
    if (DOMPurify.sanitize) {
        html = DOMPurify.sanitize(html)
    }
    return html
}
