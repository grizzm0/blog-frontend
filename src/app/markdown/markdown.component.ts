import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import markdown from 'markdown-it';
import hljs from 'highlight.js';

@Component({
  selector: 'gb-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownComponent {
  @Input()
  private content: string;

  get markdown(): string {
    if (!this.content) {
      return '';
    }

    const md = markdown({
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs has-language">' +
              '<div class="language">lang:' + lang + '</div>' +
              '<code>' + hljs.highlight(lang, str, true).value + '</code><' +
              '/pre>';
          } catch (__) {}
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      }
    });

    return md.render(this.content);
  }
}
