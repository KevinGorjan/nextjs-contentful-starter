import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>${children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data.target.fields.file.url}
        alt={node.data.target.fields.title || "Embedded Asset"}
      />
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node) => (
      <div>
        Embedded Entry:{" "}
        {node.data.target.fields.title || "Untitled Entry"}
      </div>
    ),
    [BLOCKS.TABLE]: (node, children) => <table>{children}</table>,
    [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <th>{children}</th>,
    [BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,
  },
  renderInline: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      <a href={`/entries/${node.data.target.sys.id}`}>
        {children}
      </a>
    ),
    [INLINES.ASSET_HYPERLINK]: (node, children) => (
      <a href={node.data.target.fields.file.url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    [INLINES.EMBEDDED_ENTRY]: (node) => (
      <span>
        {node.data.target.fields.title || "Embedded Inline Entry"}
      </span>
    ),
  },
};

export const Wysiwyg = (props) => {
  const html = documentToHtmlString(props.content);
  return (
    <div className='container mx-auto' dangerouslySetInnerHTML={{__html: html}} />
  );
};
