let BlockEmbed = Quill.import('blots/block/embed');
let Embed = Quill.import('blots/embed');
let Container = Quill.import('blots/container');
let Block = Quill.import('blots/block');
let Inline = Quill.import('blots/inline');
let TextBlot = Quill.import('blots/text');
let Blockquote = Quill.import('formats/blockquote');

let Link = Quill.import('formats/link');
let Icon = Quill.import('ui/icons');

class TweetBlot extends BlockEmbed {
  constructor(node) {
    super(node);
    // twttr.widgets.load(node);
  }

  static icon() {
    return '<svg viewBox="0 0 275 275" xmlns="http://www.w3.org/2000/svg"><path d="M91.1 239c94.4 0 146-78 146-145.8 0-2.3 0-4.5-.2-6.7 10-7.2 18.7-16.2 25.6-26.5-9.4 4.1-19.3 6.8-29.5 8a51.5 51.5 0 0 0 22.6-28.3c-10 6-21 10.2-32.6 12.4A51.3 51.3 0 0 0 135.6 99C94.4 96.9 56 77.4 30 45.3a51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3c-7.5 2-15.4 2.4-23.1.9a51.3 51.3 0 0 0 48 35.6 103 103 0 0 1-76 21.3c23.5 15 50.7 23 78.6 23" fill="#444" fill-rule="nonzero"/></svg>'
  }

  static create(value) {
    let node = super.create(value);
    let html = value;
    node.innerHTML = html;
    twttr.widgets.load(node);
    return node;
  }

  static value(node) {
    return node.innerHTML;
  }
}

TweetBlot.blotName = 'tweet';
TweetBlot.tagName = 'DIV';
TweetBlot.className = 'ql-tweet';
// TweetBlot.defaultChild = 'block';

// TweetBlot.allowedChildren = [Blockquote];
Icon['tweet'] = TweetBlot.icon();


Quill.register('formats/tweet', TweetBlot);

