import styles from './post-body.module.css'
import classNames from 'classnames';

export default function PostBody({ content }) {
  let className = classNames(
    styles.content,
    'entry-content'
  );
  return (
    <div className="max-w-2xl mx-auto">
      <div
        // className={`${styles.content} entry-content`}
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
